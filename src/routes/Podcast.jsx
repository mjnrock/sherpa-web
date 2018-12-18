import React, { Component } from "react";

import Modules from "./../modules/package";

class Podcast extends Component {
	render() {
		return (			
			<div className="container">
                <div className="row">
                    <div className="col-12">                    
                        <Modules.AudioPlayer.AudioPlayer Title="Track Title" Filename="synth" />
                        <Modules.Comment.Comment />
                    </div>
                </div>
			</div>
		);
	}
}

export { Podcast };