import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home/home";
import BibleCorrespondenceCourse from "./forms/bibleCorrespondenceCourse";
import ErrorForm from "./forms/errorForm";
import FormSuccess from "./forms/successForm";
import BugReportingForm from "./forms/bugReporting";
import PrivacyPolicy from "./common/privacyPolicy/privacyPolicy";
import ScrollToTop from "./common/scrollToTop/scrollToTop";
import Articles from "./articles/articles";
import SignInPage from "./adminPortal/signIn/signIn";

function App() {
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route
						path={ROUTES.BIBLE_CORRESPONDENCE_COURSE}
						component={BibleCorrespondenceCourse}
					/>
					<Route path={ROUTES.FORM_ERROR} component={ErrorForm} />
					<Route path={ROUTES.FORM_SUCCESS} component={FormSuccess} />
					<Route path={ROUTES.BUGREPORTING} component={BugReportingForm} />
					<Route path={ROUTES.PRIVACYPOLICY} component={PrivacyPolicy} />
					<Route path={ROUTES.ARTICLES} component={Articles} />
					<Route path={ROUTES.SIGN_IN} component={SignInPage} />
				</div>
			</ScrollToTop>
		</Router>
	);
}

export default App;
