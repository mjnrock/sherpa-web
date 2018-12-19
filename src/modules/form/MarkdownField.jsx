import React, { Component } from "react";
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";

class MarkdownField extends Component {
	constructor(props) {
		super(props);

		this.TextArea = React.createRef();
	}

    componentDidMount() {
        this.SimpleMDE = new SimpleMDE({
			element: this.TextArea.current,
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
				"guide",
				{
					name: "current-time",
					action: (editor) => {
						editor.codemirror.doc.replaceSelection(`${ this.props.TrackData.ElapsedTime.toFixed(3) }`);
					},
					className: "ft-clock",
					title: "Current Timestamp (Alt-I)"
				},
				{
					name: "mask-start",
					action: (editor) => console.log(editor),
					className: "fa fa-hourglass-start",
					title: "Selection Time Start (Alt-U)"
				},
				{
					name: "mask-end",
					action: (editor) => console.log(editor),
					className: "fa fa-hourglass-end",
					title: "Selection Time End (Alt-O)"
				}
			],

            placeholder: "Enter a Comment..."
		});
		this.SimpleMDE.codemirror.addKeyMap({
			"Alt-A": (cm) => cm.execCommand("selectAll"),
			"Alt-U": (cm) => {
				if(this.props.CommentMask && this.props.CommentMask.MaskStart) {
					cm.doc.replaceSelection(`${ this.props.CommentMask.MaskStart }`)
				}
			},
			"Alt-I": (cm) => {
				if(this.props.TrackData && this.props.TrackData.ElapsedTime) {
					cm.doc.replaceSelection(`${ this.props.TrackData.ElapsedTime.toFixed(3) }`)
				}
			},
			"Alt-O": (cm) => {
				if(this.props.CommentMask && this.props.CommentMask.MaskEnd) {
					cm.doc.replaceSelection(`${ this.props.CommentMask.MaskEnd }`)
				}
			}
		});
		
		this.SimpleMDE.codemirror.on("change", this.OnTextAreaChange.bind(this));
	}
	
    OnTextAreaChange(e) {
		if(this.props.SaveValue) {
			this.props.SaveValue(this.SimpleMDE.value());
		}
	}
	
	render() {
		return (
			<textarea
				className="form-control primary"
				placeholder="Enter a comment..."
				style={{
					resize: "none",
					height: "100px",
					boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 6px -2px"
				}}
				onChange={ this.OnTextAreaChange.bind(this) }
				ref={ this.TextArea }
			></textarea>
		);
	}
}

export default MarkdownField;