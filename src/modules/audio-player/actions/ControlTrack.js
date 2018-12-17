import EnumControlTrackType from "./../enums/ControlTrackType";

export function NewTrack(filename, hooks = {}) {
	return {
		type: EnumControlTrackType.NEW,
		payload: {
			Filename: filename,
			Hooks: hooks
		}
	}
}
export function UpdateTrackData(payload) {
	return {
		type: EnumControlTrackType.UPDATE_TRACK_DATA,
		payload: payload
	}
}

export default {
	NewTrack,
	UpdateTrackData
}