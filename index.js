const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  booksController = require("./controllers/booksController"),
  layouts = require("express-ejs-layouts");

//.gitignore causes the .env file to dissapear.
// This is what the code would look like if it remained after
// downloading from github.

//const mongoose = require("mongoose");
//require("dotenv").config();
//const uri = process.env.ATLAS_URI;

// The alternative is as follows:

const mongoose = require("mongoose");
const uri = "mongodb+srv://nate:WAS500password@was500.thrzucu.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/", homeController.home);
app.get("/booklist", homeController.booklist);

app.get("/CompanyTown.jpg", homeController.CompanyTown);
app.get("/Catcher.jpg", homeController.Catcher);
app.get("/1984.jpg", homeController.ninteeneightyfour);

app.get(
  "/books/6383f297f81cd773e4c827fc", 
  booksController.ninteeneightyfourinfo,
  (req, res) => {
    res.render("books/book", { bookformat: req.data });
  }
);
app.get(
  "/books/6383f297f81cd773e4c827fb", 
  booksController.Catcherinfo,
  (req, res) => {
    res.render("books/book", { bookformat: req.data });
  }
);
app.get(
  "/books/6383f297f81cd773e4c827fa", 
  booksController.CompanyTowninfo,
  (req, res) => {
    res.render("books/book", { bookformat: req.data });
  }
);

app.get(
  "/admin",
  booksController.adminpage,
  (req, res, next) => {
    res.render("admin", { books: req.data });
  }
);

app.get("/delete/:id", booksController.delete, booksController.redirect);


app.get(
  "/edit/:id",
  booksController.edit,
  (req, res, next) => {
    res.render("edit", { books: req.data });
  }
);

const methodOverride = require("method-override");
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.post("/edit/save", booksController.save, booksController.redirect);

app.get("/addnewbook", booksController.newbook);
app.post("/addnewbook/save", booksController.createnew, booksController.redirect);

app.get("/public/Images/CompanyTown.jpg", homeController.CompanyTown);
app.get("/public/Images/Catcher.jpg", homeController.Catcher);
app.get("/public/Images/1984.jpg", homeController.ninteeneightyfour);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

