import React, { Component } from "react";
import { connect } from "react-redux";

// import AudioTrack from "./util/AudioTrack";
import Actions from "./actions/package";
import Components from "./components/package";
import Enum from "./enums/package";

class AudioPlayer extends Component {
	componentDidMount() {
		this.props.NewTrack(this.props.Filename, {
			OnTick: (t) => this.OnTick(t),
			OnEnd: (t) => this.OnEnd(t),
			OnSeek: (t) => this.OnSeek(t)
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

	OnSeek(track) {
		this.props.ExecuteCommand(Enum.TrackCommand.PLAY.Name);
		this.OnTick(track);
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
				>{ this.props.Title || "Sherpa"}</h2>
				<Components.Timer />
				<Components.TimerBar />
				<Components.ControlBar />
			</div>
		);
	}
}

export default connect(
	(state) => ({
		TrackCommand: state.XAP_TrackCommand,
		AudioTrack: state.XAP_AudioTrack,
		TrackData: state.XAP_TrackData,
		PlayerMask: state.XAP_PlayerMask
	}),
	(dispatch) => ({
		ExecuteCommand: (type) => dispatch(Actions.TrackCommand.ExecuteCommand(type)),
		NewTrack: (filename, hooks) => dispatch(Actions.ControlTrack.NewTrack(filename, hooks)),
		UpdateTrackData: (time) => dispatch(Actions.ControlTrack.UpdateTrackData(time)),
		PlayState: (type, value) => dispatch(Actions.PlayState.PlayState(type, value))
	})
)(AudioPlayer);