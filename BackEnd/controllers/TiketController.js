var response = require('./../res/response.js');
var connection = require('./../config/connection.js');

exports.index = function(req, res){
    response(200, "API Tiket rede bous!!", "Ready", res)
}

exports.addTiket = function(req, res){
    const { id_ticket } = req.params;

    const sql = `INSERT INTO tb_ticket (id_ticket, nik, name, address, fest_name, payments)
                SELECT id_ticket, nik, name, address, fest_name, payments FROM tb_booking
                WHERE id_ticket = '${id_ticket}'`;

    connection.query(sql, (err, fields) => {
        if (err) throw err
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Post Booking Successfuly", res)
        }
    })
}

exports.showTiket = function(req, res){
    const sql = 'SELECT * FROM tb_tiket'
    connection.query(sql, (err, fields) => {
        response(200, fields, "SUCCESS", res)
    })
}

exports.showTiketId = function(req, res){
    const { id_ticket } = req.body

    const sql = `SELECT * FROM tb_tiket WHERE id_ticket = '${id_ticket}'`
    connection.query(sql, (err, fields) => {
        response(200, fields, "SUCCESS", res)
    })
}