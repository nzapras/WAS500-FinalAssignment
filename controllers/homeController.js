exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.booklist = (req, res, next) => {
  res.render("booklist")
};

exports.home = (req, res, next) => {
  res.render("index");
};

exports.CompanyTown = (req, res, next) => {
  res.sendFile("CompanyTown.jpg", { root: './public/images/' })

};

exports.Catcher = (req, res, next) => {
  res.sendFile("Catcher.jpg", { root: './public/images/' })

};

exports.ninteeneightyfour = (req, res, next) => {
  res.sendFile("1984.jpg", { root: './public/images/' })

};