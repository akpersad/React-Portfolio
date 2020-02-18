import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/header/header";

class App extends Component {
	render() {
		return (
			<div id="main-header">
				<Header />
			</div>
		);
	}
}

export default App;
