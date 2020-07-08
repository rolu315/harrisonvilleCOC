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
import Logo from "../common/images/HarrisonvilleLogo.png";
import { Nav } from "react-bootstrap";

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
									<Nav.Link href="/#upcomingContainer">Service Times</Nav.Link>
									<Nav.Link href="/#aboutUs">About Us</Nav.Link>
									<Nav.Link href="/articles">Articles</Nav.Link>
									<Nav.Link href="/#contactForm">Let's Talk!</Nav.Link>
								</Nav>
							</MDBNavbarNav>
						</MDBCollapse>
					</MDBNavbar>
				</header>
			</div>
		);
	}
}
export default Pageheader;
