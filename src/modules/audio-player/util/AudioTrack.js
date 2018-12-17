import { Howl } from "howler";

import EnumTrackCommand from "./../enums/TrackCommand";

class AudioTrack {
	constructor(filename, hooks = {}) {
		this.AudioID = null;
		this.Hooks = hooks;
		
		this.Howl = new Howl({
            src: [ `app-assets/audio/${ filename }.mp3` ],
            html5: true,
            preload: true,
			autoplay: false,

			onplay: this.OnPlay.bind(this),
			onpause: this.OnPause.bind(this),
			onend: this.OnEnd.bind(this),
			onrate: this.OnRate.bind(this),
			onseek: this.OnSeek.bind(this)
		});
	}

	OnPlay() {
		console.log(...arguments);

		requestAnimationFrame(this.Tick.bind(this));
	}
	OnPause() {
		console.log(...arguments);
	}
	OnEnd() {
		console.log(...arguments);

		this.Howl.seek(0);
		if(typeof this.Hooks.OnEnd === "function") {
			this.Hooks.OnEnd(this);
		}
		requestAnimationFrame(this.Tick.bind(this));
	}
	OnRate() {
		console.log(...arguments);
	}
	OnSeek() {
		console.log(...arguments);
	}

	GetElapsedTime(isFormatted = false) {
        let seek = this.Howl.seek() || 0;
		if(isFormatted) {
			return AudioTrack.FormatTime(seek);
		}

		return seek;
	}
	GetElapsedTimePercent(isFormatted = false) {
        let seek = this.Howl.seek() || 0;
		if(isFormatted) {
			return (((seek / this.Howl.duration()) * 100) || 0) + "%";
		}

		return ((seek / this.Howl.duration()) * 100) || 0;
	}
	GetDuration(isFormatted = false) {
        let duration = this.Howl.duration() || 0;
		if(isFormatted) {
			return AudioTrack.FormatTime(duration);
		}

		return duration;
	}

    Tick() {
        if(this.Howl.playing()) {
			if(typeof this.Hooks.OnTick === "function") {
				this.Hooks.OnTick(this);
			}
            requestAnimationFrame(this.Tick.bind(this));
        }
    }



    Play() {
        if(this.AudioID === null || this.AudioID === void 0) {
            this.AudioID = this.Howl.play();
        } else {
            this.Howl.play(this.AudioID);
        }
    }
    Pause() {
        this.Howl.pause(this.AudioID);
	}


	

    Scrub(value) {
        if(value === null || value === void 0) {
            return this.Howl.seek();
        }

        let amount = this.Howl.seek() + value;

        if(amount < 0) {
            amount = 0;
        } else if(amount > this.Howl.duration()) {
            amount = this.Howl.duration();
        }

        if (this.Howl.playing()) {
            this.Howl.seek(amount);
        }

        return amount;
	}
	

	
	ChangeTrackCommand(command) {
		console.log(command);
		switch(command) {
			case EnumTrackCommand.PLAY.Name:
				this.Play();
				return true;
			case EnumTrackCommand.PAUSE.Name:
				this.Pause();
				return true;
			case EnumTrackCommand.SEEK_FORWARD.Name:
				// this.Pause();
				return true;
			case EnumTrackCommand.SEEK_BACKWARD.Name:
				// this.Pause();
				return true;
			default:
				return false;
		}
	}

    static FormatTime(secs) {
        let hours = Math.floor(+secs / 3600) || 0;
        let minutes = Math.floor(+secs / 60) || 0;
        let seconds = (+secs - minutes * 60) || 0;

        return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds.toFixed(3);
    }
}

export default AudioTrack;