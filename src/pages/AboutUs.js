import React from "react";
import { Row, Col } from "react-bootstrap";

import family from "../images/family.png";
import alfredPic from "../images/alfred-tuffreau.jpg";
import helenePic from "../images/helene-lesage.jpeg";
import About from "../components/presentation/About";
import withScrollTop from "../components/view/withScrollTop";

const bliblou = {
  name: "Le Bliblou",
  title: "Une affaire de famille",
  picture: family,
  descriptions: [ 
    "Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit.",
    "Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo inediae propinquantis aerumnas exitialis horrebant.",
    "Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo inediae propinquantis aerumnas exitialis horrebant."
  ]
}

const team = [{
  name: "Alfred Tuffreau",
  title: "Fondateur & CEO",
  picture: alfredPic,
  descriptions: [ 
    "Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit.",
  ],
  networks: [  
    {
      label: "Alfred par email",
      href: "mailto:alfred-tuffreau@bliblou.com",
      network: "Mail",
    }, 
    {
      label: "Alfred sur LinkedIn",
      href: "https://www.linkedin.com/in/alfred-tuffreau/",
      network: "LinkedIn",
    },
    {
      label: "Alfred sur Twitter",
      href: "https://twitter.com/frou35",
      network: "Twitter",
    },
    {
      label: "Alfred sur Instagram",
      href: "https://www.instagram.com/alfredtuffreau/",
      network: "Instagram",
    }
  ]
},
{
  name: "Hélène Lesage",
  title: "Créatrice culinaire",
  picture: helenePic,
  descriptions: [ 
    "Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit.",
  ],
}];

const AboutUs = () => (
  <>
    <div className="dark-panel">
      <Row className="content justified-content">
        <Col md={{ span:8, offset: 2 }}>
          <About { ...bliblou } />
        </Col>
      </Row>
    </div>
    <div className="bottom-black-panel">
      <Row className="content justified-content">
        <Col md={{ span:8, offset: 2 }}>
          <h1>L'équipe</h1>
        </Col>
      </Row>
      {
        team.map(member => (
          <Row className="content justified-content">
            <Col md={{ span:8, offset: 2 }}>
              <div className="line-separator small-margin-bottom" />
              <About { ...member } />
            </Col>
          </Row>
        ))
      }
    </div>
  </>
);

export default withScrollTop(AboutUs);
