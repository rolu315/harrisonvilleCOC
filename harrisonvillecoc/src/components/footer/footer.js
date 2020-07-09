import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Pagefooter() {
	return (
		<MDBFooter
			color="stylish-color-dark"
			className="page-footer font-small pt-4 mt-4"
		>
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
							Harrisonville Church of Christ
						</h5>
						<ul className="list-unstyled">
							<li>
								<a href="tel:1-816-887-5857">816-887-5857</a>
							</li>
							<li>
								<a href="https://goo.gl/maps/r7P5HuPSmdFvyEF98">
									27713 MO-7
									<br />
									Harrisonville, MO 64701
								</a>
							</li>
							<li>
								<a href="mailto: office@harrisonvilleCOC.com">
									office@harrisonvilleCOC.com
								</a>
							</li>
						</ul>
					</MDBCol>
					<hr className="clearfix w-100 d-md-none" />
					<MDBCol md="2">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
						<ul className="list-unstyled">
							<li>
								<a href="/#upcomingContainer">Services</a>
							</li>
							<li>
								<a href="/#aboutUs">About Us</a>
							</li>
							<li>
								<a href="/articles">Articles</a>
							</li>
							<li>
								<a href="#contactForm">Let's Talk</a>
							</li>
							<li>
								<a href="/privacyPolicy">Privacy Policy</a>
							</li>
							<li>
								<a href="/bibleCorrespondenceCourse">Bible Correspondence Course</a>
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
