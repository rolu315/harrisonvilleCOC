import React from "react";
import "./footer.css";
import ScrollUpButton from "react-scroll-up-button";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Pagefooter() {
	return (
		<MDBFooter
			color="stylish-color-dark"
			className="page-footer font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
							rl3Inspired Technology
						</h5>
						<ul className="list-unstyled">
							<li>
								<a href="tel:1-816-745-0489">816-745-0489</a>
							</li>
							<li>
								<a href="mailto: robert@rl3inspired.com">
									robert@rl3Inspired.com
								</a>
							</li>
						</ul>
					</MDBCol>
					<hr className="clearfix w-100 d-md-none" />
					<MDBCol md="2">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#upcomingContainer">What We Do</a>
							</li>
							<li>
								<a href="#ourProjects">Projects</a>
							</li>
							<li>
								<a href="#feedback">Feedback</a>
							</li>
							<li>
								<a href="#contactForm">Let's Talk!</a>
							</li>
							<li>
								<a href="/privacyPolicy">Privacy Policy</a>
							</li>
						</ul>
					</MDBCol>
					<hr className="clearfix w-100 d-md-none" />
				</MDBRow>
			</MDBContainer>
			<hr />
			<div className="text-center py-3">
				<ul className="list-unstyled list-inline mb-0">
					<li className="list-inline-item">
						<h5 className="mb-1">Report issues here</h5>
					</li>
					<li className="list-inline-item">
						<a href="/bugReporting" className="btn btn-danger btn-rounded">
							Bug Reporting
						</a>
					</li>
				</ul>
			</div>
			<hr />
			<div className="text-center">
				<ul className="list-unstyled list-inline">
					<li className="list-inline-item">
						<a
							className="btn-floating btn-sm btn-instagram mx-1"
							href="https://www.instagram.com/robertlukenbill"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-instagram"> </i>
						</a>
					</li>
					<li className="list-inline-item">
						<a
							className="btn-floating btn-sm btn-tw mx-1"
							href="https://www.twitter.com/rl3inspired"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-twitter"> </i>
						</a>
					</li>
					<li className="list-inline-item">
						<a
							className="btn-floating btn-sm btn-fb mx-1"
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-facebook-f"> </i>
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://www.rl3inspired.com"> rl3Inspired Technology </a>
				</MDBContainer>
			</div>
			<ScrollUpButton />
		</MDBFooter>
	);
}

export default Pagefooter;