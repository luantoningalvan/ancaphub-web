import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChatBubble } from '../../../../components';
import { Paper, Tabs, Tab, Grid } from 'snake-ui';
import { Textarea } from './styles';

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
          {/**<ChatWindow chat={chat} /> */}
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
                    created_at: '25 de março',
                  }}
                />
                <br />
                <ChatBubble
                  showName
                  message={{
                    user: { name: 'Marcelo' },
                    body: 'A questão que a gente estava dis..',
                    created_at: '12 de abril',
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
