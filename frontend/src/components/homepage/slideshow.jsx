import React, { useState } from "react";
import styled from "styled-components";

const StyledSlideshow = styled.div`
	.slideshow {
		position: relative;
		width: 100%;
		height: 500px;
		overflow: hidden;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("background-image.jpg");
		opacity: 0.5;
	}

	.slides-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.5s ease;
	}

	.slide.active {
		opacity: 1;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slide .content {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.7);
		color: #fff;
	}

	.slide .content h2 {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.slide .content p {
		font-size: 16px;
		margin-bottom: 0;
	}

	.slideshow .circles {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
	}

	.circle {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #fff;
		margin-right: 10px;
		cursor: pointer;
	}

	.circle.active {
		background-color: #f00;
	}

	@media screen and (max-width: 768px) {
		.slide .content h2 {
			font-size: 20px;
		}

		.slide .content p {
			font-size: 14px;
		}
	}

	@media screen and (max-width: 480px) {
		.slide .content h2 {
			font-size: 18px;
		}

		.slide .content p {
			font-size: 12px;
		}
	}
`;

const Slideshow = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	function handleSlideClick(index) {
		setCurrentSlide(index);
	}

	return (
		<StyledSlideshow>
			<div className="slideshow">
				<div className="background"></div>
				<div className="slides-container">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`slide ${
								index === currentSlide ? "active" : ""
							}`}
							onClick={() => handleSlideClick(index)}
						>
							<img src={slide.image} alt={slide.caption} />
							<div className="content">
								<h2>{slide.title}</h2>
								<p>{slide.caption}</p>
							</div>
						</div>
					))}
				</div>

				<div className="circles">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`circle ${
								index === currentSlide ? "active" : ""
							}`}
							onClick={() => handleSlideClick(index)}
						></div>
					))}
				</div>
			</div>
		</StyledSlideshow>
	);
};

export default Slideshow;
