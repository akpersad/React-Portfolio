import React, { Component } from "react";
import { FaTwitter, FaLinkedinIn, FaSalesforce, FaGithub } from "react-icons/fa";

import constants from "../../global/_constants";
import SubmitForm from "../submit-form/submit-form";

class Footer extends Component {
	render() {
		return (
			<section className="section-parts" id="six">
				<div className="d-flex flex-wrap">
					<div className="left-item footer-item">Left Item</div>
					<div className="right-item footer-item">
						<SubmitForm />
					</div>
					<div className="bottom-item footer-item_bottom mt-5">
						<div className="social-icons d-flex flex-row flex-wrap justify-content-center mb-4">
							<a
								href={constants.socialSites.twitter}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="social-icons_item mx-5">
									<FaTwitter size="1.2em" />
								</div>
							</a>

							<a
								href={constants.socialSites.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="social-icons_item mx-5">
									<FaLinkedinIn size="1.2em" />
								</div>
							</a>

							<a
								href={constants.socialSites.trailhead}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="social-icons_item mx-5">
									<FaSalesforce size="1.2em" />
								</div>
							</a>

							<a
								href={constants.socialSites.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="social-icons_item mx-5">
									<FaGithub size="1.2em" />
								</div>
							</a>
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
