import EnumControlTrackType from "./../enums/ControlTrackType";
import AudioTrack from "./../util/AudioTrack";

export function OnControlTrack(state = null, action) {
	if(action.type === EnumControlTrackType.NEW) {
		return new AudioTrack(action.payload.Filename, action.payload.Hooks);
	}

	return state;
}

export function OnTrackData(state = null, action) {
	if(action.type === EnumControlTrackType.UPDATE_TRACK_DATA) {
		return {
			...state,
			...action.payload
		}
	}

	return state;
}

export default {
	OnControlTrack,
	OnTrackData
}