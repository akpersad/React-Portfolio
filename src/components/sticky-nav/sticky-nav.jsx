import React, { Component } from "react";

import { addClass, removeClass } from "../../global/_util";

class StickyNav extends Component {
	constructor(props) {
		super(props);

		const sections = document
			.querySelector(".sections")
			.querySelectorAll("section.section-parts");
		const nav = document.querySelector("#sticky-nav_nav");
		const navHeight = nav.offsetHeight;
		const navTop = nav.offsetTop;

		this.sections = sections;
		this.nav = nav;
		this.navHeight = navHeight;
		this.navTop = navTop;
	}

	componentDidMount() {
		const stickykNav = () => {
			if (window.pageYOffset >= this.navTop) {
				addClass(this.nav, "position-fixed");
			} else {
				removeClass(this.nav, "position-fixed");
			}
		};

		window.addEventListener("scroll", function(event) {
			const curPos = this.pageYOffset;
			const len = this.sections.length;
			stickykNav();
			for (let i = 0; i < len; i++) {
				const top = this.sections[i].offsetTop - this.navHeight;
				const bottom = top + this.sections[i].offsetHeight;
				const anchorTags = this.nav.querySelectorAll("a");

				if (curPos >= top && curPos <= bottom) {
					for (let j = 0; j < anchorTags.length; j++) {
						removeClass(anchorTags[j], "active");
					}
					const temp1 = `a.${this.sections[i].id}`;
					addClass(document.querySelector(temp1), "active");
				} else if (this.isScrolledBottom()) {
					removeClass(anchorTags[len - 2], "active");
					const temp2 = `a.${this.sections[len - 1].id}`;
					addClass(document.querySelector(temp2), "active");
				}
			}
		});
	}

	isScrolledBottom() {
		const pageHeight = document.documentElement.offsetHeight;
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

	/* exported scrollToElement */
	scrollToElement(targetElement) {
		const elementId = targetElement.getAttribute("data-scrollTo");
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

	render() {
		return (
			<div className="sticky-nav-container">
				<nav id="sticky-nav_nav">
					<ul>
						<li>
							<a className="one" href="#/" data-scrollTo="one">
								First
							</a>
						</li>
						<li>
							<a className="two" href="#/" data-scrollTo="two">
								Second
							</a>
						</li>
						<li>
							<a className="three" href="#/" data-scrollTo="three">
								Third
							</a>
						</li>
						<li>
							<a className="four" href="#/" data-scrollTo="four">
								Fourth
							</a>
						</li>
						<li>
							<a className="five" href="#/" data-scrollTo="five">
								Fifth
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default StickyNav;
