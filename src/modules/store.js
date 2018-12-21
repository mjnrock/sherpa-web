import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import AudioPlayerRootReducer from "./audio-player/reducers/index";
import CommentRootReducer from "./comment/reducers/index";
import ChronosRootReducer from "./chronos/reducers/index";

export default function InitStore() {
	let store = createStore(
		combineReducers({
			...AudioPlayerRootReducer(),
			...CommentRootReducer(),
			...ChronosRootReducer()
		}),
		applyMiddleware()
	);

	return store;
}