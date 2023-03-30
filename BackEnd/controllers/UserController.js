const Users = require('./../models/UserModels.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUsers = async function(req, res) {
    const { name, email, password, confPassword } = req.body;
    if (password != confPassword)
    return res.status(400).json({msg: "Invalid Password And Confirm Password!!"});
    const salt = await bcrypt.genSalt();
    const hashPw = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPw
        });
        res.json({msg: "Register DON!!!"})
    } catch (error) {
        return res.json({msg: 'Error!!'})
    }
}

exports.getUsers = async function(req, res){
    try {
        const user = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}

exports.loginUsers = async function(req, res){
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match)
        return res.status(400).json({msg: "Invalid Password!!"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accesToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '25s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({accesToken})
    } catch (error) {
        return res.json({msg: "Invalid Email!!"})
    }
}

exports.logoutUsers = async function(req, res){
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null}, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200)
}