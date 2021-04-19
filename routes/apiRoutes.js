const express = require("express")
const router = express.Router();
const db = require("../models");
const tipo = require("../models/tipo");


//get all items
router.get("/all", (req, res) => {
    db.Item.findAll({
      include:{
        model: tipo,
        attributes: ["name"]
      }
    }).then(items => res.send(items));
    
});

// get single item by id
router.get("/find/:id", (req, res) => {
    db.Item.findAll({
      where: {
        id: req.params.id
      }
    }).then(item => res.send(item));
  });

//post new item
router.post("/new", (req, res) => {
  db.Item.create({
    text: req.body.text,
    price: req.body.price
    
  }).then(submitedItem => res.send(submitedItem));
});
  
// delete item
router.delete("/delete/:id", (req, res) => {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.send("success"));
  });

// edit item
router.put("/edit", (req, res) => {
    db.Item.update(
      {
        text: req.body.text
      },
      {
        where: { id: req.body.id }
      }
    ).then(() => res.send("success"));
  });

// add new type
router.post("/newtype", (req, res) => {
  db.Tipo.create({
    name: req.body.name
    
  }).then(submitedTipo => res.send(submitedTipo));
});

// delete type
router.delete("/deletetype/:id", (req, res) => {
  db.Tipo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("success"));
});

module.exports = router;