import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pageheader from "../header/header";
import CompanyBanner from "../companyBanner/companyBanner";
import Pagefooter from "../footer/footer";
import Announcements from "../announcements/announcements";
import OurProjects from "../ourProjects/ourProjects";
import CompanyCTA1 from "../common/callToAction/callToAction_1";
import CompanyCTA2 from "../common/callToAction/callToAction2";
import Feedback from "../feedback/feedback";
import ContactForm from "../contactForm/contactForm";
import SectionBreak1 from "../common/sectionBreak/sectionBreak1";
import SectionBreak2 from "../common/sectionBreak/sectionBreak2";
import TeamPage from "../team/team";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="App">
			<Pageheader />
			<CompanyBanner />
			<SectionBreak1 />
			<Announcements />
			<CompanyCTA2 />
			<OurProjects />
			<CompanyCTA1 />
			<TeamPage />
			<Feedback />
			<SectionBreak2 />
			<ContactForm />
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