const { DataTypes } = require('sequelize');

module.exports=(sequelize) =>{
    sequelize.define('types',{
        types:{
            type:DataTypes.STRING,
        }
    });
};