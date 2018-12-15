import React, { Component } from 'react';

import Audio from "./package";

class AudioContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.ShowComment = false;
        this.state.IsPaused = true;
        this.state.AudioPlayer = new Audio.AudioPlayer("whistle", "Sound 1", {
            OnTick: this.OnTick.bind(this)
        });
    }

    OnTick(player) {
        this.setState({
            ...this.state,
            Timer: player.Timer
        });
    }

    OnPause() {
        this.state.AudioPlayer.Pause();
    }
    OnPlay() {
        this.state.AudioPlayer.Play();
    }
    OnResume() {
        let isPaused = this.state.IsPaused;
        if(this.state.IsPaused) {
            this.OnPlay();
            isPaused = false;
        } else {
            this.OnPause();
            isPaused = true;
        }

        this.setState({
            ...this.state,
            IsPaused: isPaused
        });

        return isPaused;
    }
    
    ToggleComment() {
        this.setState({
            ...this.state,
            ShowComment: !this.state.ShowComment
        });
    }

    render() {
        return (
            <div>
                <div className="text-center code">
                    <span>{ this.state.AudioPlayer.Timer }</span> / <span>{ Audio.AudioPlayer.FormatTime(this.state.AudioPlayer.Duration) }</span>
                </div>

                <Audio.AudioWave ontogglecomment={ () => this.ToggleComment() } />
                <Audio.AudioController OnResume={ () => this.OnResume() } />
                <Audio.AudioComment showComment={ this.state.ShowComment } ontogglecomment={ () => this.ToggleComment() } />
            </div>
        );
    }
}

export { AudioContainer };