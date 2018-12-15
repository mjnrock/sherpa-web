import React, { Component } from "react";

import Form from "./../core/components/form/package.js";

class Home extends Component {
	render() {
		//? Here to remind about the "Router" object and its data
		// console.log(this.props);
		return (			
			<div className="container">
				<h1 className="text-center">Sherpa&trade;</h1>
				<hr />
				<div>
					<Form.InputField icon="ft-user" placeholder="First Name" name="name-first" />
					<Form.InputField icon="ft-users" placeholder="Last Name" name="name-last" />
					<Form.InputField icon="ft-mail" placeholder="Email" name="email" />

					<button className="btn btn-primary btn-block">Subscribe Now</button>
				</div>
			</div>
		);
	}
}

export { Home };