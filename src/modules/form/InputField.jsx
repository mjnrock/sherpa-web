import React, { Component } from 'react';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.Input = React.createRef();
	}

	SanitizeNumber(input) {
		let value = input;

		value = value.replace(/[^0-9.]/g, "").replace(/[.]{2,}/g, ".");
		let match = value.match(/\d+(.?\d+)?/g);
		if(match !== null && (match[0].indexOf(".") > -1 && value.indexOf(".") > -1)) {
			value = match[0];
		}
		if(value === ".") {
			value = "";
		}

		return value;
	}

	OnChange(e) {
		let value = e.currentTarget.value = this.SanitizeNumber(e.currentTarget.value);

		if(this.props.SaveValue) {
			this.props.SaveValue(value);
		}
	}

    render() {
		let inputProps = {};
		for(let key in this.props) {
			if(!["icon", "SaveValue"].includes(key)) {
				inputProps[key] = this.props[key];
			}
		}

        return (
            <div className={ `${ this.props.icon ? "position-relative has-icon-left" : null } mb2` }>
                <input
					{ ...inputProps }
					className={ this.props.className ? this.props.className : "form-control primary" }
					onChange={ this.OnChange.bind(this) }
					ref={ this.Input }
				/>
				{
					this.props.icon
					? <div className="form-control-position">
						<i className={ `${ this.props.icon } ${ this.props.iclassname ? this.props.iclassname : "primary b" }` }></i>
					</div>
					: null
				}
            </div>
        );
    }
}

export { InputField };