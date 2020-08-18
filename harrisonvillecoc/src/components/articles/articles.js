import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import styled from "styled-components";
import Pageheader from "../header/header";
import Pagefooter from "../footer/footer";
import LargeLogo from "../common/images/HarrisonvilleLogoFullSize.png";
import "./articles.css";
import Posts from "./posts";

function Articles() {
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

	return (
		<>
			<Pageheader />
			<Img id="articlesLogo" src={LargeLogo} alt="Large Harrisonville Church of Christ Logo" />
			<Posts />
			<Pagefooter />
		</>
	);
}
export default Articles;
