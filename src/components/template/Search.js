import React, { memo, useState } from 'react';
import styled from 'styled-components';
import {
  FiSearch as SearchIcon,
  FiArrowLeft as BackIcon,
  FiCrosshair as LocateIcon,
} from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { IconButton } from '../ui';

const SearchWrapper = styled.div`
  i,
  svg {
    width: 20px;
    height: 20px;
  }

  .not-collapsed {
    height: 64px;
    width: 100%;
    padding: 0px 16px;
    background: ${(props) => props.theme.palette.paper};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.palette.text.contrast};

    > input {
      border: none;
      background: transparent;
      padding: 16px;
      outline: none;
      flex: 1;
      color: ${(props) => props.theme.palette.text.contrast};

      &::placeholder {
        color: ${(props) => props.theme.palette.text.contrast};
        font-size: 16px;
        font-family: Ubuntu;
      }
    }
  }

  .mobile-search {
    color: ${(props) => props.theme.palette.text.contrast};

    > button {
      border: none;
      border-radius: 8px;
      padding: 8px;
      outline: none;
      background: transparent;
      cursor: pointer;
      width: auto;

      &:hover {
        background: rgba(0, 0, 0, 0.15);
      }
    }

    > a {
      padding: 8px;
      color: ${(props) => props.theme.palette.text.contrast};
    }
  }

  .desktop-search {
    display: none;
  }

  @media (min-width: 576px) {
    .mobile-search {
      display: none;
    }
    .desktop-search {
      display: block;
      background: rgba(0, 0, 0, 0.15);
      width: 360px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 8px;
      color: ${(props) => props.theme.palette.text.contrast};

      input {
        flex: 1;
        padding: 8px;
        border: none;
        background: transparent;
      }

      a,
      input,
      input::placeholder {
        color: ${(props) => props.theme.palette.text.contrast};
        font-size: 1rem;
      }
    }
  }
`;

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
    <SearchWrapper>
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
    </SearchWrapper>
  );
};
export default memo(Search);
