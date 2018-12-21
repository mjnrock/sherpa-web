import React, { Component } from "react";

import TimeBlock from "./../util/TimeBlock";
import TimeSlot from "./TimeSlot";

import TimeMask from "./../util/TimeMask";

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
		let block = TimeBlock.CreateFromMask(this.props.mask) || false;

		return (
			<div
				className={ `mt3 row` }
				onMouseDown={ this.OnMouseDown.bind(this) }
				onMouseUp={ this.OnMouseUp.bind(this) }
			>
				<div className="col-12">
					{
						block
						? block.map((t, i) => {
							return (
								<TimeSlot
									key={ i }
									time={ t.Time }
									value={ t.IsOpen }

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

export default TimeRange;