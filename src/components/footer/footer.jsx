import React, { Component } from "react";

import SubmitForm from "../submit-form/submit-form";

class Footer extends Component {
	render() {
		return (
			<section className="section-parts">
				<div className="d-flex flex-wrap">
					<div className="left-item footer-item">Left Item</div>
					<div className="right-item footer-item">
						<SubmitForm />
					</div>
					<div className="bottom-item footer-item_bottom mt-5">
						<div className="social-icons d-flex justify-content-center">
							<div className="social-icons_container">Icons</div>
						</div>

						<div className="made-with d-flex justify-content-center">
							Made with Love
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;
