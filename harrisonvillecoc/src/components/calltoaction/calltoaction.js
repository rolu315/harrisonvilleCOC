  
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import "../announcements/announcements.css";
import CustomOffice from "../common/images/customOffice.jpg";
import NativeApps from "../common/images/nativeApplication.jpg";
import Ecommerce from "../common/images/ecommerce.jpg";
import WebHosting from "../common/images/webHosting.jpg";
import Support from "../common/images/support.jpg";
import QualityAssurance from "../common/images/qualityAssurance.png";

function Announcements() {
	const Title = styled.h2`
		margin-top: 3%;
		margin-bottom: 3%;
		font-weight: bolder;
		text-decoration: underline;
	`;

	const BodyText = styled.p`
		margin-bottom: 5%;
		font-size: 20px;
	`;

	function handleClick(e) {
		e.preventDefault();
	}

	return (
		<div className="container" id="upcomingContainer">
			<Title>Our Worship Services</Title>
			<BodyText>
				<strong>rl3Inspired doesn't do "websites".</strong>
				<br /> We provide website and app solutions for a variety of different
				businesses.
				<br /> Our goal is to provide the best user experience for all your
				needs. <br />
				ADA compliance and Website Security are our top priorities for all our
				partners! <br />
				Let us know how we can serve your business or non-profit organization
				today!
			</BodyText>
			<Container>
				<Row id="cardRowOne">
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img
								variant="top"
								src={CustomOffice}
								alt="man in office chair surrounded by storm troopers"
							/>
							<Card.Body>
								<Card.Title>Custom Website Design</Card.Title>
								<Card.Text>
									rl3Inspired leverages a customized framework to help you
									achieve your website goals!
									<br />
									<br />
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button">
								Get Started
							</Button>
						</Card>
					</Col>
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img variant="top" src={WebHosting} />
							<Card.Body>
								<Card.Title>Website Audit</Card.Title>
								<Card.Text>
									Let our team of experts perform an audit of your website. This
									will help identify issues preventing your website from
									achieving traffic goals.
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button">
								Get Started
							</Button>
						</Card>
					</Col>
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img
								variant="top"
								src={Ecommerce}
								alt="laptop computer with network equipment in background"
							/>
							<Card.Body>
								<Card.Title>Ecommerce Websites</Card.Title>
								<Card.Text>
									Do you provide products or services to your clients? Our
									Ecommerce applications are perfect for you!
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button">
								Get Started
							</Button>
						</Card>
					</Col>
				</Row>
				<Row id="cardRowTwo">
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img
								variant="top"
								src={NativeApps}
								alt="Man holding a cell phone with apps"
							/>
							<Card.Body>
								<Card.Title>Native Applications</Card.Title>
								<Card.Text>
									Do you have a great mobile application idea? We can help you
									put that idea to work!
									<br />
									<br />
								</Card.Text>
							</Card.Body>
							<Button
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button"
								id="announcementsBtn">
								Get Started
							</Button>
						</Card>
					</Col>
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img variant="top" src={Support} />
							<Card.Body>
								<Card.Title>Maintenance &amp; Support</Card.Title>
								<Card.Text>
									We offer Maintenance and Support for new websites and for
									those who may already have their website in place.
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button">
								Get Started
							</Button>
						</Card>
					</Col>
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img variant="top" src={QualityAssurance} />
							<Card.Body>
								<Card.Title>Quality Assurance</Card.Title>
								<Card.Text>
									Whether it is a small or large project, rl3Inspired can handle
									your Software Quality Engineering. We have automated
									solutions!
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn_6"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button">
								Get Started
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Announcements;