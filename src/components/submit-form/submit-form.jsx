import React, { Component } from "react";

class SubmitForm extends Component {
	sendEmail() {
		const name = "Andrwew";
		const email = "aa@a.com";
		const message = "Messanger22234";
		fetch("/send", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		})
			.then(res => res.json())
			.then(res => {
				console.log("here is the response: ", res);
			})
			.catch(err => {
				console.error("here is the error: ", err);
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
