import { combineReducers } from "redux";
import { OnPlayState } from "./PlayState";
import { OnControlTrack, OnTrackData } from "./ControlTrack";

//	This defines the state shape
export default function RootReducer() {
	return combineReducers({
		PlayState: OnPlayState,
		AudioTrack: OnControlTrack,
		TrackData: OnTrackData
	});
}