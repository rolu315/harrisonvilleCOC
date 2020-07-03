import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import "../calltoaction/calltoaction.css";
import BibleCourses from "../common/images/JohnHurtLessons.jpg";
import Articles from "../common/images/upcomingEvents.jpg";
import Sermons from "../common/images/sermonLessons.jpg";

function CallToAction() {
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
								src={BibleCourses}
								alt="man in office chair surrounded by storm troopers"
							/>
							<Card.Body>
								<Card.Title>Bible Correspondence Courses</Card.Title>
								<Card.Text>
									Complete eight lesson courses covering both Old and New
									Testaments of the Bible. Complete a simple form and we will
									snd you the first lesson with a return envelope (we pay the
									postage). This is a paid service by the members of our
									congregation.
									<br />
									<br />
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button"
							>
								Get Started
							</Button>
						</Card>
					</Col>
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img variant="top" src={Articles} />
							<Card.Body>
								<Card.Title>Articles</Card.Title>
								<Card.Text>
									Bible based articles on a variety of topics written by members
									of the church of Christ.
								</Card.Text>
							</Card.Body>
							<Button
								id="articles"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button"
							>
								Get Started
							</Button>
						</Card>
					</Col>
					<Col lg={4} sm={12} className="d-flex align-items-stretch">
						<Card>
							<Card.Img
								variant="top"
								src={Sermons}
								alt="laptop computer with network equipment in background"
							/>
							<Card.Body>
								<Card.Title>Sermons</Card.Title>
								<Card.Text>
									Listen to sermons presented by our preacher and other men of
									our congregation. Written articles addressing important Bible
									topics that affect all of us today!
								</Card.Text>
							</Card.Body>
							<Button
								id="announcementsBtn"
								to={ROUTES.GETSTARTED_FORM}
								as={Link}
								type="button"
							>
								Get Started
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CallToAction;
