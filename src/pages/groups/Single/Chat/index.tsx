import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChatWindow, ChatBubble } from '../../../../components/ui';
import { Paper, Tabs, Tab, Grid } from 'snake-ui';
import { Textarea } from './styles';

const chat = {
  messages: [
    {
      user: {
        name: 'Zé Pequeté',
        username: 'zepqt',
      },
      body: 'Lorem ipsum dolor sit amet.',
      createdAt: '2h',
      sentByUser: false,
    },
    {
      user: {
        name: 'Você',
        username: 'eu',
      },
      body: 'Consectetur adipiscing elit :P',
      createdAt: '1h',
      sentByUser: true,
    },
    {
      user: {
        name: 'Zé Pequeté',
        username: 'zepqt',
      },
      body: 'Tô chegando com os refri, rapaziada',
      createdAt: 'agora',
      sentByUser: false,
    },
  ],
};

const GroupChat = () => {
  const [sideTab, setSideTab] = useState('notes');

  return (
    <Grid container>
      <Grid xs={9}>
        <div
          style={{
            height: 'calc( 100vh - 128px)',
            width: '100%',
            borderLeft: '1px solid #2f3749',
          }}
        >
          <ChatWindow chat={chat} />
        </div>
      </Grid>
      <Grid xs={3} style={{ padding: '16px 0px 16px 16px' }}>
        <Paper style={{ width: '100%' }}>
          <Tabs
            style={{
              height: 48,
              justifyContent: 'center',
              borderBottom: '1px solid #2f3749',
            }}
          >
            <Tab
              onClick={() => setSideTab('notes')}
              current={sideTab === 'notes'} // @ts-ignore
              label={<FormattedMessage id="groups.board.notes" />}
            />
            <Tab
              onClick={() => setSideTab('fixed')}
              current={sideTab === 'fixed'} // @ts-ignore
              label={<FormattedMessage id="groups.board.fixed" />}
            />
          </Tabs>

          <div style={{ padding: 16 }}>
            {sideTab === 'fixed' ? (
              <>
                <ChatBubble
                  showName
                  message={{
                    user: { name: 'Marcelo' },
                    body: 'Precisamos lembrar de escre..',
                    createdAt: '25 de março',
                  }}
                />
                <br />
                <ChatBubble
                  showName
                  message={{
                    user: { name: 'Marcelo' },
                    body: 'A questão que a gente estava dis..',
                    createdAt: '12 de abril',
                  }}
                />
              </>
            ) : (
              <Textarea />
            )}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GroupChat;
