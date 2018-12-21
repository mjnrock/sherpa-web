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
			<div className="row">
				<Components.TimeRangeLabel
					className="mt3"
					style={{
						width: "12.5%"
					}}
				/>
				{
					Object.entries(Enums.Timeslot.Days).map((v, i) => {
						return (
							<Components.TimeRange
								key={ i }
								className="mt3"
								style={{
									width: "12.5%"
								}}
								week={ Enums.Timeslot.Weeks.WEEKLY }
								day={ Enums.Timeslot.Days[v[0]] }
							/>
						);
					})
				}
			</div>
		);
	}
}

export default connect(
	(state) => ({
		Timeslot: state.XCH_Timeslot
	})
)(Chronos);