import { OnNotification } from "./Notification";
import { OnTimer } from "./Timer";

//	This defines the state shape
export default function RootReducer() {
	return {
		XTK_Notifications: OnNotification,
		XTK_Timer: OnTimer
	};
}