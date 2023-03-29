var response = require('./../res/response.js');
var connection = require('./../config/connection.js');
const bcrypt = require('bcrypt');

exports.index = function(req, res){
    response(200, "API admin rede bous!!", "Ready", res)
}

exports.registerAdmin = async function(req, res){

    const {name, email, password, confPassword} = req.body
    if(password != confPassword){
        return response(400, "Password And Confirm Password Invalid!!", "Error", res);
    }else {
        const sql = `INSERT INTO tb_admin (name, email, password) 
        VALUES ('${name}', '${email}', '${password}')`;
    
        connection.query(sql, (err, fields) => {
            if (err) response(500, "Invalid", "Error", res)
            if (fields?.affectedRows){
                const data = {
                    isSuccess: fields.affectedRows,
                    id: fields.insertId,
                }
                response(200, data, "Register Successfuly!", res)
            }
        })
    }
}

exports.loginAdmin = function(req, res){

    const { email, password } = req.body
    const sql = `SELECT * from tb_admin WHERE email = '${email}' AND password = '${password}'`;

    connection.query(sql, (err, fields) => {
        if (err) throw err
        if (fields.length > 0){
            response(200, fields, "Login Successfuly!", res)
        }else{
            response(404, "Wrong email and password", "Error!", res)
        }
    })
}