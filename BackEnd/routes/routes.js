module.exports = function(app){

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
    app.route('/updateTiket/:id_ticket').put(jsonTiket.updateTiket);
    app.route('/deleteTiket/:id_ticket').delete(jsonTiket.deleteTiket);

    //Route Fest
    var jsonFest = require('./../controllers/FestController.js');
    app.route('/fest').get(jsonFest.index);
    app.route('/addFest').post(jsonFest.addFest);
    app.route('/showFest').get(jsonFest.showFest);
    app.route('/updateFest/:id').put(jsonFest.updateFest);
    app.route('/deleteFest/:id').delete(jsonFest.deleteFest);

}