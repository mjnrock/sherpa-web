import React, { Component } from "react";
import { connect } from "react-redux";

import Modules from "../modules/package";

class Controller extends Component {
	render() {
		return (			
			<div className="container">					
				<Modules.TimeKeeper.Components.Controller />
			</div>
		);
	}
}

export default connect()(Controller);