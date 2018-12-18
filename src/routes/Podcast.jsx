import React, { Component } from "react";
import { connect } from "react-redux";

import Modules from "./../modules/package";

class Podcast extends Component {
	render() {
		return (			
			<div className="container">
                <div className="row">
                    <div className="col-6 offset-sm-3">						
                        <Modules.AudioPlayer.AudioPlayer Title="Track Title" Filename="synth" />
						{
							this.props.IsCommentVisible
							? <Modules.Comment.Comment />
							: <button
								className="btn btn-primary btn-block btn-sm"
								onClick={ () => this.props.OnToggleCommentVisibility(true) }
							>Add Comment</button>
						}
                    </div>
                </div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		TrackData: state.XAP_TrackData,
		IsCommentVisible: state.XXC_CommentVisibility
	}),
	(dispatch) => ({
		OnToggleCommentVisibility: (value) => dispatch(Modules.Comment.Actions.CommentVisibility.CommentVisibility(value))
	})
)(Podcast);