const Sequelize = require('sequelize')
const auth = require('./../config/conAuth.js')

const { DataTypes } = Sequelize;

const Users = auth.define('tb_user', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
})

module.exports = Users;