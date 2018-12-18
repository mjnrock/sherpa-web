//!	Flags intentionally incremented lazily to allow for any combination, if desired
//! The consequence of which is that intended opposites must be accounted for
const PlayState = {
	PLAY: {
		Name: "XAC_PLAY",
		Flag: 1 << 0,
		Icon: {
			On: "ft-play",
			Off: "ft-pause"
		}
	},	
	LOOP: {
		Name: "XAC_LOOP",
		Flag: 1 << 1,
		Icon: {
			On: "ft-repeat",
			Off: "ft-repeat"
		}
	}
};

export default Object.freeze({
	...PlayState,

	Enum: Object.keys(PlayState)
});