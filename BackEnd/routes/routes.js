module.exports = function(app){

    //Route Order
    var jsonOrder = require('./../controllers/OrderController.js');
    app.route('/order').get(jsonOrder.index);
    app.route('/addOrder').post(jsonOrder.addOrder);
    app.route('/showOrder').get(jsonOrder.showOrder);
    app.route('/showOrder/Detail').get(jsonOrder.showOrderId);
    app.route('/updateOrder/:id_ticket').put(jsonOrder.updateOrder);
    app.route('/deleteOrder/:id_ticket').delete(jsonOrder.deleteOrder);

    //Route Booking
    var jsonBooking = require('./../controllers/BookingController.js');
    app.route('/booking').get(jsonBooking.index);
    app.route('/addBooking').post(jsonBooking.addBooking);
    app.route('/showBooking').get(jsonBooking.showBooking);
    app.route('/showBooking/Detail').get(jsonBooking.showBookingId);
    app.route('/updateBooking/:id_ticket').put(jsonBooking.updateBooking);
    app.route('/deleteBooking/:id_ticket').delete(jsonBooking.deleteBooking);

    //Route Tiket
    var jsonTiket = require('./../controllers/TiketController.js');
    app.route('/tiket').get(jsonTiket.index);
    app.route('/addTiket/:id_ticket').post(jsonTiket.addTiket);
    app.route('/showTiket').get(jsonTiket.showTiket);
    app.route('/showTiket/Detail').get(jsonTiket.showTiketId);
}