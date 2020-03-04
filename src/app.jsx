import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Favicon from "react-favicon";
import ReactGA from "react-ga";
import { getIP } from "./global/_getIP";

import FaviconImage from "./images/logo.svg";

import Header from "./components/header/header";
import MainComp from "./components/welcome-component/welcome-component";
import StickyNav from "./components/sticky-nav/sticky-nav";
import Shapes from "./components/shapes/shapes";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

const trackingId = "UA-36788567-8";
ReactGA.initialize(trackingId, {
	cookieDomain: "auto"
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
						<section className="section-parts" id="one">
							<div className="h-100" id="shapes">
								<Shapes />
							</div>
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="two">
							<div id="projects">
								<Projects />
							</div>
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="three">
							Submit
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="four">
							Hello
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="five">
							Hello
						</section>
					</div>
				</div>
				<div className="footer-component">
					<Footer />
				</div>
			</>
		);
	}
}

export default App;
