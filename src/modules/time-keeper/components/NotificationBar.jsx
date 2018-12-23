import React, { Component } from "react";
import { connect } from "react-redux";

import Notification from "./Notification";

class NotificationBar extends Component {
	render() {
		return (
			<div className="col pa0">
				<div className="pn text-center"
					style={{
						backgroundColor: "rgba(0, 0, 0, .025)"
					}}
				>
					<span className="f1 b"
						style={{
							color: "rgba(0, 0, 0, 0.1)"
						}}
					>{ this.props.name }</span>

					<div>{ this.props.children } </div>
				</div>
			</div>
		);
	}
}

export default connect(
	// null,
	// (dispatch) => ({
	// 	Timeslot: (type, week, tier, value, isadd) => dispatch(Actions.Timeslot.Timeslot(type, week, tier, value, isadd))
	// })
)(NotificationBar);