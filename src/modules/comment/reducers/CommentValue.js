import EnumCommentValue from "./../enums/CommentValue";

export function OnCommentValue(state = null, action) {
	if(action.type === EnumCommentValue.COMMENT_VALUE) {
		console.log(action);
		return action.value;
	}

	return state;
}

export default {
	OnCommentValue
}