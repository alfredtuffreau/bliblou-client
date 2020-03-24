import React, { Component } from "react";
import { bool, string, func } from "prop-types";

class Dropzone extends Component {
  constructor(props) {
    super(props);

    this.state = { hightlight: false, height: 0 };
    this.fileInputRef = React.createRef();
    this.divImgRef = React.createRef();
    this.onFilesAdded = this.onFilesAdded.bind(this);
  }
    
  onLoad = () => {
    const height = this.divImgRef.current.offsetHeight;
    if (this.state.height !== height) this.setState({ height });
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
    const { src, label, disabled } = this.props;
    const { hightlight, height } = this.state;
    const dropzoneInputClass = "dropzone-input".concat(`${src ? " with-image" : ""}`)
                                               .concat(`${disabled ? " disabled" : ""}`)
                                               .concat(`${hightlight ? " highlight" : ""}`);
      
    return (
      <div className="dropzone" style={{ height: height ? `${height}px` : undefined }}>
        { !src ? <></> : <img src={ src } 
                              alt="RecipePicture"
                              onLoad={ () => this.onLoad() } 
                              ref={ this.divImgRef } /> }	
        <div className={ dropzoneInputClass }
             style={{ top: `-${height}px`, height: `${height}px` }}
             onDrop={ (event) => this.onDrop(event) }
             onDragOver={ (event) => this.onDragOver(event) }
             onDragLeave={ () => this.onDragLeave() }
             onClick={ () => this.openFileDialog() }>
          <img alt="upload"
              className="icon"
              src="../../cloud_upload-24px.svg" />
          <input ref={ this.fileInputRef }
                className="file-input"
                type="file"
                multiple
                onChange={ this.onFilesAdded } />
          { label }
        </div>
      </div>
    );
  }
}

Dropzone.propTypes = {
  src: string,
  label: string.isRequired,
  disabled: bool,
  onFilesAdded: func.isRequired
};

Dropzone.defaultProps = {
  src: undefined, 
  disabled: false
};

export default Dropzone;