import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import { HOME, ABOUT_US, CONTACT_US } from "./Routes";
import SocialNetwork from "../../../components/presentation/SocialNetwork";

export default React.forwardRef((props, ref) => (
  <footer ref={ ref }>
    <Container>
      <Row>
        <Col>
          <p>{ "Des questions ? Contactez-nous : " }
            <a href="mailto:aide-utilisateur@bliblou.com">
              aide-utilisateur@bliblou.com
            </a>
          </p>
          <ListGroup className="social-network-links list-group-horizontal">
            { [ <SocialNetwork label="Le Bliblou sur Instagram"
                               href="https://www.instagram.com/bliblou_fr/"
                               network="Instagram" />,
                <SocialNetwork label="Le Bliblou sur Twitter"
                               href="https://twitter.com/BliblouFR"
                               network="Twitter" />,
                <SocialNetwork label="Le Bliblou sur Facebook"
                               href="https://www.facebook.com/bliblouFR/"
                               network="Facebook" />
              ].map((network, index) => <ListGroup.Item key={ index }>{ network }</ListGroup.Item>) }
          </ListGroup>
          <ListGroup className="nav-links list-group-horizontal-md">
            { [ <Link to={ HOME }><small>Accueil</small></Link>,
                <Link to={ ABOUT_US }><small>À propos</small></Link>,
                <Link to={ CONTACT_US }><small>Nous contacter</small></Link> 
              ].map((link, index) => <ListGroup.Item key={ index }>{ link }</ListGroup.Item>) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </footer>
));