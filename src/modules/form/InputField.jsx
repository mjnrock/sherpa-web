import React, { Component } from 'react';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Value: ""
		};
	}

	OnChange(e) {		
		if(this.props.SaveValue) {
			this.props.SaveValue(e.target.Value);
		}

		this.setState({
			Value: e.target.Value
		});
	}

    render() {
		let inputProps = {};
		for(let key in this.props) {
			if(!["icon"].includes(key)) {
				inputProps[key] = this.props[key];
			}
		}

        return (
            <div className={ `${ this.props.icon ? "position-relative has-icon-left" : null } mb2` }>
                <input
					{ ...inputProps }
					className={ this.props.className ? this.props.className : "form-control primary" }
					onChange={ this.OnChange.bind(this) }
					value={ this.state.Value }
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