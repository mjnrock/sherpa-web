import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./../actions/package";
import Enums from "./../enums/package";

class TimeSlot extends Component {
	OnMouseDown(e) {
		let slot = Enums.Timeslot.Slots[this.props.time];

		this.props.Timeslot(
			Enums.Timeslot.Days.MONDAY,
			Enums.Timeslot.Weeks.WEEKLY,
			slot.Tier,
			slot.Flag,
			!this.props.value
		);
	}
	OnMouseOver(e) {
		if(this.props.ismousedown) {
			this.OnMouseDown();
		}
	}

	render() {
		return (
			<div
				time={ this.props.time }
				className={ `row mb1 ` }
				style={{
					userSelect: "none"
				}}
			>
				<span
					className={ `col-2` }
				>{ this.props.time }</span>
				<span
					className={ `col-10 ${ this.props.value === true ? "bg-primary" : "bg-white" }` }
					onMouseOver={ this.OnMouseOver.bind(this) }
					onMouseDown={ this.OnMouseDown.bind(this) }
					value={ this.props.value }
				>&nbsp;</span>
			</div>
		);
	}
}

export default connect(
	null,
	(dispatch) => ({
		Timeslot: (type, week, tier, value, isadd) => dispatch(Actions.Timeslot.Timeslot(type, week, tier, value, isadd))
	})
)(TimeSlot);