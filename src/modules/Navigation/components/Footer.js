import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { HOME, ABOUT_US, CONTACT_US } from "./Routes";
import SocialNetworks from "../../../components/presentation/SocialNetworks";

export default () => (
  <footer>
    <Row noGutters>
      <Col md={{ offset:1, span:10 }}>
        <p>{ "Des questions ? Contactez-nous : " }
          <a href="mailto:aide-utilisateur@bliblou.com">
            aide-utilisateur@bliblou.com
          </a>
        </p>
        <div className="page-links">
          { [ <Link key="footer-link-1" to={ HOME }><small>Accueil</small></Link>,
              <Link key="footer-link-2" to={ ABOUT_US }><small>À propos</small></Link>,
              <Link key="footer-link-3" to={ CONTACT_US }><small>Nous contacter</small></Link> ] }
        </div>
        <SocialNetworks networks={[ 
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
      </Col>
    </Row>
  </footer>
);