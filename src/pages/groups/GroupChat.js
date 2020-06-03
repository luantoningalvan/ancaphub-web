import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { ChatWindow, ChatBubble, Paper, Tabs, Tab } from '../../components/ui';

const Textarea = styled.textarea`
  background: transparent;
  border: 1px solid
    ${(props) => (!props.hasError ? props.theme.palette.border : '#f93c3c')};
  padding: 16px;
  border-radius: 8px;
  outline: none;
  color: white;
  width: 100%;
  height: calc(100vh - 244px);
`;

// Just for prototyping and design purpose. Components will be properly edited later
const chat = {
  messages: [
    {
      user: {
        name: 'Zé Pequeté',
      },
      body: 'Lorem ipsum dolor sit amet.',
      createdAt: '2h',
      sentByUser: false,
    },
    {
      user: {
        name: 'Você',
      },
      body: 'Consectetur adipiscing elit :P',
      createdAt: '1h',
      sentByUser: true,
    },
    {
      user: {
        name: 'Zé Pequeté',
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
    <div>
      <div xs={9}>
        <div
          style={{
            height: 'calc( 100vh - 128px)',
            width: '100%',
            borderLeft: '1px solid #2f3749',
          }}
        >
          <ChatWindow chat={chat} />
        </div>
      </div>
      <div xs={3} style={{ padding: '16px 0px 16px 16px' }}>
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
              current={sideTab === 'notes'}
              label={<FormattedMessage id="groups.board.notes" />}
            />
            <Tab
              onClick={() => setSideTab('fixed')}
              current={sideTab === 'fixed'}
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
      </div>
    </div>
  );
};

export default GroupChat;
