import React, { Component } from "react";
import { connect } from "react-redux";

import { InputField } from "./../../form/InputField";

class AudioTimer extends Component {
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
					/>
				</div>
			</div>
		);
	}
}

export default connect()(AudioTimer);