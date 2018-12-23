import EnumNotification from "./../enums/Notification";

export function Tick() {
	return {
		type: EnumNotification.XTK_TIMER_TICK
	}
}

export function Start(start, duration) {
	return {
		type: EnumNotification.XTK_NEW_TIMER,
		start,
		duration
	}
}

export function Stop() {
	return {
		type: EnumNotification.XTK_STOP_TIMER
	}
}

export default {
	Tick,
	Start,
	Stop
}