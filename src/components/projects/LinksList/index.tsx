import React from 'react';
import { LinksListContainer } from './styles';
import {
  GrFacebook as FacebookLogo,
  GrTwitter as TwitterLogo,
  GrInstagram as InstagramLogo,
  GrYoutube as YoutubeLogo,
  GrMail as EmailLogo,
  GrAnchor as LinkLogo,
} from 'react-icons/gr';

const LinksList = ({ links }: any) => {
  console.log(JSON.parse(links));
  return null;
  /*
  const getIcon = (url: string) => {
    if (url.includes('facebook.com' || 'fb.com')) {
      return <FacebookLogo />;
    }
    if (url.includes('twitter.com')) {
      return <TwitterLogo />;
    }
    if (url.includes('instagram.com')) {
      return <InstagramLogo />;
    }
    if (url.includes('youtube.com' || 'youtu.be')) {
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
          links.map((link: { url: string }) => (
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
  */
};

export default LinksList;
