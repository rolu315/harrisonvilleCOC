import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import styled from "styled-components";
import Pageheader from "../header/header";
import Pagefooter from "../footer/footer";
import LargeLogo from "../common/images/HarrisonvilleLogoFullSize.png";
import "./articles.css";

function Posts() {
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
            const data = await db.collection("posts").orderBy('date').get();
            setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    return (
        <>
            {posts.map(post => (
                <>
                    <Title key={post.title}>{post.title}</Title>
                    <BodyText key={post.date}>{post.date}</BodyText>
                    <BodyText key={post.para1}>{post.para1}</BodyText>
                    <BodyText key={post.para2}>{post.para2}</BodyText>
                    <BodyText key={post.para3}>{post.para3}</BodyText>
                    <BodyText key={post.conclusion}>{post.conclusion}</BodyText>
                    <HardLine></HardLine>
                </>
            ))}
        </>
    );
}
export default Posts;
