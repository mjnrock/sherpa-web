import EnumTimeslot from "../enums/Timeslot";

export function OnTimeslot(state = {}, action) {
	if(Object.keys(state).length === 0 && state.constructor === Object) {
		for(let v in EnumTimeslot.Weeks) {
			state[EnumTimeslot.Weeks[v]] = {};

			for(let k in EnumTimeslot.Days) {
				state[EnumTimeslot.Weeks[v]][EnumTimeslot.Days[k]] = [ 0, 0, 0, 0 ];
			}
		}
	}

	if(action && action.week && action.type) {
		// console.log(
		// 	action,
		// 	state[action.week][action.type][action.tier],
		// 	state[action.week][action.type][action.tier] | action.value,
		// 	state[action.week][action.type][action.tier] & action.value
		// );

		if(action.isAdd) {
			state[action.week][action.type][action.tier] |= action.value;
		} else {
			state[action.week][action.type][action.tier] &= ~action.value;
		}
	}

	return state;
}

export default {
	OnTimeslot
}