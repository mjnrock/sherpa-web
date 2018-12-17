import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./../actions/package";
import EnumTrackCommand from "./../enums/TrackCommand";

class ControlButton extends Component {
	OnClick(e) {
		this.props.ExecuteCommand(this.props.command);

		if(this.props.command === EnumTrackCommand.PLAY.Name) {
			this.props.PlayState(true);
		}
		if(this.props.command === EnumTrackCommand.PAUSE.Name) {
			this.props.PlayState(false);
		}
	}

	render() {
		return (
			<button
				className={ this.props.className ? this.props.className : "btn btn-default btn-block" }
				onClick={ this.OnClick.bind(this) }
			>{ this.props.children }</button>
		);
	}
}

export default connect(
	(state) => ({
		TrackCommand: state.TrackCommand
	}),
	(dispatch) => ({
		ExecuteCommand: (type) => dispatch(Actions.TrackCommand.ExecuteCommand(type)),
		PlayState: (value) => dispatch(Actions.PlayState.PlayState(value))
	})
)(ControlButton);