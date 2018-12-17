import React, { Component } from "react";
import { connect } from "react-redux";

import AudioTrack from "./util/AudioTrack";
import Actions from "./actions/package";
import Components from "./components/package";

class AudioPlayer extends Component {
	componentDidMount() {
		this.props.NewTrack("synth", {
			OnTick: (t) => this.OnTick(t),
			OnEnd: (t) => this.OnEnd(t)
		});
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if(this.props.TrackCommand !== nextProps.TrackCommand) {
			this.props.AudioTrack.ChangeTrackCommand(nextProps.TrackCommand);
		}
	}

	OnTick(track) {
		this.props.UpdateTrackData({
			Duration: track.GetDuration(),
			ElapsedTime: track.GetElapsedTime()
		});
	}
	OnEnd(track) {
		this.props.UpdateTrackData({
			Duration: track.GetDuration(),
			ElapsedTime: 0
		});
		this.props.PlayState(false);
	}

	render() {
		return (
			<div>
				<div className="text-center">
				{
					this.props.TrackData
					? `${ AudioTrack.FormatTime(this.props.TrackData.ElapsedTime) } / ${ AudioTrack.FormatTime(this.props.TrackData.Duration) }`
					: "00:00:00 / 00:00:00"
				}
				</div>
				<Components.ControlBar />
			</div>
		);
	}
}

export default connect(
	(state) => ({
		TrackCommand: state.TrackCommand,
		AudioTrack: state.AudioTrack,
		TrackData: state.TrackData
	}),
	(dispatch) => ({
		NewTrack: (filename, hooks) => dispatch(Actions.ControlTrack.NewTrack(filename, hooks)),
		UpdateTrackData: (time) => dispatch(Actions.ControlTrack.UpdateTrackData(time)),
		PlayState: (value) => dispatch(Actions.PlayState.PlayState(value))
	})
)(AudioPlayer);