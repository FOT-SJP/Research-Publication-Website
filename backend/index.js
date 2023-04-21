const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

require("./startup/routes")(app);

mongoose.connect(config.get("dbConnectionString")).then(() => {
	console.log("Connected to MongoDB");
});

const server = app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

module.exports = server;
