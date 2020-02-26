import React, { Component } from "react";

import { swapClasses, removeClass } from "../../global/_util";

class Shapes extends Component {
	hoverEvent(element) {
		const className = element.target.classList[0];
		const idName = element.target.id;

		const shapes = document.querySelectorAll(`.${className}`);
		for (let i = 0; i < shapes.length; i++) {
			const loopElement = shapes[i];
			if (loopElement.id !== idName) {
				swapClasses(loopElement, "smaller-size", "larger-size");
			} else {
				swapClasses(loopElement, "larger-size", "smaller-size");
			}
		}
	}

	removeHoverEvent() {
		const shapesClass = ".parallelogram";
		const shapes = document.querySelectorAll(shapesClass);
		for (let i = 0; i < shapes.length; i++) {
			const loopElement = shapes[i];
			removeClass(loopElement, "larger-size smaller-size");
		}
	}

	render() {
		return (
			<div
				className="shapes-container d-flex h-100"
				onMouseOut={this.removeHoverEvent}
				onBlur={this.removeHoverEvent}
			>
				<div
					id="shape-1"
					className="parallelogram"
					onMouseOver={this.hoverEvent}
					onFocus={this.hoverEvent}
				>
					<div className="parallelogram-section">
						{/* On load size */}
						<div className="onload-size_text">Bose</div>
						{/* End On load size */}

						{/* Large Size */}
						<div className="large-size_text">Bose</div>
						{/* End Large Size */}

						{/* Small Size */}
						<div className="smaller-size_text">Bose</div>
						{/* End Small Size */}
					</div>
				</div>
				<div
					id="shape-2"
					className="parallelogram"
					onMouseOver={this.hoverEvent}
					onFocus={this.hoverEvent}
				>
					<div className="parallelogram-section">
						{/* On load size */}
						<div className="onload-size_text">DY</div>
						{/* End On load size */}

						{/* Large Size */}
						<div className="large-size_text">DY</div>
						{/* End Large Size */}

						{/* Small Size */}
						<div className="smaller-size_text">DY</div>
						{/* End Small Size */}
					</div>
				</div>
				<div
					id="shape-3"
					className="parallelogram"
					onMouseOver={this.hoverEvent}
					onFocus={this.hoverEvent}
				>
					<div className="parallelogram-section">
						{/* On load size */}
						<div className="onload-size_text">Salesforce</div>
						{/* End On load size */}

						{/* Large Size */}
						<div className="large-size_text">Salesforce</div>
						{/* End Large Size */}

						{/* Small Size */}
						<div className="smaller-size_text">Salesforce</div>
						{/* End Small Size */}
					</div>
				</div>
			</div>
		);
	}
}

export default Shapes;
