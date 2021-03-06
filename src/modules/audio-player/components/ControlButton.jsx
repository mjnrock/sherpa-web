import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./../actions/package";
import Enum from "./../enums/package";

class ControlButton extends Component {
	OnClick(e) {
		this.props.ExecuteCommand(this.props.command);

		if(this.props.command === Enum.TrackCommand.PLAY.Name) {
			this.props.PlayState(Enum.PlayState.PLAY.Name, Enum.PlayState.PLAY.Flag);
		} else if(this.props.command === Enum.TrackCommand.PAUSE.Name) {
			this.props.PlayState(Enum.PlayState.PLAY.Name, ~Enum.PlayState.PLAY.Flag);
		}
	}

	render() {
		return (
			<button
				className={
					`primary ${ 
						this.props.command === Enum.TrackCommand.PLAY.Name || this.props.command === Enum.TrackCommand.PAUSE.Name ? "b" : ""
					}`
				}
				style={{
					border: "none",
					backgroundColor: "transparent",
					cursor: "pointer",
					outline: "none",
					fontSize: this.props.command === Enum.TrackCommand.PLAY.Name || this.props.command === Enum.TrackCommand.PAUSE.Name ? "40px" : "32px"
				}}
				onClick={ this.OnClick.bind(this) }
			>{ this.props.children }</button>
		);
	}
}

export default connect(
	(state) => ({
		TrackCommand: state.XAP_TrackCommand
	}),
	(dispatch) => ({
		ExecuteCommand: (type) => dispatch(Actions.TrackCommand.ExecuteCommand(type)),
		PlayState: (type, value) => dispatch(Actions.PlayState.PlayState(type, value))
	})
)(ControlButton);