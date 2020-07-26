import React from 'react';

import TwitterLogo from 'react-ionicons/lib/LogoTwitter';
import FacebookLogo from 'react-ionicons/lib/LogoFacebook';
import InstagramLogo from 'react-ionicons/lib/LogoInstagram';
import YoutubeLogo from 'react-ionicons/lib/LogoYoutube';
import EmailLogo from 'react-ionicons/lib/IosMail';
import LinkLogo from 'react-ionicons/lib/IosLink';

const LinksList = ({ links }) => {
  const getIcon = (url) => {
    if (url.includes('facebook.com' || 'fb.com')) {
      return <FacebookLogo />;
    }
    if (url.includes('twitter.com')) {
      return <TwitterLogo />;
    }
    if (url.includes('instagram.com')) {
      return <InstagramLogo />;
    }
    if (url.includes('yotube.com' || 'youtu.be')) {
      return <YoutubeLogo />;
    }
    if (url.includes('@')) {
      return <EmailLogo />;
    }

    return <LinkLogo />;
  };

  return (
    <ul>
      {links &&
        links.map((link) => (
          <li key={link.url}>
            {getIcon(link.url)}
            <a
              href="http://twitter.com/ancap_hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default LinksList;
