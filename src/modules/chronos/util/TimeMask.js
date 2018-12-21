class TimeMask {
	constructor() {
		this.Enum = TimeMask.GetEnum15();
		this.Mask = [ 0, 0, 0, 0 ];
	}

	static GetEnum15() {
		let enums = {},	
			iter = 0;

		for(let i = 0; i < 24; i++) {
			for(let j = 0; j < 60; j += 15) {
				let key = `"${ i < 10 ? `0${ i }` : i }:${ j < 10 ? `0${ j }` : j }"`;

				if(iter < 31) {
					enums[key] = {
						Flag: `1 << ${ iter }`,
						Tier: 0
					};
				} else if(iter < 62) {
					let j = iter - 31;
					enums[key] = {
						Flag: `1 << ${ j }`,
						Tier: 1
					};
				} else if(iter < 93) {
					let k = iter - 62;
					enums[key] = {
						Flag: `1 << ${ k }`,
						Tier: 2
					};
				} else if(iter < 124) {
					let l = iter - 93;
					enums[key] = {
						Flag: `1 << ${ l }`,
						Tier: 3
					};
				}

				++iter;
			}
		}

		return enums;
	}

	static Create15(block) {		
		let ff32 = 0,
			fb32 = 0,
			bf32 = 0,
			bb32 = 0;

		block.sort((a, b) => (+a.Time.replace(/[^0-9]/gi, "")) - (+b.Time.replace(/[^0-9]/gi, "")))
		block.forEach((v, i) => {
			if(i < 31) {
				ff32 = ff32 | (1 << i);
			} else if(i < 62) {
				let j = i - 31;
				fb32 = fb32 | (1 << j);
			} else if(i < 93) {
				let k = i - 62;
				bf32 = bf32 | (1 << k);
			} else if(i < 124) {
				let l = i - 93;
				bb32 = bb32 | (1 << l);
			}
		});

		return [
			ff32,
			fb32,
			bf32,
			bb32
		];
	}

	static Union(a, b) {
		return a.map((v, i) => v | b[i]);
	}
	static Intersection(a, b) {
		return a.map((v, i) => v & b[i]);
	}

	static Add15(block15, enum15) {
		let b = block15[enum15.Tier] | enum15.Flag;

		return b;
	}
	static Remove15(block15, enum15) {
		let b = block15[enum15.Tier] & ~enum15.Flag;

		return b;
	}
	static Has15(block15, enum15) {
		return (block15[enum15.Tier] & enum15.Flag) === enum15.Flag;
	}

	static Serialize(mask) {
		return mask.join(".");
	}
	static Deserialize(value) {
		let arr = value.split(".");
		
		return arr.map(v => +v);	
	}
}

export default TimeMask;