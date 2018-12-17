import React, { Component } from "react";
import { connect } from "react-redux";

// import AudioTrack from "./util/AudioTrack";
import Actions from "./actions/package";
import Components from "./components/package";
import EnumPlayState from "./enums/PlayState";

class AudioPlayer extends Component {
	componentDidMount() {
		this.props.NewTrack("synth", {
			OnTick: (t) => this.OnTick(t),
			OnEnd: (t) => this.OnEnd(t)
		});
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.PlayerMask !== nextProps.PlayerMask) {
			this.props.AudioTrack.PlayerMaskController(nextProps.PlayerMask);
		}
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
		this.props.PlayState(EnumPlayState.PLAY.Name, ~EnumPlayState.PLAY.Flag);
	}

	render() {
		return (
			<div className="text-center">
				<h2>Sherpa</h2>
				<Components.Timer />
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