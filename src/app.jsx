import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/header/header";
import MainComp from "./components/welcome-component/welcome-component";

class App extends Component {
	render() {
		return (
			<>
				<div id="main-header">
					<Header />
				</div>
				<div id="welcome-comp">
					<MainComp />
				</div>
			</>
		);
	}
}

export default App;
