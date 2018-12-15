import React, { Component } from 'react';

import Audio from "./package";

class AudioContainer extends Component {
    constructor(props) {
        super(props);

        this.SEEK_AMOUNT = 3;

        this.state = {};
        this.state.Timer = Audio.AudioPlayer.FormatTime(0);
        this.state.ShowComment = false;
        this.state.IsPaused = true;
    }

    componentDidMount() {        
        this.setState({
            AudioPlayer: new Audio.AudioPlayer("whistle", "Sound 1", {
                OnTick: this.OnTick.bind(this),
                OnEnd: this.OnEnd.bind(this)
            })
        });
    }

    OnTick(player) {
        this.setState({
            ...this.state,
            Timer: player.Timer
        });
    }

    OnEnd(player) {
        this.setState({
            ...this.state,
            IsPaused: player.IsPaused,
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

    SeekForward() {
        let seek = this.state.AudioPlayer.Seek(this.SEEK_AMOUNT);
        
        this.setState({
            ...this.state,
            Timer: Audio.AudioPlayer.FormatTime(seek)
        });
    }
    SeekBackward() {
        let seek = this.state.AudioPlayer.Seek(-this.SEEK_AMOUNT);
        
        this.setState({
            ...this.state,
            Timer: Audio.AudioPlayer.FormatTime(seek)
        });
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
                {
                    this.state.AudioPlayer
                    ? (
                        <div className="text-center code">
                            <span>{ this.state.Timer }</span> / <span>{ Audio.AudioPlayer.FormatTime(this.state.AudioPlayer.Duration) }</span>
                        </div>
                    )
                    : null
                }                

                <Audio.AudioWave ontogglecomment={ () => this.ToggleComment() } />
                <Audio.AudioController ispaused={ this.state.IsPaused } OnResume={ () => this.OnResume() } SeekForward={ () => this.SeekForward() } SeekBackward={ () => this.SeekBackward() } />
                <Audio.AudioComment showComment={ this.state.ShowComment } ontogglecomment={ () => this.ToggleComment() } />
            </div>
        );
    }
}

export { AudioContainer };