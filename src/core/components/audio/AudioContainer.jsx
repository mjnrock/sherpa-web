import React, { Component } from 'react';

import Audio from "./package";

class AudioContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.ShowComment = false;
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
                <Audio.AudioWave ontogglecomment={ () => this.ToggleComment() } />
                <Audio.AudioController />
                <Audio.AudioComment showComment={ this.state.ShowComment } ontogglecomment={ () => this.ToggleComment() } />
            </div>
        );
    }
}

export { AudioContainer };