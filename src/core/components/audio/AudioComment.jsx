import React, { Component } from 'react';

class AudioComment extends Component {
    constructor(props) {
        super(props);

        this.TextArea = React.createRef();
    }
    OnTextAreaChange(e) {

    }

    FormatBold(e) {
        let comment = this.TextArea.current,
            value = Array.from(comment.value),
            start = comment.selectionStart,
            preStart = (start - 2) >= 0 ? (start - 2) : null,
            end = comment.selectionEnd,
            postEnd = (end + 1) < value.length ? (end + 1) : null;

        if((preStart !== null  && value[preStart] === "*"  && value[preStart + 1] === "*") && (postEnd !== null && value[postEnd] === "*" && value[postEnd - 1] === "*")) {
            value.splice(preStart, 2);
            value.splice(end - 2, 2);
        } else {
            value.splice(start, 0, "**");
            if(end + 1 > value.length) {
                value.push("**")
            } else {
                value.splice(end + 1, 0, "**");
            }
        }
        
        value = value.join("");
        this.TextArea.current.value = value;
    }

    render() {
        return (
            <div style={{
                display: this.props.showComment ? "block" : "none"
            }}>
                <div className="row mb1">
                    <div className="col-12">
                        <div className="btn-group flex" role="group" aria-label="Audio Controller">
                            <button type="button" className="w-25 btn btn-outline-secondary" onClick={ this.FormatBold.bind(this) }>
                                <i className="ft-bold"></i>
                            </button>
                            <button type="button" className="w-25 btn btn-outline-secondary">
                                <i className="ft-italic"></i>
                            </button>
                            <button type="button" className="w-25 btn btn-outline-secondary">
                                <i className="ft-underline"></i>
                            </button>
                            <button type="button" className="w-25 btn btn-outline-secondary">
                                <i className="ft-list"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row mb3">
                    <div className="col-12">
                        <textarea className="form-control" style={{
                                resize : "none",
                                height: "150px"
                            }}
                            name="audioComment"
                            placeholder="Enter a comment..."
                            onChange={ this.OnTextAreaChange.bind(this) }
                            ref={ this.TextArea }
                        ></textarea>
                    </div>
                </div>

                <div className="row mb3">
                    <div className="col-6">
                        <input type="text" className="form-control text-center" placeholder="00:00"/>
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control text-center" placeholder="00:00"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="btn-group flex" role="group" aria-label="Audio Controller">
                            <button type="button" className="w-50 btn btn-primary">
                                Submit
                            </button>
                            <button type="button" className="w-50 btn btn-outline-secondary" onClick={ () => this.props.ontogglecomment() }>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { AudioComment };