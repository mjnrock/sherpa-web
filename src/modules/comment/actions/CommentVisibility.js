import EnumCommentVisibility from "./../enums/CommentVisibility";

export function CommentVisibility(value) {
	return {
		type: EnumCommentVisibility.COMMENT_VISIBILITY,
		value: value
	}
}

export default {
	CommentVisibility
}