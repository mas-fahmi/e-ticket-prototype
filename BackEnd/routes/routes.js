module.exports = function(app){

    //Route Order
    var jsonOrder = require('./../controllers/OrderController.js');
    app.route('/order').get(jsonOrder.index);
    app.route('/addOrder').post(jsonOrder.addOrder);
    app.route('/showOrder').get(jsonOrder.showOrder);
    app.route('/showOrder/Detail').get(jsonOrder.showOrderId);
    app.route('/updateOrder/:id_ticket').put(jsonOrder.updateOrder);
    app.route('/deleteOrder/:id_ticket').delete(jsonOrder.deleteOrder);
}