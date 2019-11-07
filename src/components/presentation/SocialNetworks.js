import React from "react";
import { object, arrayOf, shape, string, oneOf } from "prop-types";

import facebookLogo from "../../images/f_logo_RGB-Blue_58.png";
import instagramLogo from "../../images/IG_Glyph_Fill.png";
import twitterLogo from "../../images/Twitter_Logo_Blue.png";
import linkedInLogo from "../../images/LI-In-Bug.png";
import mailLogo from "../../images/mail-logo.png";

import "./SocialNetworks.css";

const logos = {
  facebook: facebookLogo,
  instagram: instagramLogo,
  twitter: twitterLogo,
  linkedin: linkedInLogo,
  mail: mailLogo,
};

const SocialNetworks = ({ style, networks }) => (
  <div style={ style } >
    { 
      networks.map(({ label, href, network }, index) => (
        <span key={ "network-" + index }>
          <a label={ label } href={ href }>
            <img style= {{ border: "none" }} 
                 src={ logos[ network.toLowerCase() ] } 
                 alt={ network } 
                className={ network === "LinkedIn" ? "linkedin-icon" : "icon" } />
          </a>
        </span>
      )) 
    }
  </div>
);

SocialNetworks.propTypes = {
  style: object,
  networks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    network: oneOf(["Facebook", "Instagram", "Twitter"]).isRequired,
  })).isRequired,
};

SocialNetworks.defaultProps = {
  style: undefined,
}

export default SocialNetworks;