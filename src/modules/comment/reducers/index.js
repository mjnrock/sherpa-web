import { OnCommentValue } from "./CommentValue";
import { OnCommentVisibility } from "./CommentVisibility";
import { OnCommentMask } from "./CommentMask";

//	This defines the state shape
export default function RootReducer() {
	return {
		XXC_CommentValue: OnCommentValue,
		XXC_CommentVisibility: OnCommentVisibility,
		XXC_CommentMask: OnCommentMask
	};
}