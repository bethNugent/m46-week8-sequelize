require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const Author = require("./authors/model");
const Genre = require("./genre/model");

const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");
const genreRouter = require("./genre/routes");

const port = process.env.PORT || 5001;


const app = express();

app.use(express.json());

const syncTables = () => {

    Genre.hasMany(Book);
    Author.hasMany(Book);
    Book.belongsTo(Author);
    Book.belongsTo(Genre);

    Book.sync({ alter: true });
    Author.sync();
    Genre.sync();
}
//alter: true - make a change to the model in my code it will sync it up and allow the table to be changed. e.g. field called book rating



app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "App is healthy "});
});


app.listen(port, () => {
    syncTables();
    console.log("Server is listening");
});