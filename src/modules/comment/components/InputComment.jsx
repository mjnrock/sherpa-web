import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";

import Actions from "./../actions/package";

class InputComment extends Component {
    componentDidMount() {
        this.SimpleMDE = new SimpleMDE({
			element: document.getElementById("audioComment"),
			autosave: {
				enabled: true,
				uniqueId: "audioComment",
				delay: "1000"
			},

            hideIcons: [
				"heading",
				"clean-block"
			],

            //? https://github.com/sparksuite/simplemde-markdown-editor
            showIcons: [
				"bold",
				"italic",
				"strikethrough",
				"heading-1",
				"heading-2",
				"heading-3",
				"heading-smaller",
				"heading-bigger",
				"code",
				"quote",
				"unordered-list",
				"ordered-list",
				"link",
				"image",
				"table",
				"horizontal-rule",
				"preview",
				"side-by-side",
				"fullscreen",
				"guide"
			],
            toolbar: [
				"bold",
				"italic",
				"strikethrough",
				"|",
				"heading-smaller",
				"heading-bigger",
				"|",
				"table",
				"unordered-list",
				"ordered-list",
				"code",
				"|",
				"link",
				"image",
				"|",
				"side-by-side",
				"fullscreen",
				"|",
				"guide"
			],

            placeholder: "Enter a Comment..."
		});
		
		this.SimpleMDE.codemirror.on("change", this.OnTextAreaChange.bind(this));
	}
	
    OnTextAreaChange(e) {
		this.props.SendCommentValue(this.SimpleMDE.value());
	}
	
	render() {
		return (
			<textarea
				className="form-control primary"
				placeholder="Enter a comment..."
				id="audioComment"
				style={{
					resize: "none",
					height: "100px",
					boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
				}}
				onChange={ this.OnTextAreaChange.bind(this) }
			></textarea>
		);
	}
}

export default connect(
	(state) => ({
		CommentValue: state.XXC_CommentValue
	}),
	(dispatch) => ({
		SendCommentValue: (value) => dispatch(Actions.CommentValue.CommentValue(value))
	})
)(InputComment);