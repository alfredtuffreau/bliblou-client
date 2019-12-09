import React, { Component } from "react";
import { object } from "prop-types";

import "./withBackgroundImage.css"

function withBackgroundImage(WrappedComponent) {
  class WithBackgroundImage extends Component {
    constructor(props) {
      super(props);
      this.state = { height: 0, overDropzone: false };
      this.divImgRef = React.createRef();
      this.onLoad = this.onLoad.bind(this);
      this.toggleHover = this.toggleHover.bind(this);
    }
    
    onLoad = () => {
      const height = this.divImgRef.current.offsetHeight;
      if (this.state.height !== height) this.setState({ height });
    }

    toggleHover = (hover) => {
      this.setState({ overDropzone: hover });
    }

    render = () => (
      <>
        <div className={ `display-block ${this.state.overDropzone ? "dark-image" : ""}` } ref={ this.divImgRef }>
          <img style={{ maxWidth: "100%" }} 
               onLoad={ this.onLoad } 
               src={ URL.createObjectURL(this.props.file) } 
               alt="RecipePicture" />	
        </div>
        <WrappedComponent { ...this.props }
                          className={ `display-block position-relative ${this.state.overDropzone === false ? "dark-dropzone" : ""}` }
                          style={{ 
                            top: `-${this.state.height}px`, 
                            margin: "8px", 
                            height: `${this.state.height-16}px` 
                          }}
                          onMouseEnter={ () => this.toggleHover(true) } 
                          onMouseLeave={ () => this.toggleHover(false) } />
      </>
    );
  }

  WithBackgroundImage.propTypes = {
    file: object.isRequired,
  };

  return WithBackgroundImage;
}

export default withBackgroundImage;