import React from "react";
import { string, arrayOf, shape, oneOf } from "prop-types";
import { Image } from "react-bootstrap";

import "./About.css";
import SocialNetworks from "./SocialNetworks";

const About = ({ name, title, picture, descriptions, networks }) => (
  <div className="margin-bottom-16">
    <h2>{ name }</h2>
    <h3>{ title }</h3>
    <div>
      <Image src={ picture } className="about-image" roundedCircle />
      { 
        networks 
          ? <SocialNetworks networks={ networks } /> 
          : null 
      }
      { 
        descriptions && descriptions.map((str, index, arr) => (
          <p className={ index < arr.length - 1 ? "" : "no-margin" } key={ "descr-" + index }>
            { str }
          </p>
        )) 
      }
    </div>
  </div>
);

About.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  picture: string.isRequired,
  descriptions: arrayOf(string.isRequired),
  networks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    network: oneOf(["Facebook", "Instagram", "Twitter"]).isRequired,
  }))
};

About.defaultProps = {
  networks: undefined,
  descriptions: undefined
};

export default About;