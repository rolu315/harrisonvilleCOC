import React from "react";
import "./errorForm.css";
import { Modal, Button } from "react-bootstrap";

function ErrorForm(props) {
	const [modalShow, setModalShow] = React.useState(true);

	return (
		<div id="errorFormBG">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={modalShow}
			>
				<Modal.Header closeButton onClick={() => setModalShow(false)}>
					<Modal.Title id="contained-modal-title-vcenter">Uh Oh!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>
						We have received your message and would like to thank you for
						writing to us. If your inquiry is urgent, please feel free to call
						us at (816) 607-3982‬. Otherwise, we will reach out to you as soon
						as possible.
					</h5>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={() => {
							window.location = "/";
						}}
					>
						Home
					</Button>
					<Button onClick={() => setModalShow(false)}>Close</Button>
				</Modal.Footer>
			</Modal>
			<div className="text-left">
				<Button
					className="text-left"
					id="formSuccessHomeButton"
					onClick={() => {
						window.location = "/";
					}}
				>
					Home
				</Button>
			</div>
		</div>
	);
}

export default ErrorForm;
