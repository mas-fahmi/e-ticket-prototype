const Admin = require('./../models/AdminModels.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async function(req, res) {
    const { name, email, password, confPassword } = req.body;
    if (password != confPassword)
    return res.status(400).json({msg: "Invalid Password And Confirm Password!!"});
    const salt = await bcrypt.genSalt();
    const hashPw = await bcrypt.hash(password, salt);
    try {
        await Admin.create({
            name: name,
            email: email,
            password: hashPw
        });
        res.json({msg: "Register DON!!!"})
    } catch (error) {
        return res.json({msg: 'Error!!'})
    }
}

exports.getAdmin = async function(req, res){
    try {
        const admin = await Admin.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(admin)
    } catch (error) {
        console.log(error);
    }
}

exports.loginAdmin = async function(req, res){
    try {
        const admin = await Admin.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, admin[0].password);
        if(!match)
        return res.status(400).json({msg: "Invalid Password!!"});
        const adminId = admin[0].id;
        const name = admin[0].name;
        const email = admin[0].email;
        const accesToken = jwt.sign({adminId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '25s'
        });
        const refreshToken = jwt.sign({adminId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Admin.update({refresh_token: refreshToken}, {
            where: {
                id: adminId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({accesToken, msg: "Login Succesfully!!"})
    } catch (error) {
        return res.json({msg: "Invalid Email!!"})
    }
}

exports.logoutAdmin = async function(req, res){
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const admin = await Admin.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if(!admin[0]) return res.sendStatus(204);
    const adminId = admin[0].id;
    await Admin.update({refresh_token: null}, {
        where: {
            id: adminId
        }
    });
    res.clearCookie('refreshToken');
    return res.json({msg: "Account Logout"})
}