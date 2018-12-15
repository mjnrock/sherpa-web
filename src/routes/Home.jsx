import React, { Component } from "react";

import Components from "./../core/components/package.js";

class Home extends Component {
	render() {
		//? Here to remind about the "Router" object and its data
		// console.log(this.props);
		return (			
			<div className="container">

                <div className="row">
                    <div className="col-12">                    
                        <h1 className="text-center">Sherpa</h1>

                        <div className="card">
                            <div className="card-body">
                                <Components.Audio.AudioContainer />
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <p className="text-center">Care to listen to our nonsense for hours on end?  Subscribe now to get nudes on the reg.</p>

                                <Components.Form.InputField type="text" icon="ft-user" placeholder="First Name" name="name-first" autocomplete="given-name"/>
                                <Components.Form.InputField type="text" icon="ft-users" placeholder="Last Name" name="name-last" autocomplete="family-name"/>
                                <Components.Form.InputField type="email" icon="ft-mail" placeholder="Email" name="email" autocomplete="email"/>

                                <button className="mt4 btn btn-lg btn-primary btn-block">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export { Home };