import React, { Component } from "react";

import Hero from "../../svg/hero_image.svg";
import { loadSvg } from "../../global/_importSVG";

class AboutMe extends Component {
	constructor() {
		super();
		this.state = {
			header: "Hi, I'm Andrew. Nice to meet you!",
			text1:
				"I help give life to the web. I'm a Front-end Engineer who specializes in JavaScript. I know my way around React, Vanilla JavaScript and I'm even a ceritified Salesforce Developer.",
			text2:
				"I've worked closely with design teams, functional folks and directly with clients to deliver responsive and beautiful sites. I've led teams both onsite and off/near shore.",
			text3: "I love building, learning and doing. Let's work together and make cool things."
		};
	}

	componentDidMount() {
		loadSvg(".hero-item");
	}

	render() {
		const { header, text1, text2, text3 } = this.state;
		return (
			<>
				<div className="about-me_parent">
					<h3>{header}</h3>
					<p className="m-auto about-me_container pt-3">
						<span className="d-block mb-4">{text1}</span>
						<span className="d-block mb-4">{text2}</span>
						<span className="d-block mb-4">{text3}</span>
					</p>
					<img className="hero-item" alt="Hero Item" src={Hero} />
				</div>
			</>
		);
	}
}

export default AboutMe;
