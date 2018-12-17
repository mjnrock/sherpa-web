//!	Flags intentionally incremented lazily to allow for any combination, if desired
//! The consequence of which is that intended opposites must be accounted for
const TrackCommands = {
	PLAY: 			{
		Name:	"PLAY",
		Icon:	"ft-play"
	},
	PAUSE: 			{
		Name:	"PAUSE",
		Icon:	"ft-pause"
	},
	STOP: 			{
		Name:	"STOP",
		Icon:	"ft-slash"
	},
	SEEK_FORWARD: 		{
		Name:	"SEEK_FORWARD",
		Icon:	"ft-fast-forward"
	},
	SEEK_BACKWARD: 		{
		Name:	"SEEK_BACKWARD",
		Icon:	"ft-rewind"
	},
	SKIP_FORWARD: 		{
		Name:	"SKIP_FORWARD",
		Icon:	"ft-skip-forward"
	},
	SKIP_BACKWARD: 		{
		Name:	"SKIP_BACKWARD",
		Icon:	"ft-skip-back"
	},
	LOOP: 		{
		Name:	"LOOP",
		Icon:	"ft-repeat"
	}
};

export default Object.freeze({
	...TrackCommands,

	Enum: Object.keys(TrackCommands)
});