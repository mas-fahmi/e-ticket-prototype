module.exports = function(app){

    //Route Order
    var jsonOrder = require('./../controllers/OrderController.js');
    app.route('/order').get(jsonOrder.index);
    app.route('/addOrder').post(jsonOrder.addOrder);
    app.route('/showOrder').get(jsonOrder.showOrder);
}