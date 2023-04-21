const express = require("express");

const posts = require("../routes/posts");

module.exports = function (app) {
	app.use(express.json());
	app.use("/api/posts", posts);
};
