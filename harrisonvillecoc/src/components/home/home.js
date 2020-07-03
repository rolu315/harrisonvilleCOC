import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pageheader from "../header/header";
import Pagefooter from "../footer/footer";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import Banner from "../banner/banner";
import Announcement from "../announcement/announcement";
import CallToAction from "../calltoaction/calltoaction";

function Home() {
	return (
		<div className="App">
			<Pageheader />
			<Banner />
			<Announcement />
			<CallToAction />
			<Pagefooter />
			<CookieConsent>
				This website uses cookies to enhance the user experience. Visit our
				&nbsp;
				<Link to="/privacyPolicy">Privacy Policy</Link> for more information.
			</CookieConsent>
		</div>
	);
}

export default Home;