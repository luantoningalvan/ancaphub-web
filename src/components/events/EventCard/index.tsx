import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from 'snake-ui';
import { Event } from './styles';
import { FiCrosshair } from 'react-icons/fi';

const EventCard = ({ event }: any) => (
  <Event>
    <div className="event-cover">
      <Link to={`/events/${event.id}`}>
        <img src={event.cover} alt="event cover" />
      </Link>
    </div>

    <div className="event-date">
      <span className="month">ABR</span>
      <span className="day">20</span>
    </div>

    <div className="event-content">
      <h4>{event.title}</h4>

      <div className="event-location">
        <FiCrosshair />
        <span>{event.location}</span>
      </div>
      <Button color="primary">
        <FormattedMessage id="events.interested" />
      </Button>
    </div>
  </Event>
);

export default EventCard;
