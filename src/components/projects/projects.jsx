import React, { Component } from "react";

import Modal from "react-modal";

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
						projectDesc: "BLAH BLAH BLAH"
					}
				},
				{
					"Gulp Portfolio": {
						projectName: "Gulp Portfolio",
						projectUrl: "google.com",
						projectDesc: "BLAH BLAH BLAH"
					}
				},
				{
					"React Portfolio": {
						projectName: "React Portfolio",
						projectUrl: "google.com",
						projectDesc: "BLAH BLAH BLAH"
					}
				}
			],
			modalInfo: {
				modalTitle: "modalTitle",
				modalBody: "modalBody",
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
			return Object.keys(item)[0];
		});
		return projectNames.map(item => {
			return (
				<button
					type="button"
					className="project-item"
					data-projectname={item}
					key={item}
					onClick={this.projectClick.bind(this)}
				>
					<div className="project-item_image">Image Box</div>
					<div className="project-item_text">{item}</div>
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
				modalBody: filtered[0].projectDesc,
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
				<div className="projects-demos">{this.projectRender()}</div>

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
								<p>{modalInfo.modalBody}</p>
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
