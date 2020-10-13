import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { searchTermRequest as searchTerm } from '../../actions/search';

// Cards for entity types
import UserCard from '../../components/users/UserCard';
import LibraryCard from '../../components/library/LibraryCard';
import EventCard from '../../components/events/EventCard';

import {
  Container,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  LoadContent,
} from '../../components/ui';

import {
  InnerSearchGridContainer,
  SearchSidebarContainer,
  SearchContentContainer,
  SearchContainer,
  SearchResultType,
} from './styles.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchData = () => {
  const term = useQuery().get('term');
  const type = useQuery().get('type');
  const dispatch = useDispatch();
  const { results, loading } = useSelector((state) => state.search);

  useEffect(() => {
    if (searchTerm !== '') {
      dispatch(searchTerm(term));
    }
  }, [term, dispatch]);

  return (
    <Container style={{ marginTop: 16 }}>
      <LoadContent loading={loading}>
        <SearchContainer>
          <SearchSidebarContainer>
            <Card style={{ width: '100%' }}>
              <CardHeader title={<FormattedMessage id="search.filter" />} />
              <Menu>
                <MenuItem
                  label={<FormattedMessage id="common.all" />}
                  link={`search?term=${term}&type=all`}
                />
                <MenuItem
                  link={`search?term=${term}&type=library`}
                  label={<FormattedMessage id="common.library" />}
                />
                <MenuItem
                  link={`search?term=${term}&type=users`}
                  label={<FormattedMessage id="common.users" />}
                />
                <MenuItem
                  link={`search?term=${term}&type=events`}
                  label={<FormattedMessage id="common.events" />}
                />
              </Menu>
            </Card>
          </SearchSidebarContainer>

          <SearchContentContainer>
            {results.users &&
              results.users.length > 0 &&
              (type === 'all' || type === 'users') && (
                <SearchResultType>
                  <h3>
                    <FormattedMessage id="common.users" />
                  </h3>
                  <InnerSearchGridContainer>
                    {results.users.map((user) => (
                      <UserCard user={user} key={user._id} />
                    ))}
                  </InnerSearchGridContainer>
                </SearchResultType>
              )}
            {results.users &&
              results.library.length > 0 &&
              (type === 'all' || type === 'library') && (
                <SearchResultType>
                  <h3>
                    <FormattedMessage id="common.library" />
                  </h3>
                  <InnerSearchGridContainer>
                    {results.library.map((item) => (
                      <LibraryCard key={item._id} item={item} />
                    ))}
                  </InnerSearchGridContainer>
                </SearchResultType>
              )}
            {results.users &&
              results.events.length > 0 &&
              (type === 'all' || type === 'events') && (
                <SearchResultType>
                  <h3>
                    <FormattedMessage id="common.events" />
                  </h3>
                  <InnerSearchGridContainer>
                    {results.events.map((event) => (
                      <EventCard key={event._id} event={event} />
                    ))}
                  </InnerSearchGridContainer>
                </SearchResultType>
              )}
          </SearchContentContainer>
        </SearchContainer>
      </LoadContent>
    </Container>
  );
};

export default SearchData;
