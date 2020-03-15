import React, { Component } from "react";
import ReactGA from "react-ga";
import { hasClass, toggleClass } from "../../global/_util";

import Logo from "../../svg/logo.svg";
import HeaderIcon from "../../svg/header-icon.svg";
import { loadSvg } from "../../global/_importSVG";

class Header extends Component {
	constructor() {
		super();
		this.state = {
			showModalMenu: false
		};
	}

	componentDidMount() {
		const sections = document.querySelectorAll("section.section-parts");
		const navElem = document.querySelector("#sticky-nav_nav");
		const navHeight = navElem.offsetHeight;
		const navTop = navElem.offsetTop;

		this.sections = sections;
		this.navElem = navElem;
		this.navHeight = navHeight;
		this.navTop = navTop;

		loadSvg("#logo-comp");
		loadSvg("#header-icon");
		const lightSwitch = document.querySelector("#lightSwitch");
		const mainHeader = document.querySelector(".js-main-header");
		// Theme switch
		if (window.CSS && CSS.supports("color", "var(--fake-var)")) {
			const initTheme = () => {
				const darkThemeSelected =
					localStorage.getItem("lightSwitch") !== null &&
					localStorage.getItem("lightSwitch") === "dark";
				// update checkbox
				lightSwitch.checked = darkThemeSelected;
				// update body data-theme attribute
				if (darkThemeSelected) {
					document.body.setAttribute("data-theme", "dark");
				} else {
					document.body.removeAttribute("data-theme");
				}
			};

			const resetTheme = () => {
				if (lightSwitch.checked) {
					// dark theme has been selected
					document.body.setAttribute("data-theme", "dark");
					localStorage.setItem("lightSwitch", "dark");
				} else {
					document.body.removeAttribute("data-theme");
					localStorage.removeItem("lightSwitch");
				}
			};

			if (lightSwitch) {
				initTheme(); // if user has already selected a specific theme -> apply it
				lightSwitch.addEventListener("change", function() {
					resetTheme(); // update color theme
				});
			}
		} else {
			lightSwitch.parentElement.style.display = "none";
		}

		// Main Header component JS
		if (mainHeader) {
			const trigger = mainHeader.getElementsByClassName("js-main-header__nav-trigger")[0];
			const nav = mainHeader.getElementsByClassName("js-main-header__nav")[0];
			// detect click on nav trigger
			trigger.addEventListener("click", function(event) {
				event.preventDefault();
				const ariaExpanded = !hasClass(nav, "main-header__nav--is-visible");
				// show nav and update button aria value
				toggleClass(nav, "main-header__nav--is-visible", ariaExpanded);
				trigger.setAttribute("aria-expanded", ariaExpanded);
				if (ariaExpanded) {
					// opening menu -> move focus to first element inside nav
					nav.querySelectorAll(
						"[href], input:not([disabled]), button:not([disabled])"
					)[0].focus();
				}
			});
		}
	}

	scrollToElement(event) {
		event.preventDefault();

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

		const linkOut = `Header: Scrolled To ${elementId}`;
		ReactGA.event({
			category: "User",
			action: linkOut
		});

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}

	toggleMobileMenu(event) {
		const { showModalMenu } = this.state;
		event.preventDefault();
		this.setState({ showModalMenu: !showModalMenu });
		const menuItem = document.querySelector(".main-header__nav-list");
		toggleClass(menuItem, "nav-item_display-web-only", showModalMenu);
	}

	render() {
		return (
			<div className="main-header-container">
				{/* Enter component html here */}
				<header className="main-header js-main-header margin-top--sm margin-bottom--lg">
					<div className="container container--lg">
						<div className="main-header__layout d-flex flex-wrap justify-content-between">
							<img id="logo-comp" src={Logo} alt="Logo" />
							<div className="main-header__logo">
								<div className="logo-link">
									<img id="header-icon" src={HeaderIcon} alt="Header Icon" />
								</div>
							</div>

							<button
								className="btn btn--subtle main-header__nav-trigger js-main-header__nav-trigger ml-auto"
								aria-label="Toggle menu"
								aria-expanded="false"
								aria-controls="main-header-nav"
								type="button"
								onClick={this.toggleMobileMenu.bind(this)}
							>
								<i className="main-header__nav-trigger-icon" aria-hidden="true" />
								<span>Menu</span>
							</button>

							<nav
								className="main-header__nav js-main-header__nav"
								id="main-header-nav"
								aria-labelledby="main-header-nav-label"
								role="navigation"
							>
								<div id="main-header-nav-label" className="main-header__nav-label">
									Main menu
								</div>
								<ul className="main-header__nav-list nav-item_display-web-only">
									<li className="main-header__nav-item">
										<a
											data-scrollto="section_about-me"
											href="#0"
											className="main-header__nav-link"
											aria-current="page"
											onClick={this.scrollToElement.bind(this)}
										>
											About Me
										</a>
									</li>
									<li className="main-header__nav-item">
										<a
											data-scrollto="section_projects"
											href="#0"
											className="main-header__nav-link"
											onClick={this.scrollToElement.bind(this)}
										>
											Projects
										</a>
									</li>
									<li className="main-header__nav-item">
										<a
											data-scrollto="section_testimonials"
											href="#0"
											className="main-header__nav-link"
											onClick={this.scrollToElement.bind(this)}
										>
											Testimonials
										</a>
									</li>
									<li
										className="main-header__nav-item main-header__nav-divider"
										aria-hidden="true"
									/>
									<li className="main-header__nav-item">
										<button
											data-scrollto="section_footer"
											type="button"
											onClick={this.scrollToElement.bind(this)}
											className="btn btn--primary btn--mobile_only"
										>
											Contact Me
										</button>
									</li>
									<li className="main-header__nav-item">
										{/* Switch Toggle */}
										<div className="switch">
											<input id="lightSwitch" type="checkbox" name="toggle" />
											{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
											<label htmlFor="toggle">
												<i className="bulb">
													<span className="bulb-center" />
													<span className="filament-1" />
													<span className="filament-2" />
													<span className="reflections">
														<span />
													</span>
													<span className="sparks">
														<i className="spark1" />
														<i className="spark2" />
														<i className="spark3" />
														<i className="spark4" />
													</span>
												</i>
											</label>
										</div>
										{/* End Switch Toggle */}
									</li>
								</ul>
							</nav>
						</div>
						{/* main-header__layout */}
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
