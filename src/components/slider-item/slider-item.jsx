import React, { Component } from "react";
import PropTypes from "prop-types";

class SliderItem extends Component {
	render() {
		const { image, name, details } = this.props;

		return (
			<div className="slick-slider_item">
				<div className="testimonial-container">
					<div className="d-flex flex-column justify-content-center align-item-center text-center">
						<div className="flex-image">
							<img src={image} alt="Bodhi" />
							<div className="image-circle" />
						</div>

						<div className="flex-name my-4">{name}</div>

						<div className="flex-words">{details}</div>
					</div>
				</div>
			</div>
		);
	}
}

SliderItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired
};

export default SliderItem;
