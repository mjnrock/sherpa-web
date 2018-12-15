import { Howl } from "howler";

class AudioPlayer {
    constructor(file, title, events) {
        this.Timestamp = 0;
        this.Timer = "0:00:00";
        this.Duration = 0;
        this.Track = {
            File: file,
            Title: title,
            Events: events
        };
        this.IsPaused = true;

        this.Howl = new Howl({
            src: [ `app-assets/audio/${ this.Track.File }.mp3` ],
            html5: true,
            onplay: function() {
                this.Timestamp = AudioPlayer.FormatTime(Math.round(this.Howl.duration()));
                this.Duration = this.Howl.duration();
      
                requestAnimationFrame(this.Step.bind(this));
            }.bind(this)
        });
        this.ID = this.Howl.play();
        this.Howl.pause();
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
        this.Howl.play(this.ID);
        this.IsPaused = false;
    }    
    
    Pause() {
        this.Howl.pause(this.ID);
        this.IsPaused = true;
    }

    Seek(per) {    
        if (this.Howl.playing()) {
            this.Howl.seek(this.Howl.duration() * per);
        }
    }

    static FormatTime(secs) {
        let hours = Math.floor(+secs / 3600) || 0;
        let minutes = Math.floor(+secs / 60) || 0;
        let seconds = (+secs - minutes * 60) || 0;

        return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
}

export { AudioPlayer };