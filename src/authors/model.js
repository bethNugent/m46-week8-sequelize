const { DataTypes } = require("sequelize");
const connection = require("../db/connection");


//Author is the model class
const Author = connection.define("Author", {
    authorName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Author;