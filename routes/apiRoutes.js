var db = require("../models");
var path = require('path');

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/indjs", function(req, res){
    return res.sendFile(path.join(__dirname, '../public/js/','ind.js'));

  })

  app.get("/api/destination/:id",function(req,res){
    db.destination.findAll({
      where :{
        id:req.params.id
      }
    }).then(function(data){
      
      res.json(data);
    });
  });
};
