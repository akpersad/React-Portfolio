import React, { Component } from "react";
import axios from "axios";

class SubmitForm extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			email: "",
			message: "",
			showNameError: false,
			showEmailError: false,
			showMailError: false,
			errors: {
				name: "Please Enter a Name",
				email: "Please Enter a Valid Email",
				message: "Please Enter a Message"
			}
		};
	}

	validateForm(event) {
		const stateArray = ["showNameError", "showEmailError", "showMailError"];
		let tempCounter = 0;

		for (let i = 0; i < event.currentTarget.length; i++) {
			if (event.currentTarget[i].value === "") {
				const obj = {};
				obj[stateArray[i]] = true;
				this.setState(obj);
				tempCounter += 1;
			}
		}

		if (tempCounter > 0) {
			return false;
		}
		return true;
	}

	sendEmail(event) {
		event.preventDefault();
		const { name, email, message } = this.state;
		const postBody = { name, email, message };

		if (this.validateForm(event)) {
			axios
				.post("/", postBody)
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
	}

	render() {
		const {
			name,
			email,
			message,
			errors,
			showNameError,
			showEmailError,
			showMailError
		} = this.state;

		return (
			<form id="contact-form" onSubmit={this.sendEmail.bind(this)} method="POST" action="/">
				<div className="form-group">
					<label htmlFor="name">
						Name
						<input type="text" className="form-control" id="name" value={name} />
					</label>
					{showNameError && (
						<span className="d-block text-danger text-size_small">{errors.name}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">
						Email address
						<input
							type="email"
							className="form-control"
							id="email"
							value={email}
							aria-describedby="emailHelp"
						/>
					</label>
					{showEmailError && (
						<span className="d-block text-danger text-size_small">{errors.name}</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="message">
						Message
						<textarea className="form-control" rows="5" id="message" value={message} />
					</label>
					{showMailError && (
						<span className="d-block text-danger text-size_small">{errors.name}</span>
					)}
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default SubmitForm;
