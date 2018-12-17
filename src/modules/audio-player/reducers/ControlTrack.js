import EnumControlTrackType from "./../enums/ControlTrackType";
import AudioTrack from "./../util/AudioTrack";

export function OnControlTrack(state = null, action) {
	if(action.type === EnumControlTrackType.NEW) {
		return new AudioTrack(action.payload.Filename, action.payload.Hooks);
	}

	return state;
}

export function OnTrackData(state = null, action) {
	if(action.type === EnumControlTrackType.UPDATE_ELAPSED_TIME) {
		return {
			...state,
			ElapsedTime: action.payload.Time
		}
	}

	return state;
}