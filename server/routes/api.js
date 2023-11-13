const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/user");

// Connect to MongoDB database using Mongoose

const db =
  "mongodb+srv://Matthewkk01:Mate1010@cluster0.3uuxnhv.mongodb.net/VegaTravel";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

router.get("/", (req, res) => {
  res.send("Hello API!");
});

router.post("/register", (req, res) => {
  let userData = req.body;

  // Create a new User instance using the extracted data
  let user = new User(userData);

  //save user
  user
    .save()
    .then((registeredUser) => {
      res.status(200).send(registeredUser);
    })
    .catch((err) => {
      res.status(400).send("Registration failed. Error: " + err);
    });
});



module.exports = router;
