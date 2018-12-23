import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Modules from "./../modules/package";

class Podcast extends Component {
	componentDidMount() {
		window.addEventListener("keyup", this.OnKeyUp.bind(this), false);
		document.addEventListener("keyup", this.OnKeyUp.bind(this), false);
		console.log(Modules);
	}

	OnKeyUp(e) {
		if(e.ctrlKey === true && e.altKey === true) {
			if(+e.which === 32)	{		// SPACE
				// if(this.props.TrackCommand === Modules.AudioPlayer.Enum.TrackCommand.PLAY.Name) {
				// 	if(Modules.AudioPlayer.Utility.Bitwise.Has(this.props.PlayerMask, Modules.AudioPlayer.Enum.PlayState.PLAY.Flag)) {
				// 		this.props.PlayState(Modules.AudioPlayer.Enum.PlayState.PLAY.Name, ~Modules.AudioPlayer.Enum.PlayState.PLAY.Flag);
				// 	} else {
				// 		this.props.ExecuteCommand(Modules.AudioPlayer.Enum.TrackCommand.PLAY.Name);
				// 		this.props.PlayState(Modules.AudioPlayer.Enum.PlayState.PLAY.Name, Modules.AudioPlayer.Enum.PlayState.PLAY.Flag);
				// 	}
				// }
				//	Show a fading indicator that this was pressed
			} else if(+e.which === 37)	{		// LEFT ARROW
				this.props.ExecuteCommand(Modules.AudioPlayer.Enum.TrackCommand.SEEK_BACKWARD.Name);
				//	Show a fading indicator that this was pressed
			} else if(+e.which === 39)	{		// RIGHT ARROW
				this.props.ExecuteCommand(Modules.AudioPlayer.Enum.TrackCommand.SEEK_FORWARD.Name);
				//	Show a fading indicator that this was pressed
			}
		}
	}

	render() {
		return (			
			<div className="container">			
				<nav className="navbar">
					<Link className="navbar-brand" to="/">Home</Link>
					<Link className="navbar-link" to="/podcast">Podcast</Link>
					<Link className="navbar-link" to="/v1">V1</Link>
				</nav>

				<Modules.AudioPlayer.AudioPlayer Title="Track Title" Filename="synth" />
				{
					this.props.IsCommentVisible
					? <Modules.Comment.Comment />
					: <button
						className="btn btn-primary btn-block btn-sm"
						onClick={ () => this.props.OnToggleCommentVisibility(true) }
					>Add Comment</button>
				}
				<Modules.TimeKeeper.TimeKeeper />
				{/* <Modules.Chronos.Chronos /> */}
			</div>
		);
	}
}

export default connect(
	(state) => ({
		PlayerMask: state.XAP_PlayerMask,
		TrackCommand: state.XAP_TrackCommand,
		TrackData: state.XAP_TrackData,
		IsCommentVisible: state.XXC_CommentVisibility
	}),
	(dispatch) => ({
		ExecuteCommand: (type) => dispatch(Modules.AudioPlayer.Actions.TrackCommand.ExecuteCommand(type)),
		PlayState: (type, value) => dispatch(Modules.AudioPlayer.Actions.PlayState.PlayState(type, value)),
		OnToggleCommentVisibility: (value) => dispatch(Modules.Comment.Actions.CommentVisibility.CommentVisibility(value))
	})
)(Podcast);