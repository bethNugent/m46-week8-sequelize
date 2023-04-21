const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
    try {
        const addAuthor = await Author.create({
            authorName: req.body.authorName,
        });
        res.status(201).json({message: "success", addAuthor: addAuthor })
    } catch (error) {
        console.log(error);
    }
};





const getAuthorAndBooks = async (req, res) => {
    try {

        // console.log(req);

        const author = await Author.findOne({ 
            where: { authorname: req.params.authorname }, 
            include: Book,
        });
    
        // Could do this - but it is clunky and has no relationship
        // const books = await Book.findAll({ 
        //     where: {author: req.params.authorname },
        // });

        res.status(201).json({message: "success", author: author })
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
    addAuthor,
    getAuthorAndBooks,
  };
  