const Book = require("./model");

//POST - adds a book to the DB
//const book declares a variable which returns an object using the .create method
const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId,
    });

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    console.log(error);
  }
};

//GET - gets all books
const getAllBooks = async (req, res) => {
  try {
    //variable returning an object
    const books = await Book.findAll({});

    res.status(201).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

//GET - gets a single book by title
const getSingleBookByTitle = async (req, res) => {
  try {
    //variable returning an object
    const books = await Book.findOne({
      title: req.body.title,
    });

    res.status(201).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

//PUT - dynamically updates a book on title
const updateBook = async (req, res) => {
  //   res.send("Hello from search and update using put route");

  try {
    const updateBook = await Book.update(
      { [req.body.key]: req.body.value },
      { where: { title: req.body.title } }
    );

    res
      .status(201)
      .json({
        message: "successfully searched and updated",
        updateBook: updateBook,
      }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
  } catch (error) {
    console.log(error);
  }
};


//DELETE - deletes a single book by title
const deleteBook = async (req, res) => {
  //   res.send("Hello from the delete route");
  try {
    //Book is class that we are using that relates to the model
    //use destroy method
    const deleteBook = await Book.destroy({
      where: { title: req.body.title },
    }); 
      console.log("deleteBook",deleteBook);
    res
      .status(201)
      .json({ message: "successfully deleted", deleteBook: deleteBook }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
  } catch (error) {
    // console.log(error);
    res.status(501).json({ message: error.message, error: error });
  }
};

//DELETE - deletes all books 
const deleteAllBooks = async (req, res) => {
  //   res.send("Hello from the delete route");
  try {
    //Book is class that we are using that relates to the model
    //use destroy method
    const deleteAllBooks = await Book.destroy({
      truncate: true,
    }); 
      console.log("deleteBook",deleteBook);
    res
      .status(201)
      .json({ message: "successfully deleted", deleteAllBooks: deleteAllBooks }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
  } catch (error) {
    // console.log(error);
    res.status(501).json({ message: error.message, error: error });
  }
};


module.exports = {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBook,
  deleteBook,
  deleteAllBooks
};
