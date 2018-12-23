import React, { Component } from "react";
import { connect } from "react-redux";

import Components from "./components/package";

class TimeKeeper extends Component {
	render() {
		return (
			<div>
				<Components.NotificationTrack />
				<Components.Timer />
			</div>
		);
	}
}

export default connect()(TimeKeeper);