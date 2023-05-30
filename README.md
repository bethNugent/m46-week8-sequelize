﻿# m46-week8-sequelize
 
 Create a Sequelize application that connects to a Clever Cloud database.
 
 Create both a Book and an Author model and the following routes/controllers.
 
 Book
 
 POST - adds book to the database
 GET - gets all books
 GET - gets a book by title
 PUT - dynamically updates a book by title
 DELETE - deletes all books
 
 Author
 
 POST - adds an author to the database
 GET - gets a single author by author name and retrieves associated books
 
 Create an association between Book and Author, where:
 
 Author has many Book,
 Book belongs to Author
 
 Test all routes using Thunder Client, and use design documentation to endpoints/data formatting
 

 
 
 
 
 
 
 
//const book declares a variable which returns an object using the .create method

    
//Book is class that we are using that relates to the model
//use destroy method


//in json
// localhost:5001/authors/getauthorandbooks/beth
//   {
//     "authorName": "beth"
//   }

//alter: true - make a change to the model in my code it will sync it up and allow the table to be changed. e.g. field called book rating

