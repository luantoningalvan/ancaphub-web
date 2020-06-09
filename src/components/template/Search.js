import React, { memo, useState } from 'react';
import {
  FiSearch as SearchIcon,
  FiArrowLeft as BackIcon,
  FiCrosshair as LocateIcon,
} from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { IconButton } from '../ui';
import { SearchContainer } from './styles';

const Search = () => {
  const [term, setTerm] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();

  const search = () => {
    if (term !== '') {
      history.push(`/search?s=${term}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <SearchContainer>
      <div className={clsx('mobile-search', !collapsed && 'not-collapsed')}>
        {collapsed ? (
          <IconButton
            icon={<SearchIcon />}
            onClick={() => setCollapsed(false)}
          />
        ) : (
          <>
            <IconButton
              icon={<BackIcon />}
              onClick={() => setCollapsed(true)}
            />

            <FormattedMessage
              id="common.search"
              description="Input de pesquisa"
            >
              {(msg) => (
                <input
                  type="text"
                  placeholder={msg}
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              )}
            </FormattedMessage>

            <Link to="/nearby">
              <LocateIcon />
            </Link>
          </>
        )}
      </div>
      <div className="desktop-search">
        <i>
          <SearchIcon />
        </i>
        <FormattedMessage id="common.search" description="Input de pesquisa">
          {(msg) => (
            <input
              type="text"
              placeholder={msg}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          )}
        </FormattedMessage>

        <Link to="/nearby">
          <LocateIcon />
        </Link>
      </div>
    </SearchContainer>
  );
};
export default memo(Search);
