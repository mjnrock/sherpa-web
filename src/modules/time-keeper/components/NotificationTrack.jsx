import React, { Component } from "react";
import { connect } from "react-redux";

import NotificationBar from "./NotificationBar";

class NotificationTrack extends Component {
	render() {
		return (
			<div className="row">
				<NotificationBar name={ `Matt` }>
					
				</NotificationBar>
				<NotificationBar name={ `Andrew` }>
					
				</NotificationBar>
				<NotificationBar name={ `Nick` }>
					
				</NotificationBar>
				<NotificationBar name={ `PJ` }>
					
				</NotificationBar>
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