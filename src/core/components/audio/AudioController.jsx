import React, { Component } from 'react';
import { Howl } from "howler";

class AudioController extends Component {
    constructor(props) {
        super(props);

        let Howler = new Howl({
            src: [ "app-assets/audio/whistle.mp3" ],
            html5: true,
            loop: false,
            preload: true,
            volume: 0.5
        });

        this.state = {};
        this.state.IsPaused = true;
        this.state.SeekLength = 15;
        
        this.state.AudioID = Howler.play();
        Howler.pause(this.state.AudioID);
        this.state.Howler = Howler;        

        this.state = {
            ...this.state,
            onplay: this.OnPlay,
            onpause: this.OnPause
        };
    }

    OnPlay() {
        this.state.Howler.play(this.state.AudioID);
    }
    OnPause() {
        this.state.Howler.pause(this.state.AudioID);
    }
    OnPlayPause(e) {
        if(this.state.IsPaused) {
            this.OnPlay();
        } else {
            this.OnPause();
        }

        this.setState({
            ...this.state,
            IsPaused: !this.state.IsPaused
        });
    }

    render() {
        return (
            <div className="row mb3 ml1 mr1">
                <div className="col-12">
                    <div>
                        <span className="code">{ 1 }</span> / <span className="code">{ this.state.Howler.duration() }</span>
                    </div>
                    <div className="btn-group flex" role="group" aria-label="Audio Controller">
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-skip-back"></i>
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-rewind"></i>
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary" onClick={ function(e) { this.OnPlayPause(e) }.bind(this) }>
                            {
                                this.state.IsPaused
                                ? <i className="ft-play"></i>
                                : <i className="ft-pause"></i>
                            }
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-fast-forward"></i>
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-skip-forward"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export { AudioController };