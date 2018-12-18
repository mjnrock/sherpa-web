import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "./routes/package";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/podcast" component={ (router) => <Routes.Podcast Router={ router } /> } />
					<Route path="/v1" component={ (router) => <Routes.V1 Router={ router } /> } />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default connect()(App);