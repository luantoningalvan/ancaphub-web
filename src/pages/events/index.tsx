import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import {
  FiChevronRight as NextButton,
  FiChevronLeft as BackButton,
} from 'react-icons/fi';
import { Calendar } from './styles';

import { Container, Hero, Button, IconButton, Grid } from 'snake-ui';

import EventCard from '../../components/events/EventCard';
import CreateEvent from '../../components/events/CreateEvent';

const Toolbar = (toolbar: any) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };
  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  return (
    <div className="rbc-toolbar">
      <div className="month-switch">
        <IconButton icon={<BackButton />} onClick={goToBack} />

        <span>{toolbar.label}</span>
        <IconButton icon={<NextButton />} onClick={goToNext} />
      </div>
      <ul className="view-switch">
        <li>
          <button type="button">
            <FormattedMessage id="events.month" />
          </button>
        </li>
        <li>
          <button type="button">
            <FormattedMessage id="events.week" />
          </button>
        </li>
        <li>
          <button type="button">
            <FormattedMessage id="events.day" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default () => {
  const [createEventState, setCreateEventState] = useState(false);
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: { pt: locale },
  });

  const events = [
    {
      id: 1,
      start: Date.now(),
      end: Date.now(),
      title: 'AncapHub Week',
      cover:
        'https://ancaphub.com/wp-content/uploads/2020/04/maxresdefault-360x240.jpg',
      location: 'Online',
    },
  ];

  const formats = {
    dateFormat: 'dd',
    weekdayFormat: 'dddd',
  };

  return (
    <Container>
      <Hero
        title={
          <FormattedMessage
            id="common.events"
            description="Título da página de eventos"
          />
        }
        description={
          <FormattedMessage
            id="home.features.2"
            description="Descrição da página de eventos"
          />
        }
        actions={
          <Button color="primary" onClick={() => setCreateEventState(true)}>
            Criar Evento
          </Button>
        }
      />

      <CreateEvent
        open={createEventState}
        onClose={() => setCreateEventState(false)}
      />

      <Calendar //@ts-ignore
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        events={events}
        drilldownView="day"
        components={{
          toolbar: Toolbar,
        }}
        views={{
          month: true,
          week: true,
          day: true,
        }}
        formats={formats}
        style={{ margin: '16px 0px' }}
      />

      <h3 style={{ marginTop: 24, fontSize: '1.7em' }}>Eventos Próximos</h3>
      <Grid container spacing={2} style={{ margin: '16px 0px' }}>
        {events.map((event) => (
          <Grid item xs={3} key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
