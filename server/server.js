const express = require("express");
const api = require("../server/routes/api");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("HomePage!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
