///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");
const app = express();
// add Mongoose
const mongoose = require("mongoose"); // connecting mongoose here because this is basic app; can scale as needed with connection folder, ejs file etc...
// import routers from controllers
const namedController = require("./controllers/named-controller");

const cors = require("cors"); // allows React to access resources from all origins (dev/deployed server/frontend app)
const morgan = require("morgan"); // process requests into well-formatted logs to console with each request in development

///////////////////////////////
// DATABASE CONNECTION => config/db.connection.js
////////////////////////////////

mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the named router
app.use(cors()); //prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/named'
app.use("/named", namedController);
// test GET&&POST routes in postman||CURL
// postman => collections => collections => localhost/4000/named

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
