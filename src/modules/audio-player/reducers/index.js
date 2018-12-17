import { combineReducers } from "redux";
import { OnTrackCommand } from "./TrackCommand";
import { OnPlayState } from "./PlayState";
import { OnControlTrack, OnTrackData } from "./ControlTrack";

//	This defines the state shape
export default function RootReducer() {
	return combineReducers({
		TrackCommand: OnTrackCommand,
		AudioTrack: OnControlTrack,
		TrackData: OnTrackData,
		PlayerMask: OnPlayState
	});
}