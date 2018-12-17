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
export function UpdateElapsedTime(time) {
	return {
		type: EnumControlTrackType.UPDATE_ELAPSED_TIME,
		payload: {
			Time: time
		}
	}
}

export default {
	NewTrack,
	UpdateElapsedTime
}