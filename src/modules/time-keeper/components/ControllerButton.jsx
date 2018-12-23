import React, { Component } from "react";
import { connect } from "react-redux";

import EnumNotification from "./../enums/Notification";
import Actions from "./../actions/package";

class ControllerButton extends Component {
	OnClick(e) {
		this.props.Notification(
			EnumNotification.XTK_NOTIFICATION,
			null,
			null,
			this.props.emoji
		);
	}

	render() {
		return (
			<div
				className="btn btn-outline-secondary text-center bw2 br2 mr2"
				style={{
					flex: "1 0"
				}}
				onClick={ this.OnClick.bind(this) }
			>
				<div
					style={{
						opacity: "1.0"
					}}
				>
					<span
						className="f1"
						dangerouslySetInnerHTML={{
							__html: this.props.emoji
						}}
					></span>
					<br />
					<span>{ this.props.label }</span>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	(dispatch) => ({
		Notification: (type, from, to, emoji) => dispatch(Actions.Notification.Notification(type, from, to, emoji))
	})
)(ControllerButton);