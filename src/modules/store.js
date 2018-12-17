import { createStore, applyMiddleware } from "redux";

import AudioPlayerRootReducer from "./audio-player/reducers/index";

export default function InitStore() {
	let store = createStore(
		AudioPlayerRootReducer(),
		applyMiddleware()
	);

	return store;
}