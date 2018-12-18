import React, { Component } from "react";
import { connect } from "react-redux";

class InputComment extends Component {
	render() {
		return (
			<textarea
				className="form-control primary"
				rows="5"
				placeholder="Enter a comment..."
				style={{
					resize: "none",
					boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
				}}
			></textarea>
		);
	}
}

export default connect()(InputComment);