import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ChurchBuilding from "../common/images/HarrisonvilleChurchBuilding2.PNG";
import BibleStudy from "../common/images/BibleLakeBackground.jpg";
import ChurchSign from "../common/images/HarrisonvilleChurchSign.PNG";
import styled, { css } from "styled-components";
import MediaQuery from "react-responsive";

function CompanyBanner() {
	const StyledImg = styled.img`
		width: 100%;
		height: 768px;
	`;
	const Title = styled.h1`
		color: #000;
		text-shadow: 2px 2px #ff0000;
		font-weight: 900;
	`;
	const Title2 = styled.h1`
		color: #fff;
		text-shadow: 2px 2px #ff0000;
		font-weight: 900;
	`;

	return (
		<div className="home">
			<MediaQuery minDeviceWidth={1224}>
				<div className="banner-area" id="home">
					<Carousel controls={false} interval={4000}>
						<Carousel.Item>
							<StyledImg
								src={ChurchBuilding}
								alt="Harrisonville Church of Christ Building"
							/>
							<Carousel.Caption>
								<Title>
									"Salute one another with an holy kiss. The churches of Christ
									salute you (Romans 16:16, KJV)."
								</Title>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<StyledImg src={BibleStudy} alt="Bible Study by the Lake" />
							<Carousel.Caption>
								<Title2>
									“Study to show thyself approved unto God, a workman that
									needeth not to be ashamed, rightly dividing the word of truth
									(2 Timothy 3:16, KJV)."
								</Title2>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<StyledImg
								src={ChurchSign}
								alt="Harrisonville Church of Christ Sign"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</MediaQuery>
		</div>
	);
}

export default CompanyBanner;