import React from 'react';
import { FooterNavigation, SideNavigation } from './styles';

import ItemLinkList from './ItemLinkList';
import ProfileLink from './ProfileLink';

interface NavigationProps {
  user: {
    username: string;
    avatar_url: string;
  };
}

const Navigation: React.FC<NavigationProps> = ({ user }) => {
  const NavigationContent = () => (
    <>
      <ProfileLink user={user} />
      <ItemLinkList />
    </>
  );

  return (
    <>
      <SideNavigation>
        <NavigationContent />
      </SideNavigation>
      <FooterNavigation>
        <NavigationContent />
      </FooterNavigation>
    </>
  );
};

export default Navigation;
