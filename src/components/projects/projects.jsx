import React, { Component } from "react";

import Modal from "react-modal";
import { FaGithub } from "react-icons/fa";
import { MdPhonelink } from "react-icons/md";
import weddingGif from "../../images/wedding.gif";
import constants from "../../global/_constants";
import BlueGeo from "../../images/geometric_blue.jpg";
import GreenGeo from "../../images/geometric_green.jpg";
import PinkGeo from "../../images/geometric_pink.jpg";
import PurpleGeo from "../../images/geometric_purple.jpg";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			projects: [
				{
					"Wedding Website": {
						projectName: "Wedding Website",
						projectUrl: "google.com",
						projectTechs: "React, React Router",
						projectGithub: constants.githubSites.wedding,
						projectDescription: "Cool description",
						projectScreenShot: weddingGif
					},
					projectImage: BlueGeo
				},
				{
					"Gulp Portfolio": {
						projectName: "Gulp Portfolio",
						projectUrl: "google.com",
						projectTechs: "Gulp, SASS",
						projectGithub: constants.githubSites.portfolioGulp,
						projectDescription: "Cool description",
						projectScreenShot: "https://i.picsum.photos/id/431/3360/1768.jpg?blur=1"
					},
					projectImage: GreenGeo
				},
				{
					"React Portfolio": {
						projectName: "React Portfolio",
						projectUrl: "google.com",
						projectTechs: "React, RESTful Api, Express, Node.js",
						projectGithub: constants.githubSites.portfolioReact,
						projectDescription: "Cool description",
						projectScreenShot: "https://i.picsum.photos/id/431/3360/1768.jpg?blur=1"
					},
					projectImage: PinkGeo
				},
				{
					"Chrome Extension": {
						projectName: "Chrome Extension",
						projectUrl: "google.com",
						projectTechs: "Chrome Extension, JavaScript",
						projectGithub: constants.githubSites.chromeExtension,
						projectDescription: "Cool description",
						projectScreenShot: "https://i.picsum.photos/id/431/3360/1768.jpg?blur=1"
					},
					projectImage: PurpleGeo
				}
			],
			modalInfo: {
				modalTitle: "modalTitle",
				modalBody: "modalBody",
				modalTech: "modalTech",
				modalSS: "modalSS",
				modalGit: "modalGit",
				modalUrl: "modalUrl"
			}
		};
	}

	componentDidMount() {
		Modal.setAppElement("#projects");
	}

	projectRender() {
		const { projects } = this.state;
		const projectNames = projects.map(item => {
			return { projName: Object.keys(item)[0], backImage: item.projectImage };
		});

		return projectNames.map(item => {
			const divStyle = { backgroundImage: `url(${item.backImage})` };

			return (
				<button
					type="button"
					className="project-item mb-3"
					data-projectname={item.projName}
					key={item.projName}
					onClick={this.projectClick.bind(this)}
				>
					<div className="project-item_image" style={divStyle}>
						{item.projName}
					</div>
				</button>
			);
		});
	}

	projectClick(event) {
		const { projects } = this.state;
		let clickedElement = event.target;
		while (clickedElement.tagName !== "BUTTON") {
			clickedElement = clickedElement.parentElement;
		}

		const whichModal = clickedElement.getAttribute("data-projectname");
		const modalInformation = projects.map(item => {
			if (Object.keys(item)[0] === whichModal) {
				return item[Object.keys(item)[0]];
			}
			return null;
		});

		const filtered = modalInformation.filter(function(el) {
			return el !== null;
		});

		this.setState({
			modalInfo: {
				modalTitle: filtered[0].projectName,
				modalBody: filtered[0].projectDescription,
				modalGit: filtered[0].projectGithub,
				modalTech: filtered[0].projectTechs,
				modalSS: filtered[0].projectScreenShot,
				modalUrl: filtered[0].projectUrl
			}
		});
		this.setState({ showModal: true });
	}

	closeModal() {
		this.setState({ showModal: false });
	}

	render() {
		const { showModal } = this.state;
		const { modalInfo } = this.state;
		return (
			<div className="projects-comp">
				<div>
					<h3>My Recent Work</h3>
					<p className="mb-5">
						<span>
							Here are a few design projects I&apos;ve worked on recently. Want to see
							more? Email me.
						</span>
					</p>
				</div>

				<div className="projects-demos mx-auto">{this.projectRender()}</div>

				<Modal
					isOpen={showModal}
					// eslint-disable-next-line react/jsx-no-bind
					onRequestClose={this.closeModal.bind(this)}
					className="react-modal"
					overlayClassName="modal-overlay"
					contentLabel="Example Modal"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">{modalInfo.modalTitle}</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
									onClick={this.closeModal.bind(this)}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<img
									className="modal-image"
									src={modalInfo.modalSS}
									alt="Screenshot of Project"
								/>
								<p>
									<span className="font-weight-bold pr-2">
										Technologies used:
									</span>
									<span>{modalInfo.modalTech}</span>
								</p>
								<p>
									<span>{modalInfo.modalBody}</span>
								</p>
								<p>
									<div className="d-block">
										<span className="pr-2">Github Link:</span>
										<a
											href={modalInfo.modalGit}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaGithub />
										</a>
									</div>
									<div className="d-block">
										<span className="pr-2">Website:</span>
										<a
											href={modalInfo.modalUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<MdPhonelink />
										</a>
									</div>
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									onClick={this.closeModal.bind(this)}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Projects;
