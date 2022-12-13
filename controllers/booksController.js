const model = require("../models/bookinfo")

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.ninteeneightyfourinfo = (req, res, next) => {
  model.find({_id: "6383f297f81cd773e4c827fc"}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });

};

exports.Catcherinfo = (req, res, next) => {
  model.find({_id: "6383f297f81cd773e4c827fb"}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });
};

exports.CompanyTowninfo = (req, res, next) => {
  model.find({_id: "6383f297f81cd773e4c827fa"}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });
};

exports.adminpage = (req, res, next) => {
  model.find({}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });
}

exports.redirect = (req, res, next) => {
  let redirectPath = res.locals.redirect;
  if (redirectPath) res.redirect(redirectPath);
  else next();
}


exports.delete = (req, res, next) => {
  let Id = req.params.id;
  model.findByIdAndRemove(Id)
    .then(() => {
      res.locals.redirect = "/admin";
      next();
    })
    .catch(error => {
      console.log(`Error deleting user by ID: ${error.message}`);
      next();
    })
}

exports.edit = (req, res, next) => {
  let Id = req.params.id
  model.find({_id: Id}, (error, book) => {
    if (error) next(error);
    req.data = book;
    next();
  });
}

exports.save = (req, res, next) => {
  let id = {
    _id: req.body.ID
  }
  let userParams = {
    name: req.body.Name,
    AuthorName: req.body.Author,
  };
  model.findByIdAndUpdate(id, userParams)
  .then(()=> {
    res.locals.redirect = "/admin";
    next();
  })
  .catch(error => {
    console.log(`Error saving user: ${error.message}`);
    next(error);
  }); 
}


exports.createnew = (req, res, next) => {
  let userParams = {
    name: req.body.Name,
    AuthorName: req.body.Author,
  };
  model.create(userParams)
    .then(() => {
      res.locals.redirect = "/admin";
      next();
    })
    .catch(error => {
      console.log(`Error saving user: ${error.message}`);
      next(error);
    });
}

exports.newbook = (req, res) => {
  res.render("newbook");
}