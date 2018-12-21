import React, { Component } from "react";
import { connect } from "react-redux";

import Components from "./components/package";
import Enums from "./enums/package";

class Chronos extends Component {
	componentWillUpdate() {
		console.log(this);
	}

	render() {
		return (
			<div>
				<Components.TimeRange mask={ this.props.Timeslot[Enums.Timeslot.Weeks.WEEKLY][Enums.Timeslot.Days.MONDAY] } />
			</div>
		);
	}
}

export default connect(
	(state) => ({
		Timeslot: state.XCH_Timeslot
	})
)(Chronos);