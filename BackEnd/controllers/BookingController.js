var response = require('./../res/response.js');
var connection = require('./../config/connection.js');

exports.index = function(req, res){
    response(200, "API booking rede bous!!", "Ready", res)
}

exports.addBooking = function(req, res){

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

    const {id_ticket = makeid(10), nik, name, email, fest_name, payments} = req.body

    const sql = `INSERT INTO tb_booking (id_ticket, nik, name, email, fest_name, payments) 
    VALUES ('${id_ticket}', ${nik}, '${name}', '${email}', '${fest_name}', '${payments}')`;

    connection.query(sql, (err, fields) => {
        if (err) response(500, "Invalid", "Error", res)
        if (fields?.affectedRows){
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Post Booking Successfuly", res)
        }
    })
}

exports.showBooking = function(req, res){
    const sql = 'SELECT * FROM tb_booking'
    connection.query(sql, (err, fields) => {
        response(200, fields, "SUCCESS", res)
    })
}

exports.showBookingId = function(req, res){
    const { id_ticket } = req.body

    const sql = `SELECT * FROM tb_booking WHERE id_ticket = '${id_ticket}'`
    connection.query(sql, (err, fields) => {
        if (fields.length > 0){
            response(200, fields, "Success", res)
        }else{
            response(404, "Unknown Data", "Error!", res)
        }
    })
}

exports.updateBooking = function(req, res){
    const { nik, name, email, fest_name, payments, verification } = req.body;
    const { id_ticket } = req.params;

    const sql = `UPDATE tb_booking SET nik = '${nik}', name = '${name}', email = '${email}', fest_name = '${fest_name}', 
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

exports.deleteBooking = function(req, res){
    const { id_ticket } = req.params;

    const sql = `DELETE FROM tb_booking WHERE id_ticket = '${id_ticket}'`
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