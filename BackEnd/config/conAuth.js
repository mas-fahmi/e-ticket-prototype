const Sequelize = require('sequelize');

const auth = new Sequelize('eticket-prototype', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = auth