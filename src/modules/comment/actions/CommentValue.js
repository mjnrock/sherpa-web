import EnumCommentValue from "./../enums/CommentValue";

export function CommentValue(value) {
	return {
		type: EnumCommentValue.COMMENT_VALUE,
		value: value
	}
}

export default {
	CommentValue
}