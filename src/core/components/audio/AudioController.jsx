import React, { Component } from 'react';

class AudioController extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.IsPaused = true;
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            IsPaused: props.ispaused
        });
    }

    //  @isPaused should be sent by AudioContainer.OnResume()
    SetPause() {
        this.setState({
            ...this.state,
            IsPaused: this.props.ispaused
        });
    }

    render() {
        return (
            <div className="row mb3 ml1 mr1">
                <div className="col-12">
                    <div className="btn-group flex" role="group" aria-label="Audio Controller">
                        <button type="button" className="w-20 btn btn-outline-primary">
                            <i className="ft-skip-back"></i>
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary" onClick={ () => this.props.SeekBackward() }>
                            <i className="ft-rewind"></i>
                        </button>
                        <button type="button" id="#play" className="w-20 btn btn-outline-primary" onClick={ () => this.SetPause(this.props.OnResume()) }>
                            {
                                this.state.IsPaused
                                ? <i className="ft-play"></i>
                                : <i className="ft-pause"></i>
                            }
                        </button>
                        <button type="button" className="w-20 btn btn-outline-primary" onClick={ () => this.props.SeekForward() }>
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