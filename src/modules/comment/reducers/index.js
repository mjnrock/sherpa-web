import { combineReducers } from "redux";
import { OnTrackCommand } from "./TrackCommand";
import { OnPlayState } from "./PlayState";
import { OnControlTrack, OnTrackData } from "./ControlTrack";

//	This defines the state shape
export default function RootReducer() {
	return combineReducers({
		XAP_TrackCommand: OnTrackCommand,
		XAP_AudioTrack: OnControlTrack,
		XAP_TrackData: OnTrackData,
		XAP_PlayerMask: OnPlayState
	});
}