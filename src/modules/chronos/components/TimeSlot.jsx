import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./../actions/package";
import Enums from "./../enums/package";

class TimeSlot extends Component {
	OnMouseDown(e) {
		let slot = Enums.Timeslot.Slots[this.props.time];

		this.props.Timeslot(
			this.props.day,
			this.props.week,
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
				className={ `row` }
				style={{
					userSelect: "none"
				}}
			>
				<span
					className={ `col-12 ${ this.props.value === true ? "bg-primary" : "bg-white" }` }
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