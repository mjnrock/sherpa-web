import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "./routes/package";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<nav className="navbar">
						<Link className="navbar-brand" to="/">Home</Link>
						<Link className="navbar-link" to="/podcast">Podcast</Link>
						<Link className="navbar-link" to="/v1">V1</Link>
					</nav>

					<Switch>
						<Route path="/podcast" component={ (router) => <Routes.Podcast Router={ router } /> } />
						<Route path="/v1" component={ (router) => <Routes.V1 Router={ router } /> } />
						
						<Route exact path="/" component={ (router) => <Routes.Podcast Router={ router } /> } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect()(App);