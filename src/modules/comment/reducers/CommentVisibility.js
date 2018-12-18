import EnumCommentVisibility from "../enums/CommentVisibility";

export function OnCommentVisibility(state = false, action) {
	if(action.type === EnumCommentVisibility.COMMENT_VISIBILITY) {
		return action.value;
	}

	return state;
}

export default {
	OnCommentVisibility
}