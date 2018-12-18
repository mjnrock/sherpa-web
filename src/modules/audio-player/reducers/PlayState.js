import EnumPlayState from "./../enums/PlayState";
import Bitwise from "./../util/Bitwise";

export function OnPlayState(state = 0, action) {
	if(action.type === EnumPlayState.PLAY.Name && action.value) {
		if(action.value < 0) {
			return Bitwise.Remove(state, ~action.value);
		}

		return Bitwise.Add(state, action.value);
	}

	return state;
}

export default {
	OnPlayState
}