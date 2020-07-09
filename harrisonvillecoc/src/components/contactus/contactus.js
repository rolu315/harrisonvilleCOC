import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import "./contactus.css";
import * as firebase from "firebase";
import "firebase/database";
import Firebase from "../firebase/firebase";
import * as ROUTES from "../../constants/routes";
import { withRouter } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";

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
const SubTitle = styled.h3`
	font-family: "Monteserrat";
	padding-bottom: 1%;
`;

const BodyText = styled.h5`
	text-align: justify;
	padding-bottom: 2%;
	@media (max-width: 375px) {
		padding-left: 2%;
	}
`;

const FormData = styled.form`
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
`;

const INITIAL_STATE = {
	fullName: "",
	email: "",
	subject: "",
	message: "",
	error: null,
};
const recaptchaRef = React.createRef();

var db = firebase.firestore();

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.verifyCallback = this.verifyCallback.bind(this);
		this.state = { ...INITIAL_STATE, isVerified: false };
	}

	onSubmit = (event) => {
		if (this.state.isVerified) {
			event.preventDefault();
			const { fullName, email, subject, message, error } = this.state;
			let contactID = email;
			db.collection("formContacts")
				.doc(contactID)
				.set({
					fullName: fullName,
					email: email,
					subject: subject,
					message: message,
				})
				.then(() => {
					(window.location = "/formSuccess").this
						.setstate({ ...INITIAL_STATE })
						.catch((window.location = "/formError"));
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
		const { fullName, email, subject, message, error } = this.state;
		const isInvalid = fullName === "" || email === "" || message === "";

		return (
			<Wrapper>
				<Title id="contactForm">Let's Get In Touch</Title>
				<Row>
					<div className="col-md-2"></div>
					<div className="col-md-8 col-xs-12">
						<BodyText>
							Our congregation is looking forward to hearing from you! Whether
							it is a prayer request, a Bible study you are looking for or any
							reason, please fill out this simple form and we will contact you
							as soon as it is possible. Thank you!
						</BodyText>
					</div>
				</Row>
				<Row className="formData">
					<div className="col-md-3"></div>
					<FormData className="col-md-6 col-xs-12" onSubmit={this.onSubmit}>
						<input
							name="fullName"
							value={fullName}
							onChange={this.onChange}
							type="text"
							placeholder="Full Name"
						/>
						<input
							name="email"
							value={email}
							onChange={this.onChange}
							type="email"
							placeholder="Your Email Address Here"
						/>
						<input
							name="subject"
							value={subject}
							onChange={this.onChange}
							type="subject"
							placeholder="Subject"
						/>
						<textarea
							rows="5"
							cols="50"
							name="message"
							value={message}
							onChange={this.onChange}
							type="message"
							placeholder="Message"
						/>
						<Button disabled={isInvalid} type="submit">
							Submit
						</Button>
						{error && <p>{error.message}</p>}
						<ReCAPTCHA
							className="d-flex justify-content-center"
							id="reCaptchaBox"
							sitekey="6LfLlK8ZAAAAAHPHgHC5TNesn1vEaN-hRM1BkY3C"
							secretkey="6LfLlK8ZAAAAAD83mKAkNp8_epMtM0tEeEEnOQgo"
							render="explicit"
							onChange={this.verifyCallback}
						/>
					</FormData>
				</Row>
			</Wrapper>
		);
	}
}
export default ContactForm;
