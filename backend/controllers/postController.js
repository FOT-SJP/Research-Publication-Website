const { Post, validate } = require("../models/post");

exports.getPosts = async (req, res) => {
	const posts = await Post.find().sort("title");
	res.send(posts);
};

exports.getPost = async (req, res) => {
	const post = await Post.findById(req.params.id);
	if (!post)
		return res
			.status(404)
			.send("The post with the given ID was not found.");
	res.send(post);
};

exports.createPost = async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	try {
		const post = new Post({
			title: req.body.title,
			content: req.body.content,
			author: req.body.author,
		});

		await post.save();

		res.json({
			post: post._id,
			title: post.title,
			content: post.content,
			author: post.author,
		});
	} catch (err) {
		res.status(500).json({ msg: "Internal server error." });
	}
};

exports.updatePost = async (req, res) => {
	if (!req.body.title || !req.body.content || !req.body.author)
		return res.status(400).send("Missing required fields.");

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const post = await Post.findByIdAndUpdate(
		req.params.id,
		{
			title: req.body.title,
			content: req.body.content,
			author: req.body.author,
		},
		{ new: true }
	);

	if (!post)
		return res
			.status(404)
			.send("The post with the given ID was not found.");

	res.send(post);
};

exports.deletePost = async (req, res) => {
	const post = await Post.findByIdAndRemove(req.params.id);

	if (!post)
		return res
			.status(404)
			.send("The post with the given ID was not found.");

	res.send(post);
};
