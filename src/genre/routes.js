const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllBooks } = require("./controllers");




genreRouter.post("/genre/addgenre", addGenre);

genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooks);




module.exports = genreRouter;