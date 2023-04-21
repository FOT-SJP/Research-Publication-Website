import React from "react";

import NavBar from "./common/navbar";
import Slideshow from "./homepage/slideshow";

const slides = [
	{
		image: "slide1.jpg",
		title: "Publication 1",
		caption: "This is the Publication 1 description",
	},
	{
		image: "slide2.jpg",
		title: "Publication 2",
		caption: "This is the Publication 2 description",
	},
];

const Homepage = () => {
	return (
		<React.Fragment>
			<NavBar />
			<h1>Homepage</h1>
			<Slideshow slides={slides} />
		</React.Fragment>
	);
};

export default Homepage;
