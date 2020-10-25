import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import defaultGroupCover from '../../../assets/default-group-cover.png';
import { Button, Paper } from 'snake-ui';
import { GroupCover, GroupInfo } from './styles';

interface GroupCardProps {
  data: {
    id: string;
    name: string;
    cover: string;
    membersCounts: number;
    hasEnrolled: boolean;
  };
}

const GroupCard: React.FC<GroupCardProps> = ({ data }) => {
  const { id, name, cover, membersCounts, hasEnrolled } = data;
  return (
    <div style={{ width: '100%' }}>
      <Paper>
        <Link to={`/groups/${id}`}>
          <GroupCover cover={cover || defaultGroupCover} />
        </Link>
        <GroupInfo>
          <h4>
            <Link to="/groups/id">{name}</Link>
          </h4>
          <span>
            <FormattedMessage
              id="groups.membersNumber"
              values={{ num: membersCounts }}
            />
          </span>
          <Button variant="outlined" color="primary">
            {hasEnrolled ? (
              <FormattedMessage id="common.semanticQuit" />
            ) : (
              <FormattedMessage id="common.semanticEnter" />
            )}
          </Button>
        </GroupInfo>
      </Paper>
    </div>
  );
};

export default GroupCard;
