import React, { Component } from "react";
import { connect } from "react-redux";

import Components from "./components/package";
import MarkdownField from "./../form/MarkdownField";

import Actions from "./actions/package";

class Comment extends Component {
	render() {
		return (
			<div className="col-6 offset-sm-3">
				<Components.AudioTimer />

				<MarkdownField SaveValue={ this.props.SendCommentValue }/>

				<div className="col-12 mb3 mt3">
					<div
						className="btn-group flex"
						role="group"
						aria-label="Audio Controller"
						style={{
							boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 6px -2px"
						}}
					>
						<button type="button" className="w-50 btn btn-primary">Submit</button>
						<button type="button" className="w-50 btn btn-outline-secondary">Cancel</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	(dispatch) => ({
		SendCommentValue: (value) => dispatch(Actions.CommentValue.CommentValue(value))
	})
)(Comment);