const mongoose = require("mongoose");
const { exists } = require("./models/bookinfo");
const BOOK = require("./models/bookinfo");
require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});


booksinfo = [
  {
    id: "CompanyTown",
    name: "Company Town",
    AuthorName: "Madeline Ashby",
    Description: "Madeline Ashby's Company Town is a brilliant, twisted mystery, as one woman must evaluate saving the people of a town that can't be saved, or saving herself.",
    BookIMG: "./public/images/CompanyTown.jpg"
  },
  {
    id: "Catcher",
    name: "the Catcher in the Rye",
    AuthorName: "J. D. Salinger",
    Description: "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world.",
    BookIMG: "./public/images/Catcher.jpg"
  },
  {
    id: "1984",
    name: "1984",
    AuthorName: "George Orwell",
    Description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother.",
    BookIMG: "./public/images/1984.jpg"
  }
]

setTimeout(upload, 15000);

function upload() {
  for (i of booksinfo) {
  
    BOOK.create(
      i,
      function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
      }
    );
  };
}

setTimeout(closeitup, 20000);

function closeitup() {
  throw "Files are uploaded. Program ended."; 
}