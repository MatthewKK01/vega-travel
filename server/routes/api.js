const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const User = require("../models/user");

// Connect to MongoDB database using Mongoose

mongoose.connect(process.env.URL, {
  dbName: "VegaTravel",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
      let payload = {
        subject: registeredUser._id,
      };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    })
    .catch((err) => {
      res.status(400).send("Registration failed. Error: " + err);
    });
});
router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({
    email: userData.email,
  })
    .then((user) => {
      if (!user) {
        // if user not exist
        return res.status(400).json({ message: "Email not found" });
      } else if (user.password !== userData.password) {
        return res.status(400).json({ message: "Password is incorrect" });
      } else {
        // if login works response user details
        let payload = { subject: user._id };
        let token = jwt.sign(payload, "secretKey");
        return res.status(200).send({ token });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/events", (req, res) => {
  let events = [
    {
      id: 1,
      name: "Britt Dyde",
      address: "Apt 478",
      date: "11/15/2022",
    },
    {
      id: 2,
      name: "Bancroft Osborn",
      address: "PO Box 47765",
      date: "6/2/2023",
    },
    {
      id: 3,
      name: "Kristien Obee",
      address: "PO Box 2345",
      date: "3/2/2023",
    },
    {
      id: 4,
      name: "Britney Surgenor",
      address: "Suite 96",
      date: "9/5/2023",
    },
    {
      id: 5,
      name: "Emyle Cardo",
      address: "Suite 39",
      date: "2/2/2023",
    },
    {
      id: 6,
      name: "Ely Anney",
      address: "PO Box 51171",
      date: "10/11/2023",
    },
    {
      id: 7,
      name: "Siegfried Woodford",
      address: "Room 1148",
      date: "5/16/2023",
    },
    {
      id: 8,
      name: "Aloysia Poppleton",
      address: "Suite 8",
      date: "1/25/2023",
    },
    {
      id: 9,
      name: "Sadie Tunnicliff",
      address: "Room 729",
      date: "3/1/2023",
    },
    {
      id: 10,
      name: "Wynn Hayto",
      address: "Suite 38",
      date: "3/16/2023",
    },
  ];
  res.send(events);
});

router.get("/special", (req, res) => {
  let events = [
    {
      id: 1,
      name: "Britt Dyde",
      address: "Apt 478",
      date: "11/15/2022",
    },
    {
      id: 2,
      name: "Bancroft Osborn",
      address: "PO Box 47765",
      date: "6/2/2023",
    },
    {
      id: 3,
      name: "Kristien Obee",
      address: "PO Box 2345",
      date: "3/2/2023",
    },
    {
      id: 4,
      name: "Britney Surgenor",
      address: "Suite 96",
      date: "9/5/2023",
    },
    {
      id: 5,
      name: "Emyle Cardo",
      address: "Suite 39",
      date: "2/2/2023",
    },
    {
      id: 6,
      name: "Ely Anney",
      address: "PO Box 51171",
      date: "10/11/2023",
    },
    {
      id: 7,
      name: "Siegfried Woodford",
      address: "Room 1148",
      date: "5/16/2023",
    },
    {
      id: 8,
      name: "Aloysia Poppleton",
      address: "Suite 8",
      date: "1/25/2023",
    },
    {
      id: 9,
      name: "Sadie Tunnicliff",
      address: "Room 729",
      date: "3/1/2023",
    },
    {
      id: 10,
      name: "Wynn Hayto",
      address: "Suite 38",
      date: "3/16/2023",
    },
  ];
  res.send(events);
});
module.exports = router;
