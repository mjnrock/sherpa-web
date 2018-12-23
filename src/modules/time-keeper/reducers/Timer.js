import EnumNotification from "../enums/Notification";

export function OnTimer(state = {}, action) {
	if(action.type === EnumNotification.XTK_NEW_TIMER) {
		return {
			...state,
			Start: action.start,
			Duration: action.duration,
			Progress: 0
		};
	} else if(action.type === EnumNotification.XTK_STOP_TIMER) {
		return {
			...state,
			Start: null,
			Duration: null,
			Progress: null
		};
	} else if(action.type === EnumNotification.XTK_TIMER_TICK) {
		let current = +Date.now() - state.Start,
			end = state.Start + state.Duration,
			ratio = current / end,
			prog = state.Progress + (state.Progress * ratio);

		return {
			...state,
			Progress: prog
		};
	}

	return state;
}

export default {
	OnTimer
}