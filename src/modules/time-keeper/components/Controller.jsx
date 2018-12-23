import React, { Component } from "react";
import { connect } from "react-redux";

import ControllerButtonBar from "./ControllerButtonBar";

class Controller extends Component {
	render() {
		return (
			<div className="row">
				<ControllerButtonBar
					buttons={
						[
							["Quieter", "🔉"],
							["Mic", "❗🎤"],
							["Louder", "🔊"]
						]
					}
				/>
				<ControllerButtonBar
					buttons={
						[
							["Yes", "✔️"],
							["No", "❌"]
						]
					}
				/>
				<ControllerButtonBar
					buttons={
						[
							["Timer - 5m", "⏳"],
							["Timer - 15m", "⏳⏳"],
							["Timer - 30m", "⏳⏳⏳"]
						]
					}
				/>
				<ControllerButtonBar
					buttons={
						[
							// ["Break", "⏲️"],
							["Start", "⏱️▶️"],
							["Stop", "⏱️⏹"]
						]
					}
				/>
			</div>
		);
	}
}

export default connect()(Controller);