import React, { Component } from "react";
import { connect } from "react-redux";

// import AudioTrack from "./util/AudioTrack";
import Actions from "./actions/package";
import Components from "./components/package";
import Enum from "./enums/package";

class AudioPlayer extends Component {
	componentDidMount() {
		this.props.NewTrack("synth", {
			OnTick: (t) => this.OnTick(t),
			OnEnd: (t) => this.OnEnd(t),
			OnSeek: (t) => this.OnTick(t)	// Not a typo, just being lazy
		});
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.PlayerMask !== nextProps.PlayerMask) {
			this.props.AudioTrack.PlayerMaskController(nextProps.PlayerMask);
		}

		//TODO Currently this prevents pressing the same button multiple times in a row
			//!	This doesn't work:	if(this.props.AudioTrack && ![Enum.TrackCommand.PLAY.Name, Enum.TrackCommand.PAUSE.Name].includes(nextProps.TrackCommand)) {
			//	It calls the action like 10 times in a row and exhausts the track duration
		//TODO You could maybe just count the amount of clicks each button has into the state and use that as a guide?
		if(this.props.TrackCommand !== nextProps.TrackCommand) {
			this.props.AudioTrack.TrackCommandController(nextProps.TrackCommand);
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
		this.props.PlayState(Enum.PlayState.PLAY.Name, ~Enum.PlayState.PLAY.Flag);
	}

	render() {
		return (
			<div className="text-center col-6 offset-sm-3">
				<h2
					style={{
						textShadow: "rgba(0,0,0,0.1) 2px 1px"
					}}
				>Sherpa</h2>
				<Components.Timer />
				<Components.TimerBar />
				<Components.ControlBar />
			</div>
		);
	}
}

export default connect(
	(state) => ({
		TrackCommand: state.TrackCommand,
		AudioTrack: state.AudioTrack,
		TrackData: state.TrackData,
		PlayerMask: state.PlayerMask
	}),
	(dispatch) => ({
		NewTrack: (filename, hooks) => dispatch(Actions.ControlTrack.NewTrack(filename, hooks)),
		UpdateTrackData: (time) => dispatch(Actions.ControlTrack.UpdateTrackData(time)),
		PlayState: (type, value) => dispatch(Actions.PlayState.PlayState(type, value))
	})
)(AudioPlayer);