import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import * as firebase from "firebase";
import "firebase/database";
import Firebase from "../firebase/firebase";
import styled from "styled-components";
import Pageheader from "../header/header";
import Pagefooter from "../footer/footer";
import LargeLogo from "../common/images/HarrisonvilleLogoFullSize.png";
import "./articles.css";

function Articles() {
	const Unordered = styled.ul`
		text-decoration: none;
	`;
	const ListItem = styled.li`
	text-decoration: none`;
	const Img = styled.img`
		margin-top: 5%;
		width: 25%;
	`;
	const BodyText = styled.p`
		margin-bottom: 2%;
		margin-left: 10%;
		margin-right: 10%;
		text
		font-size: 18px;
	`;
	const Title = styled.h4`
		font-weight: bolder;
		font-size: 2em;
	`;
	const HardLine = styled.hr`
	margin-bottom: 5%`;

	const [posts, setPosts] = React.useState([]);
	const [newPostName, setPostName] = React.useState();

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection("posts").get();
			setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		};
		fetchData();
	}, []);

	return (
		<>{posts.map(post => (
			<>
				<Pageheader />
				<Img id="articlesLogo" src={LargeLogo} alt="Large Harrisonville Church of Christ Logo" />
				<Title key={post.title}>{post.title}</Title>
				<BodyText key={post.date}>{post.date}</BodyText>
				<BodyText key={post.para1}>{post.para1}</BodyText>
				<BodyText key={post.para2}>{post.para2}</BodyText>
				<BodyText key={post.para3}>{post.para3}</BodyText>
				<BodyText key={post.conclusion}>{post.conclusion}</BodyText>
				<HardLine />
				<Pagefooter />
			</>))}
		</>
	);
}
export default Articles;
