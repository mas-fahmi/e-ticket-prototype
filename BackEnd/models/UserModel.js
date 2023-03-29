import { Sequelize } from "sequelize";
import { con } from "./../config/connection.js";

const { DataTypes } = Sequelize;

const Users = con.define('users', {
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

export default Users