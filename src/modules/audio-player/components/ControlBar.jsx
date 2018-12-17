import React, { Component } from "react";
import { connect } from "react-redux";

import PlayState from "./../enums/PlayState";
import ControlButton from "./ControlButton";

class ControlBar extends Component {
	render() {
		return (
			<div className="btn-group">
				<ControlButton className="btn btn-outline-primary" command={ PlayState.SKIP_BACKWARD.Type }>
					<i className={ PlayState.SKIP_BACKWARD.Icon }></i>
				</ControlButton>
				<ControlButton className="btn btn-outline-primary" command={ PlayState.SEEK_BACKWARD.Type }>
					<i className={ PlayState.SEEK_BACKWARD.Icon }></i>
				</ControlButton>
				{
					this.props.PlayState === PlayState.PLAY.Type
					? <ControlButton className="btn btn-outline-primary" command={ PlayState.PAUSE.Type }>
						<i className={ PlayState.PAUSE.Icon }></i>
					</ControlButton>
					: <ControlButton className="btn btn-outline-primary" command={ PlayState.PLAY.Type }>
						<i className={ PlayState.PLAY.Icon }></i>
					</ControlButton>
				}
				<ControlButton className="btn btn-outline-primary" command={ PlayState.SEEK_FORWARD.Type }>
					<i className={ PlayState.SEEK_FORWARD.Icon }></i>
				</ControlButton>
				<ControlButton className="btn btn-outline-primary" command={ PlayState.SKIP_FORWARD.Type }>
					<i className={ PlayState.SKIP_FORWARD.Icon }></i>
				</ControlButton>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		PlayState: state.PlayState
	})
)(ControlBar);