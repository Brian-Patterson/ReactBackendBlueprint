// js methods to directly access database
// import models

const express = require("express");
const router = express.Router();
const { Named } = require("../models");
///////////////////////////////
// ROUTES
////////////////////////////////

// NAMED INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    res.json(await Named.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});
// NAMED CREATE ROUTE
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    res.json(await Named.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});
// NAMED SHOW ROUTE
router.get("/:id", async (req, res) => {
  try {
    res.json(await Named.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
// NAMED DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Named.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
// NAMED UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Named.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
