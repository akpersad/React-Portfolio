import React, { Component } from "react";
import axios from "axios";

class SubmitForm extends Component {
	constructor() {
		super();

		this.state = {
			name: "Andrwew",
			email: "aa@a.com",
			message: "Messanger22234"
		};
	}

	sendEmail(e) {
		e.preventDefault();
		const { name, email, message } = this.state;

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
					console.log("Andrew error", error);
				}
			)
			.catch(err => {
				console.log("AS SUPER Error", err);
			});
	}

	render() {
		return (
			<form
				id="contact-form"
				onSubmit={this.sendEmail.bind(this)}
				method="POST"
				action="/send"
			>
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
