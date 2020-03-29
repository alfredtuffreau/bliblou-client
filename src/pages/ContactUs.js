import React from "react";
import { Row, Col } from "react-bootstrap";

import withScrollTop from "../components/view/withScrollTop";

const ContactUs = () => (
  <>
    <div className="image-panel">
      <div className="contact-us">
        <h1 >Contactez-nous</h1>
        <p>Nous faisons notre possible pour simplifier la cuisine maison, aidez-nous.</p>
      </div>
    </div>
    <div className="panel">
      <Row>
        <Col md={{ span:5, offset: 1 }}>
          <h2>N'hésitez pas à nous écrire pour :</h2>
          <div>
            <h3>Faire part de vos suggestions</h3>
            <p>Le Bliblou est une plateforme en construction. Nous souhaitons vous simplifier la cuisine pour vous aider à mieux manger et de manière plus éco-responsable. Si vous avez des suggestions, nous serons ravis de les consulter.</p>
          </div>
          <div>
            <h3>Signalier un disfonctionnement</h3>
            <p>Personne n'est parfait et des erreurs peuvent se produires. Faites nous part de quelconque anomalies, nous ferons tout notre possible pour la résoudre dans les meilleurs délais.</p>
          </div>
          <div>
            <h3>Proposer une collaboration</h3>
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

export default withScrollTop(ContactUs);
