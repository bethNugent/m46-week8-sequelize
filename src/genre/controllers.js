const Genre = require("./model");
const Book = require("../books/model");


const addGenre = async (req, res) => {
    try {
        const addGenre = await Genre.create({
            genre: req.body.genre,
        });
        res.status(201).json({message: "success", addGenre: addGenre })
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};


const getAllBooks = async (req, res) => {
    try {

        console.log(req.params);

        const getAllBooks = await Genre.findOne({ 
            where: { genre: req.params.genre }, 
            include: Book,
        });
    
        res.status(201).json({message: "success", getAllBooks: getAllBooks })
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};




module.exports = {
    addGenre, 
    getAllBooks,
  };