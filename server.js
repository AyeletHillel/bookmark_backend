///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT = 3000, DATABASE_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middlware
const cors = require("cors");
const morgan = require("morgan");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

///////////////////////////////
// MODELS
////////////////////////////////
const bookMarkSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const bookMark = mongoose.model("bookMark", bookMarkSchema);

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

//index route
app.get("/bookmark", async (req, res) => {
  try {
    // send all bookmarks
    res.json(await bookmark.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//create route
app.post("/bookmark", async (req, res) => {
  try {
    res.json(await bookmark.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//updtae route
app.put("/bookmark/:id", async (req, res) => {
  try {
    res.json(
      await bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//delete route
app.delete("/bookmark/:id", async (req, res) => {
  try {
    res.json(await bookmark.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

//show route
app.get("/bookmark/:id", async (req, res) => {
  try {
    res.json(await bookmark.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));