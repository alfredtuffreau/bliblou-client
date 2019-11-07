import React from "react";
import { Row, Col } from "react-bootstrap";

import withScrollTop from "../components/view/withScrollTop";
import { withNavbarAndBackground, withFooter } from "../modules/Navigation";
// import SignUp from "../modules/SignUp";

const ContactUs = () => (
  <>
    <div className="dark-panel">
      <div className="content centered-content large-margin-top large-margin-bottom">
        <h1 >Contactez-nous</h1>
        <p>Nous faisons notre possible pour simplifier la cuisine maison, aidez-nous.</p>
      </div>
    </div>
    <div className="bottom-black-panel">
      <Row className="content justified-content">
        <Col md={{ span:5, offset: 1 }}>
          <h2 className="medium-margin-bottom">N'hésitez pas à nous écrire pour :</h2>
          <div className="medium-margin-bottom">
            <h3 className="pink">Faire part de vos suggestions</h3>
            <p>Le Bliblou est une plateforme en construction. Nous souhaitons vous simplifier la cuisine pour vous aider à mieux manger et de manière plus éco-responsable. Si vous avez des suggestions, nous serons ravis de les consulter.</p>
          </div>
          <div className="medium-margin-bottom">
            <h3 className="pink">Signalier un disfonctionnement</h3>
            <p>Personne n'est parfait et des erreurs peuvent se produires. Faites nous part de quelconque anomalies, nous ferons tout notre possible pour la résoudre dans les meilleurs délais.</p>
          </div>
          <div className="medium-margin-bottom">
            <h3 className="pink">Proposer une collaboration</h3>
            <p>Ensemble on est plus fort. Au Bliblou, on aime la solidarité et le vivre-ensemble alors pourquoi pas se rassembler autour d'un objectif commun.</p>
          </div>
        </Col>
        <Col md={{ span:4, offset: 1 }}>
          {/* <SignUp /> */}
        </Col>
      </Row>
    </div>
  </>
);

export default [ 
  withScrollTop, 
  withNavbarAndBackground,
  withFooter,
].reduce((acc, op) => op(acc), ContactUs);
