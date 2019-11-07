import React from "react";
import { string, arrayOf, shape, oneOf } from "prop-types";
import { Image } from "react-bootstrap";

import "./About.css";
import SocialNetworks from "./SocialNetworks";

const About = ({ name, title, picture, descriptions, networks }) => (
  <>
    <h2>{ name }</h2>
    <h3>{ title }</h3>
    <div>
      <Image src={ picture } className="about-image" roundedCircle />
      { 
        descriptions.map((str, index, arr) => {
          if (index < arr.length - 1) return <p key={ "descr-" + index }>{ str }</p>
          return <p className="no-margin" key={ "descr-" + index }>{ str }</p>
        }) 
      }
      { 
        networks 
          ? <SocialNetworks networks={ networks } /> 
          : null 
      }
    </div>
  </>
);

About.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  picture: string.isRequired,
  descriptions: arrayOf(string.isRequired).isRequired,
  networks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    network: oneOf(["Facebook", "Instagram", "Twitter"]).isRequired,
  }))
};

About.defaultProps = {
  networks: undefined,
};

export default About;