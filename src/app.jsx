import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/header/header";
import MainComp from "./components/welcome-component/welcome-component";
import StickyNav from "./components/sticky-nav/sticky-nav";
import Projects from "./components/projects/projects";

class App extends Component {
	render() {
		return (
			<>
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
							<div id="projects">
								<Projects />
							</div>
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="two">
							Hello
						</section>
					</div>

					<div className="sections">
						<section className="section-parts" id="three">
							Hello
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
