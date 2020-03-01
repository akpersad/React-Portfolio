import React, { Component } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";

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
			},
			isLoading: false,
			messageSent: false
		};
	}

	handleFormChange(event) {
		const stateArray = ["showNameError", "showEmailError", "showMailError"];
		const tempHash = {};
		const objHash = {};
		tempHash[event.target.id] = event.target.value;
		this.setState(tempHash);

		for (const indx in stateArray) {
			if (indx) {
				objHash[stateArray[indx]] = false;
			}
		}
		this.setState(objHash);
	}

	validateForm(event) {
		const stateArray = ["showNameError", "showEmailError", "showMailError"];
		let tempCounter = 0;

		for (let i = 0; i < event.currentTarget.length - 1; i++) {
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

		this.setState({ isLoading: true });

		if (this.validateForm(event)) {
			axios
				.post("/", postBody)
				.then(
					response => {
						if (response.status === 200) {
							this.setState({ messageSent: true });
						}
					},
					error => {
						console.log("Andrew error", error);
					}
				)
				.catch(err => {
					console.log("AS SUPER Error", err);
				});
		} else {
			this.setState({ isLoading: false });
		}
	}

	render() {
		const {
			email,
			errors,
			isLoading,
			message,
			messageSent,
			name,
			showNameError,
			showEmailError,
			showMailError
		} = this.state;

		return (
			<>
				{!isLoading && (
					<form
						id="contact-form"
						onSubmit={this.sendEmail.bind(this)}
						method="POST"
						action="/"
						autoComplete="off"
					>
						<div className="form-group">
							<label htmlFor="name">
								Name
								<input
									type="text"
									className="form-control"
									id="name"
									onChange={this.handleFormChange.bind(this)}
									value={name}
								/>
							</label>
							{showNameError && (
								<span className="d-block text-danger text-size_small">
									{errors.name}
								</span>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">
								Email address
								<input
									type="email"
									className="form-control"
									id="email"
									onChange={this.handleFormChange.bind(this)}
									value={email}
									aria-describedby="emailHelp"
								/>
							</label>
							{showEmailError && (
								<span className="d-block text-danger text-size_small">
									{errors.email}
								</span>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="message">
								Message
								<textarea
									className="form-control"
									rows="5"
									id="message"
									onChange={this.handleFormChange.bind(this)}
									value={message}
								/>
							</label>
							{showMailError && (
								<span className="d-block text-danger text-size_small">
									{errors.message}
								</span>
							)}
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				)}

				{isLoading && !messageSent && <RingLoader left="50%" color="orange" size={350} />}

				{messageSent && (
					<div>
						<p>Your message has been sent</p>
					</div>
				)}
			</>
		);
	}
}

export default SubmitForm;
