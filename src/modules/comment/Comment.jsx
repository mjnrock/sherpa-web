import React, { Component } from "react";
import { connect } from "react-redux";

import Components from "./components/package";

class Comment extends Component {
	render() {
		return (
			<div className="text-center col-6 offset-sm-3">
				<Components.AudioTimer />
				<Components.InputComment />

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

export default connect()(Comment);