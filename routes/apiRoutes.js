const express = require("express")
const router = express.Router();
const db = require("../models")

//get all items
router.get("/all", (req, res) => {
    db.Item.findAll().then(items => res.send(items));
});

// get single todo by id
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
    text: req.body.text
    
  }).then(submitedItem => res.send(submitedItem));
});
  
// delete todo
router.delete("/delete/:id", (req, res) => {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => res.send("success"));
  });

// edit a todo
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

module.exports = router;