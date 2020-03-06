import React, { Component } from "react";
import Slider from "react-slick";

class Testimonials extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<div className="testimonials-container">
				<h2>Testimonials</h2>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Slider {...settings}>
					<div className="slick-slider_item">
						<h3>1</h3>
					</div>
					<div className="slick-slider_item">
						<h3>2</h3>
					</div>
					<div className="slick-slider_item">
						<h3>3</h3>
					</div>
					<div className="slick-slider_item">
						<h3>4</h3>
					</div>
					<div className="slick-slider_item">
						<h3>5</h3>
					</div>
					<div className="slick-slider_item">
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		);
	}
}

export default Testimonials;
