import { OnNotification } from "./Notification";

//	This defines the state shape
export default function RootReducer() {
	return {
		XTK_Notifications: OnNotification
	};
}