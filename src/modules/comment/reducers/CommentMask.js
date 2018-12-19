import EnumCommentMask from "../enums/CommentMask";

export function OnCommentMask(state = {}, action) {
	if(action.type === EnumCommentMask.MASK_START) {
		return {
			...state,
			MaskStart: action.value
		};
	} else if(action.type === EnumCommentMask.MASK_END) {
		return {
			...state,
			MaskEnd: action.value
		};
	}

	return state;
}

export default {
	OnCommentMask
}