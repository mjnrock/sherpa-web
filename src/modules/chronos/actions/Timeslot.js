export function Timeslot(type, week, tier, value, isadd = true) {
	return {
		type: type,
		week: week,
		tier: tier,
		value: value,
		isAdd: isadd
	}
}

export default {
	Timeslot
}