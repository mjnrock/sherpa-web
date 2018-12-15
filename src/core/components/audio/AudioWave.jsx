import React, { Component } from 'react';

class AudioWave extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.MaskTimeBegin = 0;
        this.state.MaskTimeEnd = 0;
        this.state.Mouse = {
            Up: {
                X: 0,
                Active: false
            },
            Down: {
                X: 0,
                Active: false
            }
        };
        this.state.HoverMask = {
            X: 0,
            Width: 0
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            Duration: props.duration,
            Timestamp: props.timestamp,
            Timer: props.timer
        });
    }

    ConvertMaskToTimeRange(element) {
        let rect = element.getBoundingClientRect(),
            bratio = this.state.HoverMask.X / rect.width,
            begin = this.state.Duration * bratio,
            eratio = (this.state.HoverMask.X + this.state.HoverMask.Width) / rect.width,
            end = this.state.Duration * eratio;

            return [begin, end];
    }

    onMouseMove(e) {
        let rect = e.target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            timestamp = this.ConvertMaskToTimeRange(e.target),
            begin = timestamp[0],
            end = timestamp[1];
            
        if(this.state.Mouse.Down.Active && this.state.Mouse.Up.Active) {
            let dx = this.state.Mouse.Up.X - this.state.Mouse.Down.X,
                state = {
                    ...this.state,
                    Mouse: {
                        ...this.state.Mouse,
                        Up: {
                            X: 0,
                            Active: false
                        },
                        Down: {
                            X: 0,
                            Active: false
                        }
                    },
                    HoverMask: {
                        X: this.state.Mouse.Down.X,
                        Width: dx
                    },
                    MaskTimeBegin: begin,
                    MaskTimeEnd: end
                };

            if(x < this.state.Mouse.Down.X) {
                state.HoverMask.Width = this.state.Mouse.Down.X - this.state.Mouse.Up.X;
                state.HoverMask.X = this.state.Mouse.Up.X;
            }
            
            this.setState(state);
        } else if(this.state.Mouse.Down.Active && !this.state.Mouse.Up.Active) {
            let width = Math.abs(x - this.state.HoverMask.X),
                dx = this.state.Mouse.Down.X,
                lx = this.state.HoverMask.X;
                
            if(x < dx) {
                width = this.state.Mouse.Down.X - x;

                this.setState({
                    ...this.state,
                    HoverMask: {
                        X: x,
                        Width: width
                    },
                    MaskTimeBegin: begin,
                    MaskTimeEnd: end
                });
            } else {
                this.setState({
                    ...this.state,
                    HoverMask: {
                        X: lx,
                        Width: width
                    },
                    MaskTimeBegin: begin,
                    MaskTimeEnd: end
                });
            }
        }
    }
    onMouseDown(e) {
        let rect = e.target.getBoundingClientRect(),
            x = e.clientX - rect.left;

        this.setState({
            ...this.state,
            Mouse: {
                ...this.state.Mouse,
                Up: {
                    X: 0,
                    Active: false
                },
                Down: {
                    X: x,
                    Active: true
                }
            },
            HoverMask: {
                X: x,
                Width: 0
            }
        });
    }
    onMouseUp(e) {
        let rect = e.target.getBoundingClientRect(),
            x = e.clientX - rect.left;

        this.setState({
            ...this.state,
            Mouse: {
                ...this.state.Mouse,
                Up: {
                    X: x,
                    Active: true
                }
            }
        });
    }

    render() {
        return (
            <div className="row mb1">
                <div className="col-12">
                    <div
                        className="br2 ba bg-primary scrub-container"
                        style={{
                            height: "75px"
                        }}
                        onMouseMove={ this.onMouseMove.bind(this) }
                        onMouseDown={ this.onMouseDown.bind(this) }
                        onMouseUp={ this.onMouseUp.bind(this) }
                    >
                        <div className="bg-primary bg-lighten-2 middle text-center remove-pointer-all" style={{
                            height: "100%",
                            bottom: 0,
                            left: this.state.HoverMask.X,
                            width: this.state.HoverMask.Width
                        }}>
                            <span>{ this.state.MaskTimeBegin }</span>
                            <br />
                            <span>{ this.state.MaskTimeEnd }</span>
                        </div>
                        <div className="bg-white middle remove-pointer" style={{
                            height: "75px",
                            width: "2px"
                        }}></div>
                    </div>

                    <button
                        className="btn btn-outline-primary btn-outline-primary-bg-white bottom-right"
                        onClick={ () => this.props.ontogglecomment() }
                    >
                        <i className="ft-message-circle"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export { AudioWave };