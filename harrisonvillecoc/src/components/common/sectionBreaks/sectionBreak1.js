import React from "react";
import styled, { css } from "styled-components";
import garden from "../images/gardenGethsemane.jpg";

function SectionBreak1() {
	const Button = styled.button``;
	const SubTitle = styled.h3``;

	const Title = styled.h1`
		text-align: center;
		color: #000;
	`;

	const Wrapper = styled.section`
		height: 500px;
		width: 100%;
		background-image: url(${garden});
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-bottom: 2%;
	`;

	return (
		<div>
			<Wrapper id="sectionBreak1"></Wrapper>
		</div>
	);
}

export default SectionBreak1;
