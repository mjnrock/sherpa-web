import React, { Component } from "react";
import { connect } from "react-redux";

import TimeBlock from "./../util/TimeBlock";
import TimeSlot from "./TimeSlot";

class TimeRange extends Component {
	constructor(props) {
		super(props);

		this.state = {
			IsDown: false
		};
	}

	OnMouseDown(e) {
		this.setState({
			...this.state,
			IsDown: true
		});
	}
	OnMouseUp(e) {
		this.setState({
			...this.state,
			IsDown: false
		});
	}

	render() {
		let block = TimeBlock.CreateFromMask(this.props.Timeslot[this.props.week][this.props.day]) || [];

		return (
			<div
				className={ `${ this.props.className ? this.props.className : "mt3" }` }
				style={ this.props.style ? this.props.style : {} }
				onMouseDown={ this.OnMouseDown.bind(this) }
				onMouseUp={ this.OnMouseUp.bind(this) }
			>
				<div
					className="text-center f4"
				>{ this.props.day.replace("XCH_", "").charAt(0) }</div>
				<div>
					{
						block
						? block.map((t, i) => {
							return (
								<TimeSlot
									key={ i }
									week={ this.props.week }
									day={ this.props.day }
									time={ t.Time }
									value={ t.IsOpen }
									nolabel={ this.props.nolabel ? true : false }

									ismousedown={ this.state.IsDown }
								/>
							);
						})
						: null
					}
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		Timeslot: state.XCH_Timeslot
	})
)(TimeRange);