import React, { Component } from "react";
import { connect } from "react-redux";

class AudioTimer extends Component {
	render() {
		return (
			<div className="row mb3 mt3">
				<div className="col-6">
					<input
						type="text"
						className="form-control text-center primary"
						placeholder="00:00"
						style={{
							resize: "none",
							boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
						}}
					/>
				</div>
				<div
					className="col-6"
				>
					<input
						type="text"
						className="form-control text-center primary"
						placeholder="00:00"
						style={{
							resize: "none",
							boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
						}}
					/>
				</div>
			</div>
		);
	}
}

export default connect()(AudioTimer);