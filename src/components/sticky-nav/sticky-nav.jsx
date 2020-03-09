import React, { Component } from "react";

import { addClass, removeClass } from "../../global/_util";

class StickyNav extends Component {
	constructor() {
		super();
		this.state = {
			sections: {
				"About Me": "section_about-me",
				Projects: "section_projects",
				Testimonials: "section_testimonials"
			}
		};
	}

	componentDidMount() {
		const sections = document.querySelectorAll("section.section-parts");
		const nav = document.querySelector("#sticky-nav_nav");
		const navHeight = nav.offsetHeight;
		const navTop = nav.offsetTop;

		this.sections = sections;
		this.nav = nav;
		this.navHeight = navHeight;
		this.navTop = navTop;

		window.addEventListener("scroll", this.listenScrollEvent.bind(this));
	}

	isScrolledBottom() {
		const pageHeight = document.querySelector("#root").offsetHeight;
		const windowHeight = window.innerHeight;
		const scrollPosition =
			window.scrollY ||
			window.pageYOffset ||
			document.body.scrollTop +
				((document.documentElement && document.documentElement.scrollTop) || 0);

		if (pageHeight <= windowHeight + scrollPosition) {
			return true;
		}
		return false;
	}

	stickykNav() {
		if (window.pageYOffset >= this.navTop) {
			addClass(this.nav, "position-fixed");
		} else {
			removeClass(this.nav, "position-fixed");
		}
	}

	listenScrollEvent() {
		const curPos = window.pageYOffset;
		const len = this.sections.length;

		this.stickykNav();
		for (let i = 0; i < len; i++) {
			const top = this.sections[i].offsetTop - this.navHeight;
			const bottom = top + this.sections[i].offsetHeight;
			const anchorTags = this.nav.querySelectorAll("button");

			if (curPos >= top && curPos <= bottom) {
				for (let j = 0; j < anchorTags.length; j++) {
					removeClass(anchorTags[j], "active");
				}
				const temp1 = `button.${this.sections[i].id}`;
				addClass(document.querySelector(temp1), "active");
			} else if (this.isScrolledBottom()) {
				removeClass(anchorTags[len - 2], "active");
				const temp2 = `button.${this.sections[len - 1].id}`;
				addClass(document.querySelector(temp2), "active");
			}
		}
	}

	/* exported scrollToElement */
	scrollToElement(event) {
		const targetElement = event.target;
		const elementId = targetElement.getAttribute("data-scrollto");
		const element = document.querySelector(`#${elementId}`);
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element.getBoundingClientRect().top;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition =
			elementPosition -
			this.navHeight -
			(window.pageYOffset >= this.navTop ? 0 : this.navHeight);

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}

	renderNavItems() {
		const { sections } = this.state;
		console.log("Andrew");
		return Object.keys(sections).map(item => {
			return (
				<li key={item}>
					<button
						className={`${sections[item]} sticky-nav_item`}
						onClick={this.scrollToElement.bind(this)}
						type="button"
						data-scrollto={sections[item]}
					>
						{item}
					</button>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="sticky-nav-container">
				<nav id="sticky-nav_nav">
					<ul>{this.renderNavItems()}</ul>
				</nav>
			</div>
		);
	}
}

export default StickyNav;
