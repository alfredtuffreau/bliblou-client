import React, { Component } from "react";
import { number, bool } from "prop-types";
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
    const { navbarHeight, footerHeight, isAuthenticated } = this.props;
    
    const back = { to: "#", onClick: this.handleOnClick, label: "Page précédente" };
    const home = { to: HOME, label: "Page d'accueil" };
    const login = { to: LOGIN, label: "S'identifier" };
    
    const links = [ back, home ];
    if (!isAuthenticated) links.push(login);
    
    return (
      <div id="not-found">
        <ImagePanel src={ img } minHeight={ `calc(100vh - ${navbarHeight}px - ${footerHeight}px)` }>
          <Container>
            <Row>
              <Col>
                <h2>Oups, page introuvable</h2>
                <h3>La page que vous recherchez a peut-être été supprimée.</h3>
                <img src={ icon } className="icon large center" alt="Not found" />
                { links
                    ? <ListGroup className="nav-links  list-group-horizontal-md justify-content-center">
                        { links.map(({ to, onClick, label }, index) => (
                          <ListGroup.Item key={ index }>
                            <NavLink to={ to } onClick={ onClick }>{ label }</NavLink>
                          </ListGroup.Item>
                        )) }
                      </ListGroup>
                    : null }
              </Col>
            </Row>
          </Container>
        </ImagePanel>
      </div>
    );
  }
}

NotFound.propTypes = {
  navbarHeight: number,
  footerHeight: number,
  isAuthenticated: bool
}

NotFound.defaultProps = {
  navbarHeight: 0,
  footerHeight: 0,
  isAuthenticated: false
}

export default withScrollTop(NotFound);
