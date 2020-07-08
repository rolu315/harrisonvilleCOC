import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import "../calltoaction/calltoaction.css";
import AboutUsImg from "../common/images/aboutUs.jpg";
import AboutPreacher from "../common/images/bibleCoffee.png";

function AboutUs() {
	const Title = styled.h4`
		font-weight: bolder;
	`;
	const BulletPoints = styled.li``;
	const UnorderedList = styled.ul`
		display: inline-block;
		text-align: left;
	`;

	const BodyText = styled.p`
		margin-bottom: 2%;
		font-size: 18px;
	`;
	const Img = styled.img`
		margin-bottom: 5%;
	`;

	return (
		<Container id="aboutUs">
			<Img src={AboutUsImg} alt="Man in suit holding About Us sign" />
			<BodyText>
				We believe the easiest, most brief and scriptural way to introduce the
				Harrisonville Church of Christ is found in Ephesians 4:3-6. "Endeavoring
				to keep the unity of the Spirit in the bond of peace. There is one body,
				and one Spirit, even as ye are called in one hope of your calling; One
				Lord, one faith, one baptism, one God and Father of all, who is above
				all, and through all, and in you all (KJV).
			</BodyText>
			<BodyText>
				As a congregation, we are string to keep the unity of the Spirit, in the
				bond of peace. We believe (as stated) there is one body, and that body
				is the church. Paul used the term "body" in Ephesians 4:16 to describe
				the church. He also said God made Christ the head of the church, which
				is His body (Ephesians 1:22-23). So, if there is one body, and the body
				is the church, there is one church. As a body, the church is to: speak
				the same thing; have no division; and be perfectly joined together, in
				the same mind, and same judgement.
			</BodyText>
			<BodyText>
				We believe: there is one Spirit (Holy Spirit); one hope; one Lord
				(Jesus); one faith (body of doctrine). Jude uses the word "faith" in
				this way in Jude 3, where he says "to contend earnestly for the faith."
				There is: one baptism (immersion) and it is necessary for salvation (1
				Peter 3:21); one God, and Father of all.
			</BodyText>
			<Title>
				<strong>Some of the works we are involved in:</strong>
			</Title>

			<UnorderedList>
				<BulletPoints>Bible Classes for all ages</BulletPoints>
				<BulletPoints>Activites for our youth</BulletPoints>
				<BulletPoints>Bible Correspondence Courses</BulletPoints>
				<BulletPoints>Gospel Meetings</BulletPoints>
				<BulletPoints>Congregational Fellowship Meals</BulletPoints>
				<BulletPoints>Variety of events to strengthen our members</BulletPoints>
			</UnorderedList>
			<div>
				<Img
					src={AboutPreacher}
					alt="Coffee and a Bible"
					style={{ marginTop: "2%" }}
				/>
			</div>
			<Title>Bio For Dudley Morton</Title>
			<BodyText>
				I have lived in the Kansas City area all of my life. I am a graduate of
				the Lee’s Summit High School. I was married in 1973, and have four
				daughters, and eight grandchildren. I love gardening, raising chickens,
				and have a few cattle that I like to mess with, which is good, for if I
				had to depend on fishing for food I would starve to death. I have been
				preaching for over thirty-five years, and it has been my pleasure to
				have preached for the Harrisonville Church of Christ for the last ten
				years.
			</BodyText>
		</Container>
	);
}

export default AboutUs;
