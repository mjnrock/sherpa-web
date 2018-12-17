import PlayState from "../enums/PlayState";

export function OnPlayState(state = null, action) {
	if (PlayState.Enum.includes(action.type)) {
		return action.type;
	}

	return state;
}