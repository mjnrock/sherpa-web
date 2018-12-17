export function OnPlayState(state = null, action) {
	if(action.type === "PLAY_PAUSE") {
		return action.value;
	}

	return state;
}