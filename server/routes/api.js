const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Connect to MongoDB database using Mongoose
const db = "mongodb+srv://Matthewkk01:Mate1010@cluster0.3uuxnhv.mongodb.net/";
mongoose.connect(db);

router.get("/", (req, res) => {
  res.send("Hello API!");
});

module.exports = router;
