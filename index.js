const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.route");
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("", indexRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
