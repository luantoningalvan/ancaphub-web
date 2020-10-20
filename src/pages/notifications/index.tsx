import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../../components/notifications';

import { Container, Hero, Paper, CircularLoader } from 'snake-ui';

import {
  getNotificationsRequest,
  markAllAsReadRequest,
} from '../../actions/notifications';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, loadingNotifications } = useSelector(
    (state: any) => state.notifications
  );

  useEffect(() => {
    dispatch(getNotificationsRequest());
    dispatch(markAllAsReadRequest());
  }, []);

  return (
    <Container>
      <Hero
        title={
          <FormattedMessage
            id="common.notifications"
            description="Título da página de notificações"
          />
        }
        actions
      />

      <div style={{ marginTop: 16 }}>
        {!loadingNotifications ? (
          <>
            {!isEmpty(notifications) ? (
              <Paper>
                <ul style={{ padding: '8px 0px' }}>
                  {notifications.map((notification: any) => (
                    <Notification
                      notification={notification}
                      key={notification.id}
                    />
                  ))}
                </ul>
              </Paper>
            ) : (
              <Paper padding>
                <FormattedMessage id="notifications.noneFound" />
              </Paper>
            )}
          </>
        ) : (
          <Paper
            padding
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularLoader size={72} />
          </Paper>
        )}
      </div>
    </Container>
  );
};

export default Notifications;
