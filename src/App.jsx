import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Routes from "./routes/package";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ (router) => <Routes.Home Router={ router } /> } />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;