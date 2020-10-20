import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  FiUser as AccountIcon,
  FiBell as NotificationsIcon,
  FiLock as PrivacyIcon,
} from 'react-icons/fi';

import { useLocation } from 'react-router-dom';
import { Menu, MenuItem } from '../../../components/ui';
import { Container, Paper, Hero } from 'snake-ui';
import {
  SettingsContainer,
  SettingsSidebarContainer,
  SettingsContentContainer,
} from './styles';

import Notifications from './Notifications';
import Privacy from './Privacy';
import AccessAndSecurity from './AccessAndSecurity';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Settings = () => {
  const query: string | null = useQuery().get('tab');

  const settingsMap: { [key: string]: any } = {
    notifications: <Notifications />,
    privacy: <Privacy />,
    access_and_security: <AccessAndSecurity />,
  };

  const Tab = () =>
    query !== null ? (
      settingsMap[query] === null ? (
        <AccessAndSecurity />
      ) : (
        settingsMap[query]
      )
    ) : (
      <AccessAndSecurity />
    );

  return (
    <Container>
      <Hero
        title={
          <FormattedMessage
            id="common.settings"
            description="Título da página de configurações"
          />
        }
        actions
      />
      <SettingsContainer>
        <SettingsSidebarContainer>
          <Paper>
            <Menu>
              <MenuItem
                current={
                  query === 'access_and_security' ||
                  query === null ||
                  settingsMap[query] === undefined
                }
                label={<FormattedMessage id="common.account" />}
                link="/settings?tab=access_and_security"
                icon={<AccountIcon />}
              />
              <MenuItem
                current={query === 'notifications'}
                label={<FormattedMessage id="common.notifications" />}
                link="/settings?tab=notifications"
                icon={<NotificationsIcon />}
              />
              <MenuItem
                current={query === 'privacy'}
                label={<FormattedMessage id="common.privacy" />}
                link="/settings?tab=privacy"
                icon={<PrivacyIcon />}
              />
            </Menu>
          </Paper>
        </SettingsSidebarContainer>
        <SettingsContentContainer>
          <Tab />
        </SettingsContentContainer>
      </SettingsContainer>
    </Container>
  );
};

export default Settings;
