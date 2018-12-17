import React, { Component } from "react";
import { connect } from "react-redux";

import AudioTrack from "./../util/AudioTrack";

class Timer extends Component {
	render() {
		let timer = <div>&nbsp;</div>;
		if(this.props.TrackData) {
			let elapsed = AudioTrack.GetTime(this.props.TrackData.ElapsedTime),
				duration = AudioTrack.GetTime(this.props.TrackData.Duration),
				html = (
					<div
						style={{
							textShadow: "rgba(0,0,0,0.1) 1px 1px"
						}}
					>
						<span>
							<span>{ elapsed.Hour }<span className="b primary">h</span></span>&nbsp;
							<span>{ elapsed.Minute }<span className="b primary">m</span></span>&nbsp;
							<span>{ elapsed.Second }<span className="b primary">s</span></span>
						</span>
						&nbsp;/&nbsp;
						<span>
							<span>{ duration.Hour }<span className="b primary">h</span></span>&nbsp;
							<span>{ duration.Minute }<span className="b primary">m</span></span>&nbsp;
							<span>{ duration.Second }<span className="b primary">s</span></span>
						</span>
					</div>
				);

			timer = html;
		}

		return timer;
	}
}

export default connect(
	(state) => ({
		TrackData: state.TrackData
	})
)(Timer);