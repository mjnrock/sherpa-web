import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <div className="position-relative has-icon-left mb2">
                <input type={ this.props.type } className="form-control primary" placeholder={ this.props.placeholder } name={ this.props.name } autoComplete={ this.props.autocomplete } />
                <div className="form-control-position">
                    <i className={ `${ this.props.icon } primary b` }></i>
                </div>
            </div>
        );
    }
}

export { InputField };