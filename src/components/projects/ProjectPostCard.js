import React from 'react';
import styled from 'styled-components';
import CalendarIcon from 'react-ionicons/lib/IosCalendar';
import { FormattedDate } from 'react-intl';
import { parseISO, addDays } from 'date-fns';
import defaultCover from '../../assets/default-article-cover.jpg';
import { Paper } from '../ui';

const Post = styled(Paper)`
  display: flex;
  height: 150px;
  margin-bottom: 16px;

  .post-cover {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 40%;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-content {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 60%;
    padding: 16px;

    .date {
      display: flex;
      margin-bottom: 8px;
      align-items: center;
      svg {
        fill: white;
        height: 20px;
        width: 20px;
        margin-right: 8px;
      }
    }
  }
`;

const ProjectFeed = ({ post }) => {
  const getExperpt = () => {
    const { blocks } = JSON.parse(post.content);
    const mappedBlocks = blocks.map(
      (block) => (!block.text.trim() && '\n') || block.text
    );

    return mappedBlocks.reduce((acc, block) => {
      let returned = acc;
      if (block === '\n') returned += block;
      else returned += `${block}\n`;
      return returned;
    }, '');
  };

  return (
    <Post>
      <div className="post-cover">
        <img
          alt="cover"
          src={
            post.thumbnail && post.thumbnail !== ''
              ? post.thumbnail
              : defaultCover
          }
        />
      </div>
      <div className="post-content">
        <div className="date">
          <CalendarIcon />
          <span>
            <FormattedDate
              // DISCLAIMER: this is a temporary solution since
              // we still don't know why this bug is happening
              value={addDays(parseISO(post.createdAt), 1)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </span>
        </div>
        <h3>{post.title}</h3>
        <p>{getExperpt().substring(0, 29)}</p>
      </div>
    </Post>
  );
};

export default ProjectFeed;
