import React, { Component } from "react";
import { hasClass, toggleClass } from "../../global/_util";
// import PropTypes from "prop-types";

class Header extends Component {
	componentDidMount() {
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

	render() {
		return (
			<div className="main-header-container">
				{/* Enter component html here */}
				<header className="main-header js-main-header margin-top--sm margin-bottom--lg">
					<div className="container container--lg">
						<div className="main-header__layout">
							<div className="main-header__logo">
								<a href="#0">
									<svg width="130" height="32" viewBox="0 0 130 32">
										<title>Go to homepage</title>
										<circle
											fill="var(--color-primary)"
											cx="16"
											cy="16"
											r="16"
										/>
										<rect
											fill="var(--color-contrast-higher)"
											x="41"
											y="11"
											width="89"
											height="10"
										/>
									</svg>
								</a>
							</div>

							<button
								className="btn btn--subtle main-header__nav-trigger js-main-header__nav-trigger"
								aria-label="Toggle menu"
								aria-expanded="false"
								aria-controls="main-header-nav"
								type="button"
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
								<ul className="main-header__nav-list">
									<li className="main-header__nav-item nav-item_display-web-only">
										<a
											data-scrollTo="test1234"
											href="#0"
											className="main-header__nav-link"
											aria-current="page"
											// onclick="scrollToElement(this)"
										>
											About
										</a>
									</li>
									<li className="main-header__nav-item nav-item_display-web-only">
										<a
											data-scrollTo="test12345"
											href="#0"
											className="main-header__nav-link"
											// onclick="scrollToElement(this)"
										>
											Projects
										</a>
									</li>
									<li className="main-header__nav-item nav-item_display-web-only">
										<a
											data-scrollTo="test123456"
											href="#0"
											className="main-header__nav-link"
											// onclick="scrollToElement(this)"
										>
											Contact
										</a>
									</li>
									<li
										className="main-header__nav-item nav-item_display-web-only main-header__nav-divider"
										aria-hidden="true"
									/>
									<li className="main-header__nav-item nav-item_display-web-only">
										<a href="#0" className="btn btn--primary">
											Download
										</a>
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

// Header.propTypes = {};

export default Header;
