import React, { Component } from "react";
import { connect } from "react-redux";

import Bitwise from "./../util/Bitwise";
import Enum from "./../enums/package";
import ControlButton from "./ControlButton";

class ControlBar extends Component {
	render() {
		return (
			<div className="flex items-center justify-center">
				<div className="flex items-center justify-about">
					<ControlButton className="btn btn-outline-primary" command={ Enum.TrackCommand.SKIP_BACKWARD.Name }>
						<i className={ Enum.TrackCommand.SKIP_BACKWARD.Icon }></i>
					</ControlButton>
					<ControlButton className="btn btn-outline-primary" command={ Enum.TrackCommand.SEEK_BACKWARD.Name }>
						<i className={ Enum.TrackCommand.SEEK_BACKWARD.Icon }></i>
					</ControlButton>
					{
						Bitwise.Has(this.props.PlayerMask, Enum.PlayState.PLAY.Flag)
						? <ControlButton className="btn btn-outline-primary" command={ Enum.TrackCommand.PAUSE.Name }>
							<i className={ Enum.TrackCommand.PAUSE.Icon }></i>
						</ControlButton>
						: <ControlButton className="btn btn-outline-primary" command={ Enum.TrackCommand.PLAY.Name }>
							<i className={ Enum.TrackCommand.PLAY.Icon }></i>
						</ControlButton>
					}
					<ControlButton className="btn btn-outline-primary" command={ Enum.TrackCommand.SEEK_FORWARD.Name }>
						<i className={ Enum.TrackCommand.SEEK_FORWARD.Icon }></i>
					</ControlButton>
					<ControlButton className="btn btn-outline-primary" command={ Enum.TrackCommand.SKIP_FORWARD.Name }>
						<i className={ Enum.TrackCommand.SKIP_FORWARD.Icon }></i>
					</ControlButton>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		PlayerMask: state.XAP_PlayerMask
	})
)(ControlBar);