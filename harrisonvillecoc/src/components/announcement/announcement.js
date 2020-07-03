import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const Annoucement = () => {
	return (
		<MDBJumbotron
			fluid
			style={{ backgroundColor: "#4169e1" }}
			id="sectionBreak1JumboTron">
			<MDBContainer>
				<h3 className="display-6" style={{ fontWeight: "900", color: "white" }}>
					Harrisonville Church of Christ: Where the Bible is our guide!
				</h3>
			</MDBContainer>
		</MDBJumbotron>
	);
};

export default Annoucement;