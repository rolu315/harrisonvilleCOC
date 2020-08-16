import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { withFirebase } from "../Firebase/firebaseConfig";
import styled from "styled-components";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import ReCAPTCHA from "react-google-recaptcha";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
} from "mdbreact";

const Wrapper = styled.section`
	padding-bottom: 3%;
	padding-top: 3%;
	text-align: center;
`;
const Title = styled.h1`
	font-weight: 1000;
	font-family: "Monteserrat";
	@media (max-width: 375px) {
		margin-top: 5%;
	}
`;

const FormData = styled.form`
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
`;

const INITIAL_STATE = {
	issueDescription: "",
	url: "",
	browser: "",
	submittedBy: "",
	submittedDate: "",
	errorMessage: "",
	occurrenceSection: "",
	errorDescription: "",
	email: "",
	error: null,
};
const recaptchaRef = React.createRef();
let db = firebase.firestore();

class BugReportingForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.verifyCallback = this.verifyCallback.bind(this);
		this.state = { ...INITIAL_STATE, isVerified: false };
	}

	onSubmit = (event) => {
		if (this.state.isVerified) {
			event.preventDefault();
			const {
				issueDescription,
				url,
				browser,
				submittedBy,
				submittedDate,
				errorMessage,
				occurrenceSection,
				errorDescription,
				email,
			} = this.state;
			let formID = errorDescription;
			db.collection("formBugReporting")
				.doc(formID)
				.set({
					issueDescription: issueDescription,
					url: url,
					browser: browser,
					submittedBy: submittedBy,
					submittedDate: submittedDate,
					errorMessage: errorMessage,
					occurrenceSection: occurrenceSection,
					errorDescription: errorDescription,
					email: email,
				})
				.then(() => {
					(window.location = "/formSuccess").this
						.setstate({ ...INITIAL_STATE })
						.catch((window.location = "/formError"))
				});
			const recaptchaValue = recaptchaRef.current.getValue();
			this.props.onSubmit(recaptchaValue);
		} else {
			alert("Please verifiy that you are a human!");
		}
	};
	verifyCallback(response) {
		if (response) {
			this.setState({
				isVerified: true,
			});
		}
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const {
			issueDescription,
			url,
			browser,
			submittedBy,
			submittedDate,
			errorMessage,
			occurrenceSection,
			errorDescription,
			email,
			error,
		} = this.state;

		const isInvalid =
			issueDescription === "" ||
			url === "" ||
			browser === "" ||
			occurrenceSection === "" ||
			errorDescription === "";

		return (
			<div id="formContainer">
				<header>
					<MDBNavbar
						color="bg-primary"
						fixed="top"
						dark
						expand="md"
						scrolling
						transparent
					>
						<MDBNavbarBrand href="/"></MDBNavbarBrand>
						{!this.state.isWideEnough && (
							<MDBNavbarToggler onClick={this.onClick} />
						)}
						<MDBCollapse isOpen={this.state.collapse} navbar>
							<MDBNavbarNav left>
								<MDBNavItem active>
									<MDBNavLink
										to="Link"
										onClick={() => {
											window.location = "/";
										}}
									>
										Back
									</MDBNavLink>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBNavbar>
				</header>

				<Wrapper>
					<Title id="bugReportingForm">Bug Reporting Form</Title>
					<Row className="formData text-left">
						<div className="col-md-3"></div>
						<FormData className="col-md-6 col-xs-12" onSubmit={this.onSubmit}>
							<label
								id="issueDescriptionInputLabel"
								htmlFor="issueDescriptionInput"
								className="font-weight-bold"
							>
								Short description (title) for the issue found
							</label>
							<input
								type="text"
								placeholder="Your Answer (Required)"
								id="issueDescriptionInput"
								className="form-control"
								name="issueDescription"
								value={issueDescription}
								onChange={this.onChange}
							/>
							<label
								id="errorDescriptionInputLabel"
								htmlFor="errorDescriptionInput"
								className="font-weight-bold "
							>
								Full description of issue found
							</label>
							<input
								type="text"
								placeholder="Your Answer (Required)"
								id="errorDescriptionInput"
								className="form-control"
								name="errorDescription"
								value={errorDescription}
								onChange={this.onChange}
							/>
							<label
								id="errorMessageInputLabel"
								htmlFor="errorMessageInput"
								className="font-weight-bold"
							>
								Specific Error Message (if any)
							</label>
							<input
								type="text"
								placeholder="Your Answer (Required)"
								id="errorMessageInput"
								className="form-control"
								name="errorMessage"
								value={errorMessage}
								onChange={this.onChange}
							/>
							<label
								id="urlInputLabel"
								htmlFor="urlInput"
								className="font-weight-bold"
							>
								URL where issue was found
							</label>
							<input
								type="text"
								placeholder="Your Answer (Required)"
								id="urlInput"
								className="form-control"
								name="url"
								value={url}
								onChange={this.onChange}
							/>
							<label
								id="browserInputLabel"
								htmlFor="browserInput"
								className="font-weight-bold"
							>
								Browser used when issue was found
							</label>
							<input
								type="text"
								placeholder="Browser Name: Firefox, Chrome, Edge and others (Required)"
								id="browserInput"
								className="form-control"
								name="browser"
								value={browser}
								onChange={this.onChange}
							/>

							<label
								id="occurrenceSectionInputLabel"
								htmlFor="occurrenceSectionInput"
								className="font-weight-bold"
							>
								What section of the website was the issue found? Such as; the
								header, footer, reviews and contact us.
							</label>
							<input
								type="text"
								placeholder="Your Answer (Required)"
								id="occurrenceSectionInput"
								className="form-control"
								name="occurrenceSection"
								value={occurrenceSection}
								onChange={this.onChange}
							/>

							<label
								id="submittedDateInputLabel"
								htmlFor="submittedDateInput"
								className="font-weight-bold"
							>
								Date issue was found
							</label>
							<input
								type="text"
								placeholder="mm/dd/yyyy"
								id="submittedDateInput"
								className="form-control"
								name="submittedDate"
								value={submittedDate}
								onChange={this.onChange}
							/>
							<label
								id="bugEmailInputLabel"
								htmlFor="bugEmailInput"
								className="font-weight-bold"
							>
								Email Address
							</label>
							<input
								type="email"
								placeholder="Your Email"
								id="emailInput"
								className="form-control"
								name="email"
								value={email}
								onChange={this.onChange}
							/>
							<label
								id="submittedByInputLabel"
								htmlFor="submittedByInput"
								className="font-weight-bold"
							>
								Your Name
							</label>
							<input
								type="text"
								placeholder="Your Answer"
								id="submittedByInput"
								className="form-control"
								name="submittedBy"
								value={submittedBy}
								onChange={this.onChange}
							/>
							<ReCAPTCHA
								className="d-flex justify-content-left"
								id="reCaptchaBox"
								sitekey="6LfLlK8ZAAAAAHPHgHC5TNesn1vEaN-hRM1BkY3C"
								secretkey="6LfLlK8ZAAAAAD83mKAkNp8_epMtM0tEeEEnOQgo"
								render="explicit"
								onChange={this.verifyCallback}
							/>
							<Button disabled={isInvalid} type="submit">
								Submit
							</Button>
							{error && <p>{error.message}</p>}
							<Button
								className="btn btn-danger"
								type="button"
								onClick={() => {
									window.location = "/";
								}}
							>
								Cancel
							</Button>
						</FormData>
					</Row>
				</Wrapper>
			</div>
		);
	}
}

export default BugReportingForm;
