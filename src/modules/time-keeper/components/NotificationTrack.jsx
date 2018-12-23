import React, { Component } from "react";
import { connect } from "react-redux";

import NotificationBar from "./NotificationBar";

class NotificationTrack extends Component {
	render() {
		return (
			<div className="row">
				<NotificationBar name={ `Matt` } />
				<NotificationBar name={ `Andrew` } />
				<NotificationBar name={ `Nick` } />
				<NotificationBar name={ `PJ` } />
			</div>
		);
	}
}

export default connect(
	// null,
	// (dispatch) => ({
	// 	Timeslot: (type, week, tier, value, isadd) => dispatch(Actions.Timeslot.Timeslot(type, week, tier, value, isadd))
	// })
)(NotificationTrack);