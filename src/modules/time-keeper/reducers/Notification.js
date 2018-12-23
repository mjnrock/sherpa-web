import EnumNotification from "../enums/Notification";

export function OnNotification(state = [], action) {
	if(action.type === EnumNotification.XTK_NOTIFICATION) {
		state.push({
			From: action.from,
			To: action.to,
			Emoji: action.emoji
		});
	}

	return state;
}

export default {
	OnNotification
}