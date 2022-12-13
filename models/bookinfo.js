const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  id: String,
  name: String,
  AuthorName: String,
  Description: String,
  BookIMG: String,
});
module.exports = mongoose.model("Bookinfo", bookSchema);
