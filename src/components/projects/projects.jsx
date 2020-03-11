import React, { Component } from "react";
import ReactGA from "react-ga";

import Modal from "react-modal";
import { FaGithub } from "react-icons/fa";
import { MdPhonelink } from "react-icons/md";
import projects from "./_projects-obj";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
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
		const projectNames = projects.map(item => {
			return { projName: Object.keys(item)[0], backImage: item.projectImage };
		});

		return projectNames.map(item => {
			return (
				<button
					type="button"
					className="project-container mb-3 mr-3"
					data-projectname={item.projName}
					key={item.projName}
					onClick={this.projectClick.bind(this)}
				>
					<img
						src={item.backImage}
						alt="Geometric Shapes"
						className="project-container_image"
					/>
					<div className="middle-container">
						<div className="project-text">{item.projName}</div>
					</div>
				</button>
			);
		});
	}

	projectClick(event) {
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

		ReactGA.event({
			category: "User",
			action: `Clicked the ${filtered[0].projectName} modal`
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
									className="close close-btn"
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
								<p className="modal-body_text">
									<span className="white-space-pre">{modalInfo.modalBody}</span>
								</p>
								<p className="d-flex flex-column flex-wrap">
									<div className="projects-link-container">
										<span className="project-social_links project-social_links-github ">
											Github Link:
										</span>
										<a
											href={modalInfo.modalGit}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaGithub size={46} />
										</a>
									</div>
									<div className="projects-link-container">
										<span className="project-social_links project-social_links-web ">
											Website:
										</span>
										<a
											href={modalInfo.modalUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<MdPhonelink size={46} />
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
