import React, { Component } from 'react';

class AudioComment extends Component {
    render() {
        return (
            <div>
                <div className="row mb1">
                    <div className="col-12">
                        <div className="btn-group flex" role="group" aria-label="Audio Controller">
                            <button type="button" className="w-25 btn btn-outline-secondary">
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
                        }} name="audioComment" placeholder="Enter a comment..."></textarea>
                    </div>
                </div>

                <div className="row mb3">
                    <div className="col-6">
                        <input type="text" className="form-control text-center" placeholder="00:00" />
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control text-center" placeholder="00:00" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="btn-group flex" role="group" aria-label="Audio Controller">
                            <button type="button" className="w-50 btn btn-primary">
                                Submit
                            </button>
                            <button type="button" className="w-50 btn btn-outline-secondary">
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