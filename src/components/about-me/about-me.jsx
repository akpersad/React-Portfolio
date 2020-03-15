import React, { Component } from "react";

import Hero from "../../svg/hero_image.svg";
import { loadSvg } from "../../global/_importSVG";

class AboutMe extends Component {
	componentDidMount() {
		loadSvg(".hero-item");
	}

	render() {
		return (
			<>
				<div className="about-me_parent">
					<h3>Hi, I&apos;m Andrew. Nice to meet you!</h3>
					<p className="m-auto about-me_container pt-3">
						<span className="d-block mb-4">
							I help give life to the web. I&apos;m a Front-end Engineer who
							specializes in JavaScript. I know my way around React, Vanilla
							JavaScript and I&apos;m even a ceritified Salesforce Developer.
						</span>
						<span className="d-block mb-4">
							I&apos;ve worked closely with design teams, functional folks and
							directly with clients to deliver responsive and beautiful sites.
							I&apos;ve led teams both onsite and off/near shore.
						</span>
						<span className="d-block mb-4">
							I love building, learning and doing. Let&apos;s work together and make
							cool things.
						</span>
					</p>
					<img className="hero-item" alt="Hero Item" src={Hero} />
				</div>
			</>
		);
	}
}

export default AboutMe;
