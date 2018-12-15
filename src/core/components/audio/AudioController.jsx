import React, { Component } from 'react';

class AudioController extends Component {
    render() {
        return (
            <div className="row mb3">
                <div className="col-12">
                    <div className="btn-group flex" role="group" aria-label="Audio Controller">
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-skip-back"></i>
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-rewind"></i>
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-play"></i>
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