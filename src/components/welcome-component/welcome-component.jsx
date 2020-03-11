import React, { Component } from "react";
import BackgroundImage from "../../images/802.jpg";

class WelcomeComponent extends Component {
	componentDidMount() {
		document.querySelector(
			".welcome-comp-container"
		).style.backgroundImage = `url(${BackgroundImage})`;
	}

	render() {
		return (
			<div className="welcome-comp-container">
				{/* Enter component html here */}
				<div className="image-overlay w-100 h-100">
					<div className="container-fluid">
						<div className="align-absolute_center flex-column">
							<h1 className="header-title animate-pop-in text-center">
								Andrew Persad
							</h1>
							<h2 className="header-subtitle animate-pop-in text-center">
								Front-end Engineer
							</h2>
							<div className="d-block">
								<section className="header-down-arrow">
									<svg
										viewBox="0 0 32 32"
										className="icon icon-chevron-bottom"
										aria-hidden="true"
									>
										<path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
									</svg>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WelcomeComponent;
