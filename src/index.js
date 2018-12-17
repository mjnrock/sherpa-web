import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './App';
import InitStore from "./modules/store";
const store = InitStore();

ReactDOM.render(	
	<Provider store={store}>
		<App />

		<br /><br /><br /><br />
		<button className="btn btn-primary" onClick={ () => console.log(store.getState()) }>Details</button>
	</Provider>,
	document.getElementById("root")
);