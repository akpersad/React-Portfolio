import React, { Component } from "react";

class WelcomeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: ""
		};
	}

	componentDidMount() {
		if (window.localStorage.getItem("quote")) {
			const quoteTime = new Date(window.localStorage.getItem("quoteDate"));
			const twoHours = 60 * 60 * 1000 * 2; /* ms */
			if (new Date() - quoteTime < twoHours) {
				this.setState({ quote: window.localStorage.getItem("quote") });
			} else {
				this.fetchQuote();
			}
		} else {
			this.fetchQuote();
		}
	}

	fetchQuote() {
		const backupQuote = "Only those who dare to fail greatly can ever achieve greatly.";
		const url = "https://quotes.rest/qod";
		fetch(url)
			.then(results => {
				results
					.json()
					.then(jsonResults => {
						this.setState({ quote: jsonResults.contents.quotes[0].quote });
						window.localStorage.setItem({
							quote: jsonResults.contents.quotes[0].quote,
							quoteDate: new Date()
						});
					})
					.catch(err => {
						console.log(err);
						this.setState({ quote: backupQuote });
					});
			})
			.catch(err => {
				console.log(err);
				this.setState({ quote: backupQuote });
			});
	}

	render() {
		const { quote } = this.state;
		return (
			<div className="welcome-comp-container">
				{/* Enter component html here */}
				<div className="image-overlay w-100 h-100">
					<div className="container-fluid">
						<div className="align-absolute_center flex-column">
							<h1 className="header-title animate-pop-in text-center">{quote}</h1>
							<div className="d-block">
								<section className="header-down-arrow">
									<svg
										viewBox="0 0 32 32"
										className="icon icon-chevron-bottom"
										// viewBox="0 0 32 32"
										aria-hidden="true"
									>
										<path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
									</svg>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WelcomeComponent;
