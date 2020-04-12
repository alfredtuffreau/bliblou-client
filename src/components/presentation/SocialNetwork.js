import React from "react";
import { string, oneOf } from "prop-types";

import facebookLogo from "../../images/f_logo_RGB-Blue_58.png";
import instagramLogo from "../../images/IG_Glyph_Fill.png";
import twitterLogo from "../../images/Twitter_Logo_Blue.png";
import linkedInLogo from "../../images/LI-In-Bug.png";
import mailLogo from "../../images/mail-logo.png";

const logos = {
  facebook: facebookLogo,
  instagram: instagramLogo,
  twitter: twitterLogo,
  linkedin: linkedInLogo,
  mail: mailLogo,
};

const SocialNetwork = ({ label, href, network }) => (
  <a label={ label } href={ href }>
    <img src={ logos[ network.toLowerCase() ] } 
         alt={ network } 
         className={ `icon ${network === "LinkedIn" ? " linkedin" : ""}` } />
  </a>
);

SocialNetwork.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  network: oneOf([ "Facebook", "Instagram", "Twitter", "Mail", "LinkedIn" ]).isRequired,
};

export default SocialNetwork;