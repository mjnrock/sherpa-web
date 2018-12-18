//!	Flags intentionally incremented lazily to allow for any combination, if desired
//! The consequence of which is that intended opposites must be accounted for
const TrackCommands = {
	PLAY: 			{
		Name:	"XAC_PLAY",
		Icon:	"ft-play"
	},
	PAUSE: 			{
		Name:	"XAC_PAUSE",
		Icon:	"ft-pause"
	},
	STOP: 			{
		Name:	"XAC_STOP",
		Icon:	"ft-slash"
	},
	SEEK_FORWARD: 		{
		Name:	"XAC_SEEK_FORWARD",
		Icon:	"ft-fast-forward"
	},
	SEEK_BACKWARD: 		{
		Name:	"XAC_SEEK_BACKWARD",
		Icon:	"ft-rewind"
	},
	SKIP_FORWARD: 		{
		Name:	"XAC_SKIP_FORWARD",
		Icon:	"ft-skip-forward"
	},
	SKIP_BACKWARD: 		{
		Name:	"XAC_SKIP_BACKWARD",
		Icon:	"ft-skip-back"
	},
	LOOP: 		{
		Name:	"XAC_LOOP",
		Icon:	"ft-repeat"
	},
	CHAT: 		{
		Name:	"XAC_CHAT",
		Icon:	"ft-message-circle"
	}
};

export default Object.freeze({
	...TrackCommands,
	
	Enum: Object.entries(TrackCommands).map(v => v[1].Name)
});