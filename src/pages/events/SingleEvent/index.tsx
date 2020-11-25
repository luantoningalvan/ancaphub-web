import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EventContainer, EventHeader, EventInfo } from './styles';
import {
  FiMapPin as LocationIcon,
  FiDollarSign as TicketIcon,
  FiClock as HourIcon,
  FiUsers as PeopleIcon,
} from 'react-icons/fi';

import { Container, Button, Grid } from 'snake-ui';

const SingleEvent = () => (
  <Container>
    <EventContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EventHeader>
            <div className="event-cover">
              <img
                src="https://pbs.twimg.com/media/EWCrT8iXQAMp5s0?format=jpg&name=large"
                alt="event cover"
              />
            </div>

            <div className="event-header-content">
              <div>
                <div className="event-date">
                  <span className="month">ABR</span>
                  <span className="day">20</span>
                </div>
                <span className="time">
                  <FormattedMessage
                    id="events.time"
                    values={{ from: '08:00', to: '20:00' }}
                  />
                </span>
                <h2>AncapHub Week</h2>
                <div className="event-location">
                  <LocationIcon />
                  <span>Online</span>
                </div>
              </div>

              <div>
                <Button
                  color="primary"
                  style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.7)' }}
                >
                  Tenho Interesse
                </Button>
              </div>
            </div>
          </EventHeader>
        </Grid>
        <Grid item xs={6}>
          <EventInfo>
            <ul>
              <li>
                <PeopleIcon />
                <span>
                  <FormattedMessage
                    id="events.attendance"
                    values={{ num: 53 }}
                  />
                </span>
              </li>
              <li>
                <HourIcon />
                <span>
                  <FormattedMessage
                    id="events.time"
                    values={{ from: '08:00', to: '20:00' }}
                  />
                </span>
              </li>
              <li>
                <LocationIcon />
                <span>Online</span>
              </li>
              <li>
                <TicketIcon />
                <span>
                  <FormattedMessage id="events.free" />
                </span>
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ornare risus quis neque suscipit, ut semper orci rhoncus. Proin
              lobortis nisl eu nisi placerat, ac faucibus lacus finibus.
            </p>
          </EventInfo>
        </Grid>
        <Grid item xs={6}>
          <h3 style={{ marginBottom: 8 }}>
            <FormattedMessage id="events.howToGet" />
          </h3>
          <iframe
            title="event map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112277.11744442317!2d-51.7964725!3d-28.429516800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1587573920904!5m2!1spt-BR!2sbr"
            frameBorder="0"
            style={{ width: '100%', height: 300, borderRadius: 8 }}
          />
        </Grid>
      </Grid>
    </EventContainer>
  </Container>
);

export default SingleEvent;
