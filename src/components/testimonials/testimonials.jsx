import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "../slider-item/slider-item";

import Bodhi from "../../images/bodhi.png";

import "../slider-item/_slider-item.scss";

class Testimonials extends Component {
	renderSliderItem() {
		const temp = [
			{
				image: Bodhi,
				name: "Andrew",
				details:
					"Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe!"
			},
			{
				image: Bodhi,
				name: "Andrew",
				details:
					"Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe!"
			},
			{
				image: Bodhi,
				name: "Andrew",
				details:
					"Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe!"
			}
		];

		return temp.map(item => {
			return <SliderItem image={item.image} name={item.name} details={item.details} />;
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
				<h2>Testimonials</h2>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Slider {...settings}>{this.renderSliderItem()}</Slider>
			</div>
		);
	}
}

export default Testimonials;
