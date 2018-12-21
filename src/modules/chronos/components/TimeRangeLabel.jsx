import React, { Component } from "react";

import EnumTimeslot from "./../enums/Timeslot";

class TimeRangeLabel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Time: Object.keys(EnumTimeslot.Slots).map(v => v.replace(/"/gi, ""))
		};
	}

	render() {
		return (
			<div
				className={ `${ this.props.className ? this.props.className : "mt3" }` }
				style={ this.props.style ? this.props.style : {} }
			>
				<div
					className="text-center f4"
				>TIMES</div>
				<div>
					{
						this.state.Time
						? this.state.Time.map((k, i) => {
							return (
								<div
									className={ `row text-center ` }
									style={{
										userSelect: "none"
									}}
									key={ i }
								>
									<span className="col-12">{ k }</span>
								</div>
							);
						})
						: null
					}
				</div>
			</div>
		);
	}
}

export default TimeRangeLabel;