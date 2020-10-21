import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiSettings as SettingIcon } from 'react-icons/fi';

import { Container, Tabs, Tab, CircularLoader } from 'snake-ui';

const GroupBoard = lazy(() => import('./Board'));
const GroupChat = lazy(() => import('./Chat'));
const GroupFiles = lazy(() => import('./Files'));
const GroupMembers = lazy(() => import('./Members'));
const GroupManage = lazy(() => import('./Manage'));

const GroupHeader = styled.div`
  height: 64px;
  width: 100%;
  background: ${(props) => props.theme.palette.paperDark};
  border-bottom: 1px solid ${(props) => props.theme.palette.border};

  h2 {
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.3em;
  }

  .group-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    width: 100%;
  }
`;

const SingleGroup = () => {
  const [Page, setPage] = React.useState<React.ReactNode | undefined>(
    undefined
  );
  const {
    id: groupId,
    page: groupPage,
  }: { id: string; page: string } = useParams();

  const pages: { [key: string]: React.ReactNode } = {
    undefined: <GroupBoard />,
    chat: <GroupChat />,
    files: <GroupFiles />,
    members: <GroupMembers />,
    manage: <GroupManage />,
  };

  React.useEffect(() => {
    setPage(pages[groupPage]);
  }, [groupPage]);

  return (
    <>
      <GroupHeader>
        <Container>
          <div className="group-header-wrapper">
            <h2>Anarco Bagualismo</h2>

            <Tabs style={{ height: 64 }}>
              <Tab
                current={groupPage === undefined}
                link={`/groups/${groupId}`} //@ts-ignore
                label={<FormattedMessage id="groups.board" />}
              />
              <Tab
                current={groupPage === 'chat'}
                link={`/groups/${groupId}/chat`} //@ts-ignore
                label={<FormattedMessage id="groups.chat" />}
              />
              <Tab
                current={groupPage === 'files'}
                link={`/groups/${groupId}/files`} //@ts-ignore
                label={<FormattedMessage id="groups.files" />}
              />
              <Tab
                current={groupPage === 'members'}
                link={`/groups/${groupId}/members`} //@ts-ignore
                label={<FormattedMessage id="groups.members" />}
              />
              <Tab
                current={groupPage === 'manage'}
                link={`/groups/${groupId}/manage`} //@ts-ignore
                label={<SettingIcon />}
              />
            </Tabs>
          </div>
        </Container>
      </GroupHeader>
      <Container>
        <Suspense fallback={<CircularLoader size={96} />}>{Page}</Suspense>
      </Container>
    </>
  );
};

export default SingleGroup;
