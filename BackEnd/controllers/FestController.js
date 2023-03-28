var response = require('../res/response.js');
var connection = require('../config/connection.js');

exports.index = function(req, res){
    response(200, "API fest rede bous!!", "Ready", res)
}

exports.addFest = function(req, res){

    const {fest_name, price, slot} = req.body

    const sql = `INSERT INTO tb_fest (fest_name, price, slot) 
    VALUES ('${fest_name}', ${price}, ${slot})`;

    connection.query(sql, (err, fields) => {
        if (err) response(500, "Invalid", "Error", res)
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Post Fest Successfuly", res)
        }
    })
}

exports.showFest = function(req, res){
    const sql = 'SELECT * FROM tb_fest'
    connection.query(sql, (err, fields) => {
        response(200, fields, "SUCCESS", res)
    })
}

exports.updateFest = function(req, res){
    const { fest_name, price, slot } = req.body;
    const { id } = req.params;

    const sql = `UPDATE tb_fest SET fest_name = '${fest_name}', price = ${price}, slot = ${slot} WHERE id = ${id}`;

    connection.query(sql, (err, fields) => {
        if (err) response(500, "Invalid", "Error", res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                message: fields.message,
            }
            response(200, data, "Update Data Successfuly", res)
        } else {
            response(404, "Unknown Data", "Error", res)
        }
    })
}

exports.deleteFest = function(req, res){
    const { id } = req.params;

    const sql = `DELETE FROM tb_fest WHERE id = ${id}`
    connection.query(sql, (err, fields) => {
        if (err) response(500, "Invalid", "Error", res)

        if (fields?.affectedRows){
            const data = {
                isDeleted: fields.affectedRows,
            }
            response(200, data, "Deleted Data Successfuly", res)
        } else {
            response(404, "Data Not Found", "Error", res)
        }
    })
}