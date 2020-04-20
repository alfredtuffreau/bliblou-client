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
    "Le Bliblou est une application culinaire en ligne qui a pour vocation de simplifier le « manger mieux ». Face aux enjeux environnementaux, mais aussi et surtout à l’impact de nos habitudes alimentaires sur notre santé, se développe un besoin fort de revenir à une alimentation plus saine et plus juste. Le Bliblou vous aide à dépasser les obstacles au développement de meilleures habitudes alimentaires à domicile : l’emploi du temps chargé, le manque d’inspiration et de technique et la “mondialisation” de notre alimentation.",
    "Notre désir est d’améliorer l’accessibilité de la cuisine à domicile en proposant des recettes savoureuses qui favorisent une alimentation saine, équilibrée et durable tout en préservant votre temps et vos économies. Ainsi, Le Biblou s’adresse aux foyers souhaitant corriger leurs habitudes alimentaires mais qui manquent de temps et de savoir-faire pour y parvenir.",
    "L’application en ligne, accessible depuis navigateur internet et mobile, propose à ses utilisateurs un catalogue de recettes de qualité et de saison, inspirées de notre terroir et privilégiant les produits locaux. Elle est enrichie de fonctionnalités destinées à simplifier l’organisation des repas à la maison (suggestions et recherche, composition de menus, gestion du panier produits, aide à la cuisine...)."
  ]
}

const team = [{
  name: "Alfred Tuffreau",
  title: "Fondateur",
  picture: alfredPic,
  descriptions: [ 
    "Passionné par les nouvelles technologies informatiques mais aussi soucieux des challenges environnementaux, économiques et sociaux auxquels nos sociétés doivent faire face, j'ai entrepris la création du Bliblou pour répondre aux aspirations à une alimentation plus saine, durable, raisonnée et conviviale, dans le respect de des consommateurs et de l'environnement.",
    "J’ai eu la chance de grandir dans un foyer où l’alimentation occupait une place importante. Les repas étaient l’occasion de découvrir de nouvelles saveurs et de nous restaurer grâce à des plats délicieux, sains et nourrissants. 12 ans plus tard, j'ai réalisé que mon alimentation, simple par nécessité, n’avait plus rien d’original ou de diététique. Le manque d’inspiration mais également de temps pour explorer les possibilités, faire les courses et mettre en œuvre des recettes freine nos envies de cuisine et nous pousse vers des habitudes alimentaires peu respectueuses de notre corps et de l'environnement.",
    "Cependant, nous vivons une période de transition dans notre rapport à l’alimentation et de prise de conscience quant à son impact. Il est clair que nous ne pouvons continuer à profiter des avantages de la mondialisation pour notre alimentation et ignorer les ravages qu’elle fait peser sur la planète et le monde animal. À cela il faut ajouter l’impact de notre alimentation sur notre organisme avec la consommation excessive de sucre, de gras et de produits industriels.", 
    "Pour toutes ces raisons, j'ai choisi de consacrer mon savoir-faire à l'élaboration d'outils numériques pour accompagner les consommateurs dans cette période de transition. J’espère qu’ils pourront permettre à chacun d’améliorer son alimentation que ce soit pour son propre bénéfice mais également pour celui de l’environnement ou de la cause animale."
  ],
  networks: [  
    {
      label: "Alfred par e-mail",
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
    "Mon expérience culinaire, je l’ai acquise au cours des ans. Rien ne me prédisposait particulièrement à devenir cuisinière si ce n’est répéter les gestes familiaux, satisfaire ma propre gourmandise et régaler mes proches, famille et amis. Mais à bien y réfléchir, tout n’est-il pas déjà là, dans ces quelques notions ?",
    "À voir cuisiner mère, grands-mères et tantes (et oui, à cette époque révolue, c’étaient les femmes qui assuraient les repas familiaux) j’ai développé la mémoire de tours de main, de saveurs et surtout d’alliances entre ces saveurs que j’ai tenté de reproduire ensuite. Au fil du temps, j’ai compulsé nombre de livres et magazines culinaires, j’ai aussi tenté mes propres expériences. J’ai regardé avec amour des légumes cuire doucement dans une poêle, un gâteau gonfler dans le four, une sauce réduire pour devenir onctueuse, une viande griller, un fruit caraméliser. Et j’ai adoré plus encore voir la tablée se pourlécher les babines en voyant un plat sortir du four.",
    "Puis un jour, j’ai sauté le pas pour ouvrir mon propre restaurant : un lieu pouvant accueillir une trentaine de personnes, servant des repas de saison, faits maison et où la carte, certes restreinte, variait chaque jour. J’ai pris beaucoup de plaisir à régaler mes clients et plus encore à transmettre mon savoir et mon expérience à ceux qui ont travaillé avec moi et qui ont depuis tracé leur chemin dans cette voie.",
    "C’est pour cette raison qu’il m’a semblé naturel de prêter mon concours à Alfred et de participer à son projet. Il me tient à cœur de continuer à transmettre dans le but de vous voir améliorer vos pratiques culinaires et de vous permettre de faire en confiance, et petit à petit, vos propres expériences autour des fourneaux pour qu’à terme vous soyez plus savants en matière de produits, de savoir-faire ou de gestion du temps. Jusqu’à élaborer vos propres petits plats, tout droit sortis de votre imagination..."
  ]
}];

const AboutUs = () => (
  <div className="text-align-justify">
    <ImagePanel src={ img }>
      <Container>
        <Row>
          <Col lg={{ offset: 1, span: 10 }} xl={{ offset: 2, span: 8 }}>
            <About { ...bliblou } />
          </Col>
        </Row>
      </Container>
    </ImagePanel>
    <Container className="panel">
      <Row>
        <Col lg={{ offset: 1, span: 10 }} xl={{ offset: 2, span: 8 }}>
          <h1>L'équipe</h1>
          { team.map((member, index) => (
            <div key={ index }>
              <div className="line-separator" />
              <About { ...member }/>
            </div>
          )) }
        </Col>
      </Row>
    </Container>
  </div>
);

export default withScrollTop(AboutUs);
