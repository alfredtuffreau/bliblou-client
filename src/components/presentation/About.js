import React from "react";
import { string, arrayOf, shape, oneOf } from "prop-types";
import { ListGroup, Image } from "react-bootstrap";

import SocialNetwork from "./SocialNetwork";

const About = ({ name, title, picture, descriptions, networks }) => (
  <>
    <h2>{ name }</h2>
    <h3>{ title }</h3>
    <Image src={ picture } className="about picture small" roundedCircle />
    { networks
        ? <ListGroup className="social-network-links list-group-horizontal small-margin-bottom">
            { networks.map((network, index) => (
              <ListGroup.Item key={ index }>
                <SocialNetwork { ...network } />
              </ListGroup.Item>)) }
          </ListGroup>
        : null }
    { descriptions && descriptions.map((str, index) => (
      <p key={ "descr-" + index }>{ str }</p>
    )) }
  </>
);

About.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  picture: string.isRequired,
  descriptions: arrayOf(string.isRequired),
  networks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    network: oneOf([ "Facebook", "Instagram", "Twitter", "Mail", "LinkedIn" ]).isRequired,
  }))
};

About.defaultProps = {
  descriptions: undefined,
  networks: undefined
};

export default About;