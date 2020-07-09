import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import * as firebase from "firebase";
import "firebase/database";
import Firebase from "../firebase/firebase";
import styled from "styled-components";

import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
} from "mdbreact";

function Articles() {
	const [posts, setPosts] = React.useState([]);
	const [newPostName, setPostName] = React.useState();

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection("posts").get();
			setPosts(data.docs.map(doc => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<>{posts.map(post => (
			<ul>
				<li key={post.title}>{post.title}</li>
				<li key={post.date}>{post.date}</li>
				<li key={post.para1}>{post.para1}</li>
				<li key={post.para2}>{post.para2}</li>
				<li key={post.para3}>{post.para3}</li>
				<li key={post.conclusion}>{post.conclusion}</li>
			</ul>))}
		</>
	);
}
export default Articles;
