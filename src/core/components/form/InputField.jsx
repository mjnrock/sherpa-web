import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <div className="position-relative has-icon-left mb2">
                <input type="text" className="form-control" placeholder={ this.props.placeholder } name={ this.props.name } />
                <div className="form-control-position">
                    <i className={ this.props.icon }></i>
                </div>
            </div>
        );
    }
}

export { InputField };