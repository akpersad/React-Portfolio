import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Favicon from "react-favicon";
import FaviconImage from "./images/logo.svg";

import Header from "./components/header/header";
import MainComp from "./components/welcome-component/welcome-component";
import StickyNav from "./components/sticky-nav/sticky-nav";
import Shapes from "./components/shapes/shapes";
import Projects from "./components/projects/projects";
import SubmitForm from "./components/submit-form/submit-form";

class App extends Component {
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
							<SubmitForm />
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
			</>
		);
	}
}

export default App;
