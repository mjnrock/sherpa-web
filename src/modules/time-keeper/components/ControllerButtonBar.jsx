import React, { Component } from "react";
import { connect } from "react-redux";

import ControllerButton from "./ControllerButton";

class ControllerButtonBar extends Component {
	render() {
		return (
			<div className="col-12 flex items-center justify-around mt1 mb1">
			{
				this.props.buttons.map((b, i) => <ControllerButton key={ i } label={ b[0] } emoji={ b[1] } />)
			}
			</div>
		);
	}
}

export default connect(
	// null,
	// (dispatch) => ({
	// 	Timeslot: (type, week, tier, value, isadd) => dispatch(Actions.Timeslot.Timeslot(type, week, tier, value, isadd))
	// })
)(ControllerButtonBar);