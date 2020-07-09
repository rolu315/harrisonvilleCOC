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
	const BulletPoints = styled.li`
		list-style-type: none;
	`;
	const UnorderedList = styled.ul``;

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
				<strong>Our Service Times:</strong>
				<UnorderedList>
					<BulletPoints>9:30 a.m. Sunday Morning Bible Study</BulletPoints>
					<BulletPoints>10:30 a.m. Sunday Morning Worship</BulletPoints>
					<BulletPoints>2:00 p.m. Sunday Afternoon Worship</BulletPoints>
					<BulletPoints>7:00 p.m. Wednesday Night Bible Study</BulletPoints>
				</UnorderedList>
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
								to={ROUTES.BIBLE_CORRESPONDENCE_COURSE}
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
								to={ROUTES.ARTICLES}
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
								type="button"
							>
								COMING SOON
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CallToAction;
