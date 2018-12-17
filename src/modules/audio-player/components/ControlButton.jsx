import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./../actions/package";

class ControlButton extends Component {
	render() {
		return (
			<button
				className={ this.props.className ? this.props.className : "btn btn-default btn-block" }
				onClick={ () => this.props.ExecuteCommand(this.props.command) }
			>{ this.props.children }</button>
		);
	}
}

export default connect(
	(state) => ({
		PlayState: state.PlayState
	}),
	(dispatch) => ({
		ExecuteCommand: (type) => dispatch(Actions.PlayState.ExecuteCommand(type)),
	})
)(ControlButton);