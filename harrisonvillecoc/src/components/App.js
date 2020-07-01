import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home/home";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path={ROUTES.HOME} component={Home} />
				{/* <Route path={ROUTES.GETSTARTED_FORM} component={GetStartedForm} />
				<Route path={ROUTES.FORM_SUCCESS} component={FormSuccess} />
				<Route path={ROUTES.FORM_ERROR} component={ErrorForm} />
				<Route path={ROUTES.BUGREPORTING} component={BugReportingForm} />
				<Route path={ROUTES.PRIVACYPOLICY} component={PrivacyPolicy} /> */}
			</div>
		</Router>
	);
}

export default App;