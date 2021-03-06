let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayHomePage = (req, res, next) => {
    res.render("index", { title: "Home"});//displayName:req.user?req.user.displayName:"" }); //route to "/"
  };
  
  module.exports.displayAboutPage = function (req, res, next) {
    res.render("about", { title: "About me"}); //route to about page ,displayName:req.user?req.user.displayName:"" 
  };
  
  module.exports.displayProjectPage = function (req, res, next) {
    res.render("project", { title: "Projects"}); //route to projects page ,displayName:req.user?req.user.displayName:"" 
  };
  
  module.exports.displayServicesPage = function (req, res, next) {
    res.render("services", { title: "Services" }); //route to services page ,displayName:req.user?req.user.displayName:""
  };
  
  module.exports.displayContactPage = function (req, res, next) {
    res.render("contact", { title: "Contact" }); //route to contact page ,displayName:req.user?req.user.displayName:""
  };