import React, { Component } from "react";
import { connect } from "react-redux";

class TimerBar extends Component {
	render() {
		let rate = 0;
		if(this.props.TrackData) {
			rate = this.props.TrackData.ElapsedTime / this.props.TrackData.Duration;
		}

		return (
			<div
				className="mb3 mt2 br2 bg-moon-gray"
				style={{
					border: "1px rgba(0,0,0,0.15) solid",
					backgroundColor: "rgba(255,255,255,1.0)",
					height: "4px",
					position: "relative"
				}}
			>
				<div
					className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
					style={{
						width: `${ Math.round(rate * 100) }%`,
						height: "15px",
						position: "absolute",
						top: "-6px",
						boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px 0px",
						borderTopLeftRadius: "3px",
						borderBottomLeftRadius: "3px",
						animationDuration: `0.6s`,
						animationTimingFunction: "linear",
						animationDirection: "reverse",
						transitionDuration: "0.3s",
						transitionTimingFunction: "ease"
					}}
				></div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		TrackData: state.TrackData
	})
)(TimerBar);