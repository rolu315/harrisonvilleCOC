import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./bibleCorrespondenceCourse.css";
import * as firebase from "firebase";
import "firebase/database";
import Firebase from "../firebase/firebase";
import styled, { css } from "styled-components";
import InputMask from "react-input-mask";
import Pageheader from "../header/header";
import Pagefooter from "../footer/footer";
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
	fullName: "",
	email: "",
	streetAddress: "",
	city: "",
	state: "",
	zip: "",
	phoneNumber: "",
	comments: "",
	error: null,
};
const recaptchaRef = React.createRef();

var db = firebase.firestore();

class BibleCorrespondenceCourse extends Component {
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
				fullName,
				email,
				streetAddress,
				city,
				state,
				zip,
				phoneNumber,
				comments,
			} = this.state;
			let formID = fullName;
			db.collection("bibleCourses")
				.doc(formID)
				.set({
					fullName: fullName,
					email: email,
					streetAddress: streetAddress,
					city: city,
					state: state,
					zip: zip,
					phoneNumber: phoneNumber,
					comments: comments,
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
			fullName,
			email,
			streetAddress,
			city,
			state,
			zip,
			phoneNumber,
			comments,
			error,
		} = this.state;

		const isInvalid =
			fullName === "" ||
			streetAddress === "" ||
			city === "" ||
			state === "" ||
			zip === "";

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
					<Pageheader />
					<Title id="contactForm">Request Bible Correspondance Course</Title>
					<Row className="formData text-left">
						<div className="col-md-3"></div>
						<FormData className="col-md-6 col-xs-12" onSubmit={this.onSubmit}>
							<label
								id="fullNameInputLabel"
								htmlFor="companyNameInput"
								className="font-weight-bold"
							>
								First &amp; Last Name
							</label>
							<input
								type="text"
								placeholder="First &amp; Last Name (Required)"
								id="fullNameInput"
								className="form-control"
								name="fullName"
								value={fullName}
								onChange={this.onChange}
							/>
							<label htmlFor="streetAddressInput" className="font-weight-bold ">
								Street Adress
							</label>
							<input
								type="text"
								placeholder="Your Street Address"
								id="streetAddressInput"
								className="form-control"
								name="streetAddress"
								value={streetAddress}
								onChange={this.onChange}
							/>
							<label htmlFor="cityInput" className="font-weight-bold">
								City
							</label>
							<input
								type="text"
								placeholder="Your City"
								id="cityInput"
								className="form-control"
								name="city"
								value={city}
								onChange={this.onChange}
							/>
							<label htmlFor="stateInput" className="font-weight-bold">
								State
							</label>
							<select
								type="text"
								placeholder="Your Answer"
								id="stateInput"
								className="form-control"
								name="state"
								value={state}
								onChange={this.onChange}
							>
								<option>-Select-</option>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
							<label htmlFor="zipInput" className="font-weight-bold">
								Zip Code
							</label>
							<InputMask
								{...this.props}
								mask="99999"
								maskChar={null}
								type="text"
								inputMode="numeric"
								placeholder="Your Zip Code"
								id="zipInput"
								className="form-control"
								name="zip"
								value={zip}
								onChange={this.onChange}
							/>
							<label
								id="emailInput"
								htmlFor="emailInput"
								className="font-weight-bold"
							>
								Email Address
							</label>
							<input
								type="email"
								placeholder="Your Answer"
								id="emailInput"
								className="form-control"
								name="email"
								value={email}
								onChange={this.onChange}
							/>
							<label
								id="phoneNumberInputLabel"
								htmlFor="phoneNumberInput"
								className="font-weight-bold"
							>
								Phone Number
							</label>
							<InputMask
								{...this.props}
								mask="(999)999-9999"
								maskChar=" "
								type="tel"
								placeholder="Your Phone Number"
								id="phoneNumberInput"
								className="form-control"
								name="phoneNumber"
								value={phoneNumber}
								onChange={this.onChange}
							/>
							<label
								id="commentsInputLabel"
								htmlFor="commentsInput"
								className="font-weight-bold"
							>
								Comments or Questions
							</label>
							<textarea
								rows="5"
								cols="50"
								type="text"
								placeholder="Any questions or comments you may have"
								id="commentsInput"
								className="form-control"
								name="comments"
								value={comments}
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
					<Pagefooter />
				</Wrapper>
			</div>
		);
	}
}

export default BibleCorrespondenceCourse;
