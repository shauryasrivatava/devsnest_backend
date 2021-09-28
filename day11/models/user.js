const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user',{
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pssword: {
        type: DataTypes.STRING,
        allowNull: false
    }
});