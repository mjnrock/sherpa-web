import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="App">
				
				<div className="card">
					<div className="card-header p-1">
						<h4 className="card-title float-left">Project X - <span className="blue-grey lighten-2 font-small-3 mb-0">24 DEC 2017 - 09 APR 2019</span></h4>
						<span className="badge badge-pill badge-info float-right m-0">Approved</span>
					</div>
					<div className="card-content collapse show">
						<div className="card-footer text-center p-1">
							<div className="row">
								<div className="col-md-3 col-12 border-right-blue-grey border-right-lighten-5 text-center">
									<p className="blue-grey lighten-2 mb-0">Tasks</p>
									<p className="font-medium-5 text-bold-400">26</p>
								</div>
								<div className="col-md-3 col-12 border-right-blue-grey border-right-lighten-5 text-center">
									<p className="blue-grey lighten-2 mb-0">Completed</p>
									<p className="font-medium-5 text-bold-400">58%</p>
								</div>
								<div className="col-md-3 col-12 border-right-blue-grey border-right-lighten-5 text-center">
									<p className="blue-grey lighten-2 mb-0">Pending</p>
									<p className="font-medium-5 text-bold-400">42%</p>
								</div>
								<div className="col-md-3 col-12 text-center">
									<p className="blue-grey lighten-2 mb-0">Version</p>
									<p className="font-medium-5 text-bold-400">4.5</p>
								</div>
							</div>
							<hr />
							<span className="text-muted"><a href="#" className="danger darken-2">Project X</a> Statistics</span>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;