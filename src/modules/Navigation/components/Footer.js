import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import facebook from "../../../images/f_logo_RGB-Blue_58.png";
import instagram from "../../../images/IG_Glyph_Fill.png";

import "./Footer.css";
import { HOME, ABOUT, CONTACT_US } from "./Routes";

export default () => (
  <footer className="Footer">
    <Row noGutters>
      <Col md={{ offset:1, span:10 }}>
        <p>Des questions ? Contactez-nous : <a href="mailto:aide-utilisateur@bliblou.com">
        aide-utilisateur@bliblou.com</a></p>
        <div style={{ overflow: "auto" }}>
          <div style={{ float: "left" }} className="Links">
            { [ <Link key="footer-link-1" to={ HOME }>Accueil</Link>,
                <Link key="footer-link-2" to={ ABOUT }>À propos</Link>,
                <Link key="footer-link-3" to={ CONTACT_US }>Nous contacter</Link> ] }
          </div>
          <div style={{ float: "right" }} >
            <a label="Le Bliblou sur Facebook" href="https://www.facebook.com/bliblouFR/">
              <img src={ facebook } alt="Facebook" className="Icon" />
            </a>
            <a label="Le Bliblou sur Facebook" href="https://www.instagram.com/bliblou_fr/">
              <img src={ instagram } alt="Instagram" className="Icon" />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </footer>
);