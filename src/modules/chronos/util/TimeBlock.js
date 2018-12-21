import EnumTimeslot from "./../enums/Timeslot";

class TimeBlock {
	/**
	 * @param {int} start | Military hour of day (e.g. 15 = "3:00pm")
	 * @param {int} end | Military hour of day (e.g. 15 = "3:00pm")
	 * @param {EnumTimeslot.Intervals} step 
	 */
	constructor(start = 0, end = 23, step = EnumTimeslot.Intervals.Q15M) {
		this.Block = TimeBlock.Create(start, end, step);
	}

	GetBlock() {
		return this.Block;
	}
	SetBlock(value) {
		this.Block = value;

		return this;
	}

	static Compare(a, b) {
		return JSON.stringify(a) === JSON.stringify(b);
	}
	static Union(a, b) {
		if(a.length === b.length) {
			for(let k in a) {
				if(b[k] !== null && b[k] !== void 0) {
					a[k].IsOpen = a[k].IsOpen || b[k].IsOpen;
				} else {
					return a;
				}
			}
		}

		return a;
	}
	static Intersection(a, b) {
		if(a.length === b.length) {
			for(let k in a) {
				if(b[k] !== null && b[k] !== void 0) {
					a[k].IsOpen = a[k].IsOpen && b[k].IsOpen;
				} else {
					return a;
				}
			}
		}

		return a;
	}

	static CreateFromMask(mask) {
		let block = [];

		mask.forEach((m, i) => {
			let set = Object.entries(EnumTimeslot.Slots).filter(f => f[1].Tier === i);
			
			set.forEach(s => block.push({
				Time: s[0],
				IsOpen: (m & s[1].Flag) === s[1].Flag
			}));
		});

		return block;
	}

	static Create(start = 0, end = 24, step = EnumTimeslot.Intervals.Q15M) {
		let hours = Math.floor(end) - Math.floor(start),
			block = [];

		if(hours <= 0 || hours > 24) {
			hours = 24;
		}

		for(let i = 0; i < hours; i++) {
			for(let j = 0; j < 60; j += step) {
				block.push({
					Time: `${ i < 10 ? `0${ i }` : i }:${ j < 10 ? `0${ j }` : j }`,
					IsOpen: false
				});
			}
		}

		return block;
	}
}

export default TimeBlock;