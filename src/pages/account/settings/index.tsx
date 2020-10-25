import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  FiUser as AccountIcon,
  FiBell as NotificationsIcon,
  FiLock as PrivacyIcon,
} from 'react-icons/fi';

import { useHistory, useLocation } from 'react-router-dom';
import { Container, Paper, Hero, List, ListItem } from 'snake-ui';
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
  const { push } = useHistory();
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
            <List>
              <ListItem
                current={
                  query === 'access_and_security' ||
                  query === null ||
                  settingsMap[query] === undefined
                }
                label={<FormattedMessage id="common.account" />}
                onClick={() => push('/settings?tab=access_and_security')}
                icon={<AccountIcon />}
              />
              <ListItem
                current={query === 'notifications'}
                label={<FormattedMessage id="common.notifications" />}
                onClick={() => push('/settings?tab=notifications')}
                icon={<NotificationsIcon />}
              />
              <ListItem
                current={query === 'privacy'}
                label={<FormattedMessage id="common.privacy" />}
                onClick={() => push('/settings?tab=privacy')}
                icon={<PrivacyIcon />}
              />
            </List>
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
