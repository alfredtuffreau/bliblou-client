import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../images/LeBliblou.jpg";

import ImagePanel from "../components/view/ImagePanel";
import withScrollTop from "../components/view/withScrollTop";

const ContactUs = () => (
  <>
    <ImagePanel src={ img } className="text-align-center">
      <Container>
        <Row>
          <Col>
            <h1 >Contactez-nous</h1>
            <p>Nous faisons notre possible pour simplifier la cuisine maison, aidez-nous.</p>
          </Col>
        </Row>
      </Container>
    </ImagePanel>
    <Container className="panel text-align-justify">
      <Row>
        <Col xs={{ span: 12 }} lg={{ span: 6}}>
          <h2>N'hésitez pas à nous écrire pour :</h2>
          <div>
            <h3>Faire part de vos suggestions</h3>
            <p>Le Bliblou est une plateforme en construction. Nous souhaitons vous simplifier la cuisine pour vous aider à mieux manger et de manière plus éco-responsable. Si vous avez des suggestions, nous serons ravis de les consulter.</p>
          </div>
          <div>
            <h3>Signaler un dysfonctionnement</h3>
            <p>Personne n'est parfait et des erreurs peuvent se produire. Faites-nous part de quelconque anomalies, nous ferons tout notre possible pour les résoudre dans les meilleurs délais.</p>
          </div>
          <div>
            <h3>Proposer une collaboration</h3>
            <p>Ensemble on est plus fort. Au Bliblou, on aime la solidarité et le vivre-ensemble alors pourquoi pas se rassembler autour d'un objectif commun.</p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 6}}>
          {/* <SignUp /> */}
        </Col>
      </Row>
    </Container>
  </>
);

export default withScrollTop(ContactUs);
