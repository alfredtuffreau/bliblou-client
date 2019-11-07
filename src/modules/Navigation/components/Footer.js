import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./Footer.css";
import { HOME, ABOUT_US, CONTACT_US } from "./Routes";
import SocialNetworks from "../../../components/presentation/SocialNetworks";

export default () => (
  <footer className="Footer">
    <Row noGutters>
      <Col md={{ offset:1, span:10 }}>
        <p>Des questions ? Contactez-nous : <a href="mailto:aide-utilisateur@bliblou.com">
        aide-utilisateur@bliblou.com</a></p>
        <div style={{ overflow: "auto" }}>
          <div style={{ float: "left" }} className="Links">
            { [ <Link key="footer-link-1" to={ HOME }>Accueil</Link>,
                <Link key="footer-link-2" to={ ABOUT_US }>À propos</Link>,
                <Link key="footer-link-3" to={ CONTACT_US }>Nous contacter</Link> ] }
          </div>
          <SocialNetworks style={{ float: "right" }}
                          networks={[ 
                            {
                              label: "Le Bliblou sur Instagram",
                              href: "https://www.instagram.com/bliblou_fr/",
                              network: "Instagram",
                            },
                            {
                              label: "Le Bliblou sur Twitter",
                              href: "https://twitter.com/BliblouFR",
                              network: "Twitter",
                            },
                            {
                              label: "Le Bliblou sur Facebook",
                              href: "https://www.facebook.com/bliblouFR/",
                              network: "Facebook",
                            }
                         ]} />
        </div>
      </Col>
    </Row>
  </footer>
);