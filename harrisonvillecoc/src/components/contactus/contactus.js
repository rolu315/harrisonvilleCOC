import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import Firebase from "../firebase/firebaseConfig";
import "./contactForm.css";
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
	error: null
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

	onSubmit = event => {
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
					message: message
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
				isVerified: true
			});
		}
	}
	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		const { fullName, email, subject, message, error } = this.state;
		const isInvalid = fullName === "" || email === "" || message === "";

		return (
			<Wrapper>
				<Title id="contactForm">Let's Get In Touch</Title>
				<SubTitle>
					We promise you won't talk to a robot! <br />
				</SubTitle>
				<Row>
					<div className="col-md-2"></div>
					<div className="col-md-8 col-xs-12">
						<BodyText>
							Whenever you contact us we promise to answer you with a real
							person. No more waiting onhold or having your email go into the
							abyss. When you call...we listen. If you go to voicemail, your
							call is returned not sent into a dark void waiting for a customer
							service representative to pick it up in a queue. rl3Inspired is
							about solving real problems using real people.
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
							sitekey="6LdpzOMUAAAAAMGrN85HbH9q-41RSAxtgvcRLdzU"
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