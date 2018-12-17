import React, { Component } from "react";
import { connect } from "react-redux";

import EnumTrackCommand from "./../enums/TrackCommand";
import ControlButton from "./ControlButton";

class ControlBar extends Component {
	render() {
		return (
			<div>
				<div className="btn-group">
					<ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.SKIP_BACKWARD.Name }>
						<i className={ EnumTrackCommand.SKIP_BACKWARD.Icon }></i>
					</ControlButton>
					<ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.SEEK_BACKWARD.Name }>
						<i className={ EnumTrackCommand.SEEK_BACKWARD.Icon }></i>
					</ControlButton>
					{
						this.props.IsPlaying === true
						? <ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.PAUSE.Name }>
							<i className={ EnumTrackCommand.PAUSE.Icon }></i>
						</ControlButton>
						: <ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.PLAY.Name }>
							<i className={ EnumTrackCommand.PLAY.Icon }></i>
						</ControlButton>
					}
					<ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.SEEK_FORWARD.Name }>
						<i className={ EnumTrackCommand.SEEK_FORWARD.Icon }></i>
					</ControlButton>
					<ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.SKIP_FORWARD.Name }>
						<i className={ EnumTrackCommand.SKIP_FORWARD.Icon }></i>
					</ControlButton>
				</div>
				<div className="btn-group ml1">				
					<ControlButton className="btn btn-outline-primary" command={ EnumTrackCommand.LOOP.Name }>
						<i className={ EnumTrackCommand.LOOP.Icon }></i>
					</ControlButton>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		IsPlaying: state.IsPlaying
	})
)(ControlBar);