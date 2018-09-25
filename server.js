"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const favouritesRoutes = require("./routes/favourites");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/favourites", favouritesRoutes(knex));
//app.use("/api/markers", markersRoutes(knex))

// Home page
app.get("/", (req, res) => {
  res.render("index");
});


app.post("/", (req, res) => {

  // let password = req.body.password;
  // let email = req.body.email;
  // console.log("did this work ", email, password);

  //if the password and the username pass authentication
  //then redirect user to the mapper page
  //if the password and/or username don't pass authentication
  //then simply redirect user to the same "/" root page

  res.redirect("/mapper");
})

// app.post("/register", (req, res) => {
//   // let email = req.body.email;
//   // let username = req.body.username;
//   // let password = req.body.password;
//   // let hashedPassword = bcrypt.hashSync(password, 10);

//   res.redirect("/mapper");
// })

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/")
})

// app.post("/api/:id/delete", (req, res) => {

//   for (let var i = 0; i < markers.length) {

//   document.getElementbyId('delete').addEventListener("click", function() {

//     console.log("does this thing work")
//       delete marker
//     }
//     res.redirect("/");
//   }

// });


app.get("/mapper", (req, res) => {
  // some code checking if the user is authenticated,
  // if they're not then send error message with a redirect back
  // to the pre-login page.

  // if they are authenticated, render the mapper page

  //templateVars object needs to be added once we extract the
  //username from the database
  res.render("mapper")
})


app.post("/api/markers/:id/delete", (req, res) => {

  res.redirect("/mapper")
})


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
