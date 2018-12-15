import React, { Component } from 'react';

class AudioWave extends Component {
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

                    <button className="btn btn-outline-primary btn-outline-primary-bg-white bottom-right">
                        <i className="ft-message-circle"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export { AudioWave };