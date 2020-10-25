import React, { Suspense, lazy } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiSettings as SettingIcon } from 'react-icons/fi';
import { GroupHeader } from './styles';
import { Container, Tabs, Tab, CircularLoader } from 'snake-ui';

const GroupBoard = lazy(() => import('./Board'));
const GroupChat = lazy(() => import('./Chat'));
const GroupFiles = lazy(() => import('./Files'));
const GroupMembers = lazy(() => import('./Members'));
const GroupManage = lazy(() => import('./Manage'));

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

  const { push } = useHistory();

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
                onClick={() => push(`/groups/${groupId}`)}
                label={<FormattedMessage id="groups.board" />}
              />
              <Tab
                current={groupPage === 'chat'}
                onClick={() => push(`/groups/${groupId}/chat`)}
                label={<FormattedMessage id="groups.chat" />}
              />
              <Tab
                current={groupPage === 'files'}
                onClick={() => push(`/groups/${groupId}/files`)}
                label={<FormattedMessage id="groups.files" />}
              />
              <Tab
                current={groupPage === 'members'}
                onClick={() => push(`/groups/${groupId}/members`)}
                label={<FormattedMessage id="groups.members" />}
              />
              <Tab
                current={groupPage === 'manage'}
                onClick={() => push(`/groups/${groupId}/manage`)}
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
