const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
    try {
        const addAuthor = await Author.create({
            authorName: req.body.authorName,
        });

        res.status(201).json({message: "success", addAuthor: addAuthor })
    } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    }
};


const getAuthorAndBooks = async (req, res) => {
    try {
        // console.log(req);
        const author = await Author.findOne({ 
            where: { authorname: req.params.authorname }, 
            include: Book,
        });

        res.status(201).json({message: "success", author: author })
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};



module.exports = {
    addAuthor,
    getAuthorAndBooks,
  };
  










  //in json
// localhost:5001/authors/getauthorandbooks/beth
//   {
//     "authorName": "beth"
//   }
