import React, { Component } from "react";
import { connect } from "react-redux";

class Timer extends Component {
	render() {
		return (
			<div className="row">
				<div
					className="col-12 text-center"
					style={{
						backgroundColor: `rgba(125, ${ 255 - (255 * this.props.Progress || 1) }, 0)`
					}}
				>
					⏳
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		Progress: state.Notifications
	})
)(Timer);