import React, { Component } from "react";
import axios from "axios";

class SubmitForm extends Component {
	sendEmail(e) {
		e.preventDefault();
		const name = "Andrwew";
		const email = "aa@a.com";
		const message = "Messanger22234";

		axios
			.post("/", {
				name,
				email,
				message
			})
			.then(
				response => {
					console.log("AndrewResponse", response);
				},
				error => {
					debugger;
					console.log("Andrew error", error);
				}
			)
			.catch(err => {
				console.log("AS SUPER Error", err);
			});
	}

	render() {
		return (
			<form id="contact-form" onSubmit={this.sendEmail} method="POST" action="/send">
				<div className="form-group">
					<label htmlFor="name">
						Name
						<input type="text" className="form-control" id="name" />
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">
						Email address
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
						/>
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="message">
						Message
						<textarea className="form-control" rows="5" id="message" />
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default SubmitForm;
