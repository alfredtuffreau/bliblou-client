import React, { Component } from "react";
import { object, bool, string, func } from "prop-types";
import "./Dropzone.css";

class Dropzone extends Component {
  constructor(props) {
    super(props);
    
    this.state = { hightlight: false };
    
    this.fileInputRef = React.createRef();
    
    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  
  onDragOver(event) {
    event.preventDefault();
    const { disabled } = this.props;
    
    if (disabled) return;
    this.setState({ hightlight: true });
  }

  onDragLeave() {
    this.setState({ hightlight: false });
  }

  onMouseEnter = () => {
    this.props.onMouseEnter();
  }

  onMouseLeave = () => {
    this.props.onMouseLeave();
  }

  onDrop(event) {
    event.preventDefault();
    const { disabled, onFilesAdded } = this.props;

    if (disabled) return;
    if (onFilesAdded) {
      const array = this.fileListToArray(event.dataTransfer.files);
      onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  }

  openFileDialog() {
    const { disabled } = this.props;
    
    if (disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded({ target: { files } }) {
    const { disabled, onFilesAdded } = this.props;
    
    if (disabled) return;
    if (onFilesAdded) {
      const array = this.fileListToArray(files);
      onFilesAdded(array);
    }
  }

  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  render() {
    const { label, className, style, disabled } = this.props;
    const { hightlight } = this.state;

    return (
      <div className={ `dropzone ${className ? className : ""} ${hightlight ? "highlight" : ""}` }
           onDragOver={ this.onDragOver }
           onDragLeave={ this.onDragLeave }
           onMouseEnter={ this.onMouseEnter }
           onMouseLeave={ this.onMouseLeave }
           onDrop={ this.onDrop }
           onClick={ this.openFileDialog }
           style={ Object.assign({}, style, { cursor: disabled ? "default" : "pointer" }) }>
        <img alt="upload"
             className="icon"
             src="../../cloud_upload-24px.svg" />
        <input ref={ this.fileInputRef }
               className="file-input"
               type="file"
               multiple
               onChange={ this.onFilesAdded } />
        <span>{ label }</span>
      </div>
    );
  }
}

Dropzone.propTypes = {
  label: string.isRequired,
  className: string,
  style: object,
  disabled: bool,
  onFilesAdded: func.isRequired,
  onMouseEnter: func,
  onMouseLeave: func,
};

Dropzone.defaultProps = { 
  className: undefined,
  style: undefined,
  disabled: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default Dropzone;