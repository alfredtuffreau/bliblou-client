import React, { Component } from "react";
import { bool } from "prop-types";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";




import img from "../images/LeBliblou.jpg";
import icon from "../images/fire.png";
import ImagePanel from "../components/view/ImagePanel";
import withScrollTop from "../components/view/withScrollTop";
import { HOME, LOGIN } from "../modules/Navigation";

class NotFound extends Component {
  handleOnClick = () => {
    this.props.history.goBack();
  }

  render() {
    const { footerHeight, isAuthenticated } = this.props;
    
    const back = { key: "back", to: "#", onClick: this.handleOnClick, label: "Page précédente" };
    const home = { key: "home", to: HOME, label: "Page d'accueil" };
    const login = { key: "login", to: LOGIN, label: "S'identifier" };
    
    const links = [ back, "|", home ];
    if (!isAuthenticated) links.push("|", login);
    
    return (
      <ImagePanel src={ img } navbarHeight={ 70 } footerHeight={ footerHeight } fullScreen>
        <Container className="not-found">
          <Row>
            <Col>
              <h2>Oups, page introuvable</h2>
              <h3>La page que vous recherchez a peut-être été supprimée.</h3>
              <img src={ icon } className="icon large" alt="Not found" />
              { links
                  ? <ListGroup className="nav-links  list-group-horizontal-md justify-content-center">
                      { links.map(({ key, to, onClick, label }) => (
                        <ListGroup.Item>
                          <NavLink key={ key } to={ to } onClick={ onClick }>{ label }</NavLink>
                        </ListGroup.Item>
                      )) }
                    </ListGroup>
                  : null }
            </Col>
          </Row>
        </Container>
      </ImagePanel>
    );
  }
}

NotFound.propTypes = {
  isAuthenticated: bool
}

NotFound.defaultProps = {
  isAuthenticated: false
}

export default withScrollTop(NotFound);
