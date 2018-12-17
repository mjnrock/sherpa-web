//!	Flags intentionally incremented lazily to allow for any combination, if desired
//! The consequence of which is that intended opposites must be accounted for
const PlayStates = {
	PLAY: 			{
		Type:	"PLAY",
		Icon:	"ft-play",
		State:	1 << 0
	},
	PAUSE: 			{
		Type:	"PAUSE",
		Icon:	"ft-pause",
		State:	1 << 1
	},
	STOP: 			{
		Type:	"STOP",
		Icon:	"ft-slash",
		State:	1 << 2
	},
	SEEK_FORWARD: 		{
		Type:	"SEEK_FORWARD",
		Icon:	"ft-fast-forward",
		State:	1 << 3
	},
	SEEK_BACKWARD: 		{
		Type:	"SEEK_BACKWARD",
		Icon:	"ft-rewind",
		State:	1 << 4
	},
	SKIP_FORWARD: 		{
		Type:	"SKIP_FORWARD",
		Icon:	"ft-skip-forward",
		State:	1 << 5
	},
	SKIP_BACKWARD: 		{
		Type:	"SKIP_BACKWARD",
		Icon:	"ft-skip-back",
		State:	1 << 6
	}
};

export default Object.freeze({
	...PlayStates,

	Enum: Object.keys(PlayStates)
});