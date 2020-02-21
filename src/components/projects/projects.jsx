import React, { Component } from "react";

import Modal from "react-modal";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};
	}

	componentDidMount() {
		Modal.setAppElement("#projects");
	}

	projectClick(event) {
		console.log(event.target.classList[0]);
		this.setState({ showModal: true });
	}

	closeModal() {
		this.setState({ showModal: false });
	}

	render() {
		const { showModal } = this.state;
		return (
			<div className="projects-comp">
				<div className="projects-demos">
					<button
						type="button"
						className="project-item"
						onClick={this.projectClick.bind(this)}
					>
						<div className="project-item_image">Image Box</div>
						<div className="project-item_text">Image Text</div>
					</button>
					<button
						type="button"
						className="project-item"
						onClick={this.projectClick.bind(this)}
					>
						<div className="project-item_image">Image Box</div>
						<div className="project-item_text">Image Text</div>
					</button>
					<button
						type="button"
						className="project-item"
						onClick={this.projectClick.bind(this)}
					>
						<div className="project-item_image">Image Box</div>
						<div className="project-item_text">Image Text</div>
					</button>
				</div>

				<Modal
					isOpen={showModal}
					onRequestClose={this.closeModal}
					className="Modal"
					overlayClassName="modal-overlay"
					contentLabel="Example Modal"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
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
