import React from "react";
import styled, { css } from "styled-components";
import mountains from "../images/mountainScene.jpg";
import "./sectionBreak2.css";

function SectionBreak2() {
	const SubTitle = styled.h3`
		padding: 0%;
		color: #ffffff;
		font-weight: bolder;
	`;

	const Title = styled.h1`
		text-align: center;
		color: #ffffff;
		padding-top: 10%;
		padding-left: 15%;
		padding-right: 15%;
		font-weight: bolder;
	`;
	const Wrapper = styled.section`
		height: 500px;
		width: 100%;
		background-image: url(${mountains});
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-bottom: 2%;
	`;
	function handleClick(e) {
		e.preventDefault();
		document.getElementById("contactForm").scrollIntoView();
	}

	return (
		<Wrapper id="sectionBreak2">
			<Title id="sectionBreak2Title">
				"Jesus saith unto him, I am the way, the truth, and the life: no man
				cometh unto the Father, but by me (John 14:6, KJV).""
			</Title>
			<SubTitle id="sectionBreak2SubTitle">Will you let Jesus be your way in life?</SubTitle>
			<button id="sectionBreak2Button" className="btn btn-primary" onClick={handleClick}>
				Let's Talk
			</button>
		</Wrapper>
	);
}

export default SectionBreak2;
