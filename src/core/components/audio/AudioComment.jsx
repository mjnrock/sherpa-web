import React, { Component } from 'react';
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";

class AudioComment extends Component {
    constructor(props) {
        super(props);

        this.TextArea = React.createRef();
    }

    componentDidMount() {
        this.SimpleMDE = new SimpleMDE({
            element: this.TextArea.current,
            // status: false,  // Status bar icons            
            // shortcuts: {
            //     drawTable: "Cmd-Alt-T"
            // },

            hideIcons: ["guide"],

            //? https://github.com/sparksuite/simplemde-markdown-editor
            // showIcons: ["code","table"],

            placeholder: "Enter a Comment..."
        });
    }

    OnTextAreaChange(e) {
        this.SimpleMDE.value(e.target.value);
    }
    
    render() {
        return (
            <div style={{
                display: this.props.showComment ? "block" : "none"
            }}>
                <div className="row mb3">
                    <div className="col-12">
                        <textarea
                            className="form-control blue"
                            style={{
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