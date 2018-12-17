import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./actions/package";
import Components from "./components/package";

class AudioPlayer extends Component {
	componentDidMount() {
		this.props.NewTrack("synth", {
			OnTick: (t) => this.OnTick(t)
		});
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if(this.props.PlayState !== nextProps.PlayState) {
			this.props.AudioTrack.ChangePlayState(nextProps.PlayState);
		}
	}

	OnTick(track) {
		this.props.UpdateElapsedTime(track.GetElapsedTime());
	}

	render() {
		return (
			<div>
				<Components.ControlBar />
			</div>
		);
	}
}

export default connect(
	(state) => ({
		PlayState: state.PlayState,
		AudioTrack: state.AudioTrack,
		TrackData: state.TrackData
	}),
	(dispatch) => ({
		NewTrack: (filename, hooks) => dispatch(Actions.ControlTrack.NewTrack(filename, hooks)),
		UpdateElapsedTime: (time) => dispatch(Actions.ControlTrack.UpdateElapsedTime(time))
	})
)(AudioPlayer);