import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../../components/notifications';

import { Container, Hero, Paper, Spinner } from '../../components/ui';

import {
  getNotificationsRequest,
  markAllAsReadRequest,
} from '../../actions/notifications';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, loadingNotifications } = useSelector(
    (state) => state.notifications
  );

  useEffect(() => {
    dispatch(getNotificationsRequest());
    dispatch(markAllAsReadRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      />

      <div style={{ marginTop: 16 }}>
        {!loadingNotifications ? (
          <>
            {!isEmpty(notifications) ? (
              <Paper>
                <ul style={{ padding: '8px 0px' }}>
                  {notifications.map((notification) => (
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
            <Spinner />
          </Paper>
        )}
      </div>
    </Container>
  );
};

export default Notifications;
