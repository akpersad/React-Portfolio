import React, { Component } from "react";
import Slider from "react-slick";
import Bodhi from "../../images/bodhi.png";

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
						<div className="testimonial-container">
							<div className="d-flex flex-column justify-content-center align-item-center text-center">
								<div className="flex-image">
									<img src={Bodhi} alt="Bodhi" />
									<div className="image-circle" />
								</div>

								<div className="flex-name my-4">Andrew</div>

								<div className="flex-words">
									Andrew is so awesomoe! Andrew is so awesomoe! Andrew is so
									awesomoe! Andrew is so awesomoe! Andrew is so awesomoe! Andrew
									is so awesomoe! Andrew is so awesomoe! Andrew is so awesomoe!
									Andrew is so awesomoe!
								</div>
							</div>
						</div>
					</div>
					<div className="slick-slider_item">
						<h3>2</h3>
					</div>
				</Slider>
			</div>
		);
	}
}

export default Testimonials;
