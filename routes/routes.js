const express = require("express");
Router = express.Router();

const { calendar } = require("../controllers/calendar");

Router.post("/calendar", (req, res) => {
  calendar(req, res);
});

module.exports = Router;
