import React, { Component } from "react";
import { connect } from "react-redux";

class Notification extends Component {
	render() {
		return (
			<span
				className="f1"
				role="img"
			>&#128226;</span>
		);
	}
}

export default connect(
	// null,
	// (dispatch) => ({
	// 	Timeslot: (type, week, tier, value, isadd) => dispatch(Actions.Timeslot.Timeslot(type, week, tier, value, isadd))
	// })
)(Notification);