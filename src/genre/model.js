const { DataTypes } = require("sequelize");
const connection = require("../db/connection");


//Genre is the model class
const Genre = connection.define("Genre", {
    genre: {
        type: DataTypes.STRING,
    },
});

module.exports = Genre;