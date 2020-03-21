import React, { Component } from "react";
import { object, shape, bool, string, func } from "prop-types"
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Dropzone from "../../../components/utils/Dropzone";
import withBackgroundImage from "../../../components/view/withBackgroundImage";

import RecipeForm from "./RecipeForm";

const DropzoneWithBackgroundImage = withBackgroundImage(Dropzone);

class RecipeEditor extends Component {
  constructor(props) {
    super(props);
    this.handleOnFilesAdded = this.handleOnFilesAdded.bind(this);
  }

  componentWillMount = () => {
    const { id, onLoad, history } = this.props;
    if (id) onLoad(id, history);
  }

  componentWillUnmount = () => {
    const { picture, clear } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    clear();
  }

  handleOnFilesAdded(files) {
    const { picture, onFilesAdded } = this.props;
    if (picture) URL.revokeObjectURL(picture.url);
    
    const { name, type, lastModified } = files[0];
    const url = URL.createObjectURL(files[0])
    onFilesAdded(url, name, type, lastModified);
  }

  render = () => {
    const { 
      id, picture, currentPicture, content, isLoading, onChange, onBlur, onHover, onSubmit, onCancel 
    } = this.props;

    return (
      <Row className="recipe-editor">
        <Col md={{ span:5 }}>
          { picture
            ? <DropzoneWithBackgroundImage label="Changer de fichier" 
                                           onFilesAdded={ this.handleOnFilesAdded }
                                           src={ picture.url } />
            : <Dropzone label="Déposer un fichier" 
                        onFilesAdded={ this.handleOnFilesAdded } /> }
        </Col>
        <Col md={{ span:7 }}> 
          <RecipeForm id={ id }
                      picture={ picture } 
                      currentPicture={ currentPicture } 
                      content={ content } 
                      isLoading={ isLoading } 
                      onChange={ onChange } 
                      onBlur={ onBlur } 
                      onHover={ onHover } 
                      onSubmit={ onSubmit }
                      onCancel={ onCancel } />
        </Col>
      </Row>
    );
  }
};

RecipeEditor.propTypes = {
  id: string,
  picture: object,
  currentPicture: string,
  content: shape({ value: string, isValid: bool }),
  onFilesAdded: func.isRequired,
	isLoading: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
	onHover: func.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

RecipeEditor.defaultProps = {
  id: undefined,
  picture: undefined,
  currentPicture: undefined,
  content: { value: undefined, isValid: undefined, showTooltip: false },
  isLoading : false,
};

export default withRouter(RecipeEditor);
