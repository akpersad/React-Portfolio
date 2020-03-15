import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Favicon from "react-favicon";
import ReactGA from "react-ga";
import { getIP } from "./global/_getIP";

import FaviconImage from "./svg/logo.svg";

import Header from "./components/header/header";
import MainComp from "./components/welcome-component/welcome-component";
import StickyNav from "./components/sticky-nav/sticky-nav";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import AboutMe from "./components/about-me/about-me";
import Testimonials from "./components/testimonials/testimonials";

const trackingId = "UA-36788567-8";
ReactGA.initialize(trackingId, {
	cookieDomain: "auto",
	testMode: true
});
class App extends Component {
	componentDidMount() {
		getIP.then(response => {
			ReactGA.set({
				dimension1: response.ip, // userIP
				dimension2: response.city, // userCity
				dimension3: response.state, // userState
				dimension4: response.referral // userReferral
			});
			ReactGA.pageview(window.location.pathname + window.location.search);
		});
	}

	render() {
		return (
			<>
				<Favicon url={FaviconImage} />
				<div id="main-header">
					<Header />
				</div>
				<div className="body-component">
					<div id="welcome-comp">
						<MainComp />
					</div>
					<div id="sticky-nav">
						<StickyNav />
					</div>

					<div className="sections">
						<section className="section-parts" id="section_about-me">
							<div className="h-100" id="shapes">
								<AboutMe />
							</div>
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="section_projects">
							<div id="projects">
								<Projects />
							</div>
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="section_testimonials">
							<Testimonials />
						</section>
					</div>
				</div>
				<div className="footer-component" id="section_footer">
					<Footer />
				</div>
			</>
		);
	}
}

export default App;
