import React, { Component } from "react";
import { connect } from "react-redux";

import { InputField } from "./../../form/InputField";

import EnumCommentMask from "./../enums/CommentMask";
import CommentMask from "./../actions/CommentMask";

class AudioTimer extends Component {
	OnMaskStartChange(value) {
		this.props.OnMaskChange(EnumCommentMask.MASK_START, value);
	}
	OnMaskEndChange(value) {
		this.props.OnMaskChange(EnumCommentMask.MASK_END, value);
	}

	render() {
		return (
			<div className="row mb3 mt3">                        
				<div className="col-6">
					<InputField
						type="text"
						className="form-control text-center primary"
						iclassname="primary b"
						icon="fa fa-hourglass-start"
						placeholder="00:00:00"
						name="comment-time-start"
						style={{
							resize: "none",
							boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
						}}
						SaveValue={ this.OnMaskStartChange.bind(this) }
					/>
				</div>
				<div
					className="col-6"
				>
					<InputField
						type="text"
						className="form-control text-center primary"
						iclassname="primary b"
						icon="fa fa-hourglass-end"
						placeholder="00:00:00"
						name="comment-time-end"
						style={{
							resize: "none",
							boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
						}}
						SaveValue={ this.OnMaskEndChange.bind(this) }
					/>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	(dispatch) => ({
		OnMaskChange: (type, value) => dispatch(CommentMask.CommentMask(type, value))
	})
)(AudioTimer);
