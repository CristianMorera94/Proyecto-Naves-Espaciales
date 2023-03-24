const { DataTypes } = require('sequelize');

module.exports=(sequelize) =>{
    sequelize.define('ships',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
        },
        country:{
            type:DataTypes.STRING,
        },
        yearstart:{
            type:DataTypes.STRING,
        },
        yearend:{
            type:DataTypes.STRING,
        },
        destination:{
            type:DataTypes.STRING,
        },
        description:{
            type:DataTypes.STRING,
        }
    });
};