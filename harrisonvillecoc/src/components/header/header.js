import React from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBIcon,
} from "mdbreact";
import Logo from "../common/images/fav.png";
import { Nav } from "react-bootstrap";
import "../header/header.css";

class Pageheader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse,
		});
	}

	render() {
		const container = { height: 1300 };
		return (
			<div>
				<header>
					<MDBNavbar color="black" dark expand="md" fixed="top">
						<MDBNavbarBrand href="/">
							<img
								src={Logo}
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="rl3Inspired Logo"
							/>
						</MDBNavbarBrand>
						<MDBNavbarToggler onClick={this.onClick} />
						<MDBCollapse isOpen={this.state.collapse} navbar>
							<MDBNavbarNav left>
								<Nav>
									<Nav.Link id="home" href="/#sectionBreak1JumboTron">
										Home
									</Nav.Link>
									<Nav.Link href="/#upcomingContainer">Home</Nav.Link>
									<Nav.Link href="/#ourProjects">Service Times</Nav.Link>
									<Nav.Link href="/#ourTeam">About Us</Nav.Link>
									<Nav.Link href="/#feedback">Articles</Nav.Link>
									<Nav.Link href="/#contactForm">Let's Talk!</Nav.Link>
								</Nav>
							</MDBNavbarNav>
							<MDBNavbarNav right id="socialMediaIcons">
								<MDBNavItem>
									<Nav.Link
										href="https://instagram.com/robertlukenbill"
										target="_blank"
										rel="noopener noreferrer">
										<MDBIcon fab icon="instagram" />
									</Nav.Link>
								</MDBNavItem>
								<MDBNavItem>
									<Nav.Link
										href="https://twitter.com/rl3inspired"
										target="_blank"
										rel="noopener noreferrer">
										<MDBIcon fab icon="twitter" />
									</Nav.Link>
								</MDBNavItem>
								<MDBNavItem>
									<Nav.Link
										href="https://facebook.com"
										target="_blank"
										rel="noopener noreferrer">
										<MDBIcon fab icon="facebook-f" />
									</Nav.Link>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBNavbar>
				</header>
			</div>
		);
	}
}
export default Pageheader;