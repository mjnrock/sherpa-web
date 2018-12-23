import React, { Component } from 'react';

class iFrame extends Component {
	constructor(props) {
		super(props);

		this.iFrame = React.createRef();
	}

    render() {
        return (
            <iframe
				style={{
					width: "100%",
					height: "100%",
					minHeight: "500px"
				}}
				src="https://www.youtube.com/embed/wOzbPOJYFb8"
				frameborder="0"
				allow="autoplay; encrypted-media"
				allowfullscreen
				ref={ this.iFrame }
			></iframe>
        );
    }
}

export { iFrame };