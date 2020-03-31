import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../images/LeBliblou.jpg";

import family from "../images/family.png";
import alfredPic from "../images/alfred-tuffreau.jpg";
import helenePic from "../images/helene-lesage.jpeg";
import About from "../components/presentation/About";
import ImagePanel from "../components/view/ImagePanel";
import withScrollTop from "../components/view/withScrollTop";

const bliblou = {
  name: "Le Bliblou",
  title: "Simplement mieux manger",
  picture: family,
  descriptions: [ 
    "Le Bliblou est une application culinaire en ligne qui a pour vocation de simplifier le Manger mieux. Face au enjeux environnementaux mais aussi et surtout à l’impact de nos habitudes alimentaires sur notre santé, il se développe un besoin fort de revenir à une alimentation plus saine et plus juste. Le Bliblou vous aide à dépasser les obstacles au développement de meilleures habitudes alimentaires à domicile ; l’emploi du temps chargé, le manque d’inspiration et de savoir-faire et la “mondialisation” notre alimentation.",
    "Notre désir est d’améliorer l’accessibilité de la cuisine à domicile en proposant des recettes savoureuses qui favorisent une alimentation saine, équilibrée et durable tout en préservant votre temps et vos économies. Il s’adresse aux foyers ayant le désir d’améliorer leurs habitudes alimentaires mais qui manque de temps et de savoir-faire pour y parvenir.",
    "L’application en ligne, accessible depuis navigateur internet et bientôt sur mobile, propose à ses utilisateurs un catalogue de recettes de qualité et de saisons, inspiré de notre terroir et favorisant les produits locaux. Il s’accompagne de fonctionnalités pour simplifier l’organisation des repas à la maison (suggestions et recherche, composition de menus, gestion du panier produits, aide à la cuisine, …)."
  ]
}

const team = [{
  name: "Alfred Tuffreau",
  title: "Fondateur",
  picture: alfredPic,
  descriptions: [ 
    "Passionné par les nouvelles technologies informatiques mais aussi soucieux des challenges environnementaux, économiques et sociaux qui se présentent, j'ai entrepris la création du Bliblou pour répondre aux désirs d'une alimentation plus saine, durable, pertinente et audacieuce dans le respect de ses consommateurs et de l'environnement.",
    "J’ai eu la chance de grandir dans un foyer où l’alimentation occupait une place importante. Les repas étaient l’occasion de découvrir de nouvelles saveurs et de nous restaurer autours de plats délicieux, sains et nourrissants. 12 ans plus tard, j'ai réalisé que mon alimentation, simple par nécessité, n’avais plus rien d’originale ou de diététique. Le manque d’inspiration mais également de temps pour explorer les possibilités, réaliser les courses et mettre en oeuvre des recettes freine notre désir de prendre plaisir à la cuisine et nous pousse vers des consommations peu respecteuses de notre corps et de l'environnement.",
    "Cependant, nous vivons une période de transition dans notre alimentation et d'une prise de conscience de son impact. Il est clair que nous ne pouvons continuer à profiter des bienfaits de la mondialisation de notre alimentation sans constater les ravages environnementaux qu’elle génère sur notre planète. A cela il faut ajouter l’impact de notre alimentation sur notre organisme avec la consommation excessive de sucre, de gras mais également de produits animalier.", 
    "Pour toutes ces raisons, j'ai choisi de consacrer mon savoir-faire à l'élaboration d'outils numériques pour accompagner les consommateurs dans cette période de transition et qui permettront au plus grand nombre d’améliorer leur alimentation que ce soit pour leur propre bénéfice mais également pour celui de l’environnement ou de la cause animale."
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
  descriptions: [],
}];

const AboutUs = () => (
  <div id="about-us">
    <ImagePanel src={ img }>
      <Container>
        <Row>
          <Col>
            <About { ...bliblou } />
          </Col>
        </Row>
      </Container>
    </ImagePanel>
    <Container className="panel">
      <Row>
        <Col>
          <h1>L'équipe</h1>
          { team.map(member => (
            <>
              <div className="line-separator" />
              <About { ...member }/>
            </>
          )) }
        </Col>
      </Row>
    </Container>
  </div>
);

export default withScrollTop(AboutUs);
