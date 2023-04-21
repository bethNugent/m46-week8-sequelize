const Genre = require("./model");
const Book = require("../books/model");


const addGenre = async (req, res) => {
    try {
        const addGenre = await Genre.create({
            genre: req.body.genre,
        });
        res.status(201).json({message: "success", addGenre: addGenre })
    } catch (error) {
        console.log(error);
    }
};


const getAllBooks = async (req, res) => {
    try {

        console.log(req.params);

        const getAllBooks = await Genre.findOne({ 
            where: { genre: req.params.genre }, 
            include: Book,
        });

        //could do this but it is clunky and has no relationship
        // const books = await Book.findAll({ 
        //     where: {genre: req.params.genre }
        // });
    
        res.status(201).json({message: "success", getAllBooks: getAllBooks })
    } catch (error) {
        console.log(error);
    }
};

//in json
// localhost:5001/authors/getauthorandbooks/beth
//   {
//     "authorName": "beth"
//   }



module.exports = {
    addGenre, 
    getAllBooks,
  };
  