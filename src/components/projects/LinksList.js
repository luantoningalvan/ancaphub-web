import React from 'react';
import styled from 'styled-components';
import TwitterLogo from 'react-ionicons/lib/LogoTwitter';
import FacebookLogo from 'react-ionicons/lib/LogoFacebook';
import InstagramLogo from 'react-ionicons/lib/LogoInstagram';
import YoutubeLogo from 'react-ionicons/lib/LogoYoutube';
import EmailLogo from 'react-ionicons/lib/IosMail';
import LinkLogo from 'react-ionicons/lib/IosLink';

const LinksListContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px 0px;
  }
  ul li {
    padding: 8px 0px;
  }
  ul li a {
    color: ${(props) => props.theme.palette.text.primary};
  }
  ul li svg {
    float: left;
    fill: ${(props) => props.theme.palette.text.primary};
    margin-right: 8px;
  }
`;

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
    <LinksListContainer>
      <ul>
        {links &&
          links.map((link) => (
            <li key={link.url}>
              {getIcon(link.url)}
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url.split('/')[2]}
              </a>
            </li>
          ))}
      </ul>
    </LinksListContainer>
  );
};

export default LinksList;
