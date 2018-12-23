import EnumNotification from "../enums/Notification";

export function OnNotification(state = [], action) {
	if(action.type === EnumNotification.XTK_NOTIFICATION) {
		state.push({
			From: action.From,
			To: action.To,
			Emoji: action.Emoji
		});
	}

	return state;
}

export default {
	OnNotification
}