import React, { Component } from "react";
import { connect } from "react-redux";

import AudioTrack from "./util/AudioTrack";
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
		let timer = null;
		if(this.props.TrackData) {
			let elapsed = AudioTrack.GetTime(this.props.TrackData.ElapsedTime),
				duration = AudioTrack.GetTime(this.props.TrackData.Duration),
				html = (
					<span>
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
					</span>
				);

			timer = html;
		}

		return (
			<div className="text-center">
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