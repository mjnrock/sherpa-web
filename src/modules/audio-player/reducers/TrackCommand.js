import TrackCommand from "../enums/TrackCommand";

export function OnTrackCommand(state = null, action) {
	if (TrackCommand.Enum.includes(action.type)) {
		return action.type;
	}

	return state;
}

export default {
	OnTrackCommand
}