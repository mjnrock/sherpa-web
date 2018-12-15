import { Howl } from "howler";

class AudioPlayer {
    constructor(file, title, events) {
        this.ID = null;
        this.IsFirstPlay = true;
        this.Timestamp = 0;
        this.Timer = "00:00:00";
        this.Duration = 0;
        this.Track = {
            File: file,
            Title: title,
            Events: events
        };
        this.IsPaused = true;
        this.HasEnded = false;

        this.Howl = new Howl({
            src: [ `app-assets/audio/${ this.Track.File }.mp3` ],
            html5: true,
            preload: true,
            autoplay: false,
            onplay: function() {
                this.Timestamp = AudioPlayer.FormatTime(Math.round(this.Howl.duration()));
                this.Duration = this.Howl.duration();
      
                requestAnimationFrame(this.Step.bind(this));
            }.bind(this),
            onend: function() {
                this.Howl.seek(0);
                this.IsPaused = true;
                this.Timer = "0:00:00";
                this.HasEnded = true;

                this.Track.Events.OnEnd(this);
                
                requestAnimationFrame(this.Step.bind(this));
            }.bind(this)
        });
    }

    Step() {
        let seek = this.Howl.seek() || 0;
        this.Timer = AudioPlayer.FormatTime(Math.round(seek));
        this.Timestamp = (((seek / this.Howl.duration()) * 100) || 0) + "%";

        if (this.Howl.playing()) {
            this.Track.Events.OnTick(this);
            requestAnimationFrame(this.Step.bind(this));
        }
    }
    
    Play() {
        if(this.IsFirstPlay) {
            this.ID = this.Howl.play();
            this.IsFirstPlay = false;
        } else {
            this.Howl.play(this.ID);
        }
        this.IsPaused = false;
    }    
    
    Pause() {
        this.Howl.pause(this.ID);
        this.IsPaused = true;
    }

    Seek(value) {
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

    static FormatTime(secs) {
        let hours = Math.floor(+secs / 3600) || 0;
        let minutes = Math.floor(+secs / 60) || 0;
        let seconds = (+secs - minutes * 60) || 0;

        return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + Math.round(seconds);
    }
}

export { AudioPlayer };