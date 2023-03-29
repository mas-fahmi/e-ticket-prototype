var response = require('./../res/response.js');
var connection = require('./../config/connection.js');

exports.index = function(req, res){
    response(200, "API Tiket rede bous!!", "Ready", res)
}

exports.addTiket = function(req, res){
    const { id_ticket } = req.params;

    const sql = `INSERT INTO tb_ticket (id_ticket, nik, name, email, fest_name, payments)
                SELECT id_ticket, nik, name, email, fest_name, payments FROM tb_booking
                WHERE id_ticket = '${id_ticket}'`;

    connection.query(sql, (err, fields) => {
        if (err) response(500, "Invalid", "Error", res)
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Post Ticket Successfuly", res)
        }
    })
}

exports.showTiket = function(req, res){
    const sql = 'SELECT * FROM tb_ticket'
    connection.query(sql, (err, fields) => {
        response(200, fields, "SUCCESS", res)
    })
}

exports.showTiketId = function(req, res){
    const { id_ticket } = req.body

    const sql = `SELECT * FROM tb_ticket WHERE id_ticket = '${id_ticket}'`
    connection.query(sql, (err, fields) => {
        if (fields.length > 0){
            response(200, fields, "Success", res)
        }else{
            response(404, "Unknown Data", "Error!", res)
        }
    })
}

exports.updateTiket = function(req, res){
    const { nik, name, email, fest_name, payments, verification } = req.body;
    const { id_ticket } = req.params;

    const sql = `UPDATE tb_ticket SET nik = '${nik}', name = '${name}', email = '${email}', fest_name = '${fest_name}', 
    payments = '${payments}', verification = '${verification}' WHERE id_ticket = '${id_ticket}'`;

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

exports.deleteTiket = function(req, res){
    const { id_ticket } = req.params;

    const sql = `DELETE FROM tb_ticket WHERE id_ticket = '${id_ticket}'`
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