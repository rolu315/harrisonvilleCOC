import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
