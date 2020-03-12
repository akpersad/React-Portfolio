import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "../slider-item/slider-item";

import testimonials from "./_testimonials-obj";

import "../slider-item/_slider-item.scss";

class Testimonials extends Component {
	renderSliderItem() {
		return testimonials.map(item => {
			return (
				<SliderItem
					key={item.name}
					image={item.image}
					name={item.name}
					company={item.company}
					jobTitle={item.jobTitle}
					details={item.details}
				/>
			);
		});
	}

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
				<h3>Testimonials</h3>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Slider {...settings}>{this.renderSliderItem()}</Slider>
			</div>
		);
	}
}

export default Testimonials;
