var response = require('./../res/response.js');
var connection = require('./../config/connection.js');

exports.index = function(req, res){
    response(200, "API order rede bous!!", "Ready", res)
}

exports.addOrder = function(req, res){

    //generate random char for idTicket
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }
        return result;
    }

    const {id_ticket = makeid(10), nik, name, address, fest_name, payments} = req.body

    const sql = `INSERT INTO tb_order (id_ticket, nik, name, address, fest_name, payments) 
    VALUES ('${id_ticket}', ${nik}, '${name}', '${address}', '${fest_name}', '${payments}')`;

    connection.query(sql, (err, fields) => {
        if (err) throw err
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Post Order Successfuly", res)
        }
    })
}

exports.showOrder = function(req, res){
    const sql = 'SELECT * FROM tb_order'
    connection.query(sql, (err, fields) => {
        response(200, fields, "SUCCESS", res)
    })
}

exports.updateOrder = function(req, res){
    const { nik, name, address, fest_name, payments } = req.body;
    const { id_ticket } = req.params;

    const sql = `UPDATE tb_order SET nik = '${nik}', name = '${name}', address = '${address}', fest_name = '${fest_name}', 
    payments = '${payments}' WHERE id_ticket = '${id_ticket}'`;

    connection.query(sql, (err, fields) => {
        if (err) throw err
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