import React, { Component } from "react";

import { addClass, removeClass } from "../../global/_util";

class StickyNav extends Component {
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

	render() {
		return (
			<div className="sticky-nav-container">
				<nav id="sticky-nav_nav">
					<ul>
						<li>
							<a
								className="one"
								onClick={this.scrollToElement.bind(this)}
								href="#/"
								data-scrollto="one"
							>
								First
							</a>
						</li>
						<li>
							<a
								className="two"
								onClick={this.scrollToElement.bind(this)}
								href="#/"
								data-scrollto="two"
							>
								Second
							</a>
						</li>
						<li>
							<a
								className="three"
								onClick={this.scrollToElement.bind(this)}
								href="#/"
								data-scrollto="three"
							>
								Third
							</a>
						</li>
						<li>
							<a
								className="four"
								onClick={this.scrollToElement.bind(this)}
								href="#/"
								data-scrollto="four"
							>
								Fourth
							</a>
						</li>
						<li>
							<a
								className="five"
								onClick={this.scrollToElement.bind(this)}
								href="#/"
								data-scrollto="five"
							>
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
