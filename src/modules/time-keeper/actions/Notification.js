export function Notification(type, from, to, emoji) {
	return {
		type: type,
		From: from,
		To: to,
		Emoji: emoji
	}
}

export default {
	Notification
}