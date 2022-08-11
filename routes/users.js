const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/getByName/:name", (req, res) => {
  User.findOne({ name: req.params.name })
    .then((result) => {
      if (result === null) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    profession: req.body.profession,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  var query = { _id: req.params.id };
  var newValues = {
    $set: {
      name: req.body.name,
      age: req.body.age,
      profession: req.body.profession,
    },
  };

  User.updateOne(query, newValues)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
