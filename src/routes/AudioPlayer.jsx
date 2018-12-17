import React, { Component } from "react";

import ModuleAudioPlayer from "./../modules/audio-player/AudioPlayer";

class AudioPlayer extends Component {
	render() {
		return (			
			<div className="container">
                <div className="row">
                    <div className="col-12">                    
                        <ModuleAudioPlayer />
                    </div>
                </div>
			</div>
		);
	}
}

export { AudioPlayer };