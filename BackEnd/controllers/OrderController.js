var response = require('./../res/response.js');
var connection = require('./../config/connection.js');

exports.index = function(req, res){
    response(200, "API order rede bous!!", "Ready", res)
}