import React from 'react';
import { Footer, SocialNetworks, FooterLinks, FooterLinkItem } from './styles';
import { Link } from 'react-router-dom';

import { GrFacebook, GrYoutube, GrInstagram, GrTwitter } from 'react-icons/gr';
import { FormattedMessage } from 'react-intl';

const FooterInfo: React.FC = () => {
  return (
    <Footer>
      <FooterLinks>
        <SocialNetworks>
          <li>
            <a href="https://facebook.com/ancaphub" target="_blank">
              <GrFacebook />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/ancaphub" target="_blank">
              <GrYoutube />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ancaphub" target="_blank">
              <GrTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/ancaphub" target="_blank">
              <GrInstagram />
            </a>
          </li>
        </SocialNetworks>
        <FooterLinkItem>
          <a href="https://apoia.se/ancaphub" target="_blank">
            <FormattedMessage id="container.donations.title" />
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <a href="https://developers.ancaphub.com" target="_blank">
            <FormattedMessage id="common.developers" />
          </a>
        </FooterLinkItem>
        <FooterLinkItem>
          <Link to="/signin">Alpha</Link>
        </FooterLinkItem>
      </FooterLinks>
    </Footer>
  );
};

export default FooterInfo;
