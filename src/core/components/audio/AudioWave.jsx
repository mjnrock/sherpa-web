import React, { Component } from 'react';

class AudioWave extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.timestamp = this.props.timestamp === null || this.props.timestamp === void 0 ? this.props.timestamp : 1568;
    }

    render() {
        return (
            <div className="row mb1">
                <div className="col-12">
                    <div className="br2 ba bg-primary" style={{
                        height: "75px"
                    }}>
                        <div className="bg-white middle" style={{
                            height: "75px",
                            width: "2px"
                        }}></div>
                    </div>

                    <button className="btn btn-outline-primary btn-outline-primary-bg-white bottom-right" onClick={ () => this.props.ontogglecomment() }>
                        <i className="ft-message-circle"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export { AudioWave };