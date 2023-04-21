const Joi = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
	},
	content: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024,
	},
	author: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Post = mongoose.model("Post", postSchema);

function validatePost(post) {
	const schema = Joi.object({
		title: Joi.string().min(5).max(255).required(),
		content: Joi.string().min(5).max(1024).required(),
		author: Joi.string().min(5).max(255).required(),
	});

	return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;
