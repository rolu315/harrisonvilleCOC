import React from "react";
import styled, { css } from "styled-components";
import mountains from "../images/mountainScene.jpg";

function SectionBreak2() {
	const Button = styled.button``;
	const SubTitle = styled.h3`
		padding: 0%;
		color: #fff;
	`;

	const Title = styled.h1`
		text-align: center;
		color: #fff;
		padding-top: 10%;
	`;
	const Wrapper = styled.section`
		height: 500px;
		width: 100%;
		background-image: url(${mountains});
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-bottom: 2%;
	`;

	return (
		<Wrapper>
			<Title>
				"Jesus saith unto him, I am the way, the truth, and the life: no man
				cometh unto the Father, but by me (John 14:6, KJV).""
			</Title>
			<SubTitle>Will you let Jesus be your way in life?</SubTitle>
			<Button></Button>
		</Wrapper>
	);
}

export default SectionBreak2;
