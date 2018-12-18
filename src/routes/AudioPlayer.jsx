import React, { Component } from "react";

import ModuleAudioPlayer from "./../modules/audio-player/AudioPlayer";
import ModuleComment from "./../modules/comment/Comment";

class AudioPlayer extends Component {
	render() {
		return (			
			<div className="container">
                <div className="row">
                    <div className="col-12">                    
                        <ModuleAudioPlayer />
                        <ModuleComment />
                    </div>
                </div>
			</div>
		);
	}
}

export { AudioPlayer };