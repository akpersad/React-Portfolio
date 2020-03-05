import React, { Component } from "react";
import { FaTwitter, FaLinkedinIn, FaSalesforce, FaGithub } from "react-icons/fa";
import ReactGA from "react-ga";
import Legos from "../../images/legos.gif";

import constants from "../../global/_constants";
import SubmitForm from "../submit-form/submit-form";

class Footer extends Component {
	constructor() {
		super();

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
						window.localStorage.setItem("quote", jsonResults.contents.quotes[0].quote);
						window.localStorage.setItem("quoteDate", new Date());
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

	sendEvent(event) {
		const linkOut = `Linked out to ${event.currentTarget.id}`;
		ReactGA.event({
			category: "User",
			action: linkOut
		});
	}

	render() {
		const { quote } = this.state;

		return (
			<section className="section-parts" id="six">
				<div className="d-flex flex-wrap">
					<div className="left-item footer-item">
						<h4>Let&apos;s Connect!</h4>
						<p>Drop me a line and let&apos;s start building!</p>
						<p>
							<img className="footer-image" src={Legos} alt="Lego Blocks Building" />
						</p>
					</div>

					<div className="right-item footer-item">
						<SubmitForm />
					</div>

					<div className="bottom-item footer-item_bottom mt-5">
						<div className="social-icons d-flex flex-row flex-wrap justify-content-center mb-4">
							<a
								href={constants.socialSites.twitter}
								target="_blank"
								rel="noopener noreferrer"
								id="social_twitter"
								onClick={this.sendEvent.bind(this)}
							>
								<div className="social-icons_item mx-sm-5 mx-2">
									<FaTwitter size="1.2em" />
								</div>
							</a>

							<a
								href={constants.socialSites.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								id="social_linkedin"
								onClick={this.sendEvent.bind(this)}
							>
								<div className="social-icons_item mx-sm-5 mx-2">
									<FaLinkedinIn size="1.2em" />
								</div>
							</a>

							<a
								href={constants.socialSites.trailhead}
								target="_blank"
								rel="noopener noreferrer"
								id="social_salesforce"
								onClick={this.sendEvent.bind(this)}
							>
								<div className="social-icons_item mx-sm-5 mx-2">
									<FaSalesforce size="1.2em" />
								</div>
							</a>

							<a
								href={constants.socialSites.github}
								target="_blank"
								rel="noopener noreferrer"
								id="social_github"
								onClick={this.sendEvent.bind(this)}
							>
								<div className="social-icons_item mx-sm-5 mx-2">
									<FaGithub size="1.2em" />
								</div>
							</a>
						</div>

						<div className="made-with d-flex flex-column justify-content-center">
							<p>
								<span>Made by Me! &copy; 2020</span>
							</p>
							<p>
								<q className="font-size_quote">{quote}</q>
								<span className="d-block">
									-
									<a
										className="quote-link"
										href="https://quotes.rest/"
										target="_blank"
										rel="noopener noreferrer"
									>
										They Said So Quotes API
									</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;
