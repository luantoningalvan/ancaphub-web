import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { searchTermRequest as searchTerm } from '../../../redux/actions/search';
import UserCard from '../../../components/users/UserCard';
import LibraryCard from '../../../components/library/LibraryCard';
import EventCard from '../../../components/events/EventCard';

import { LoadContent } from '../../../components';
import { Container, Card, CardHeader, List, ListItem } from 'snake-ui';
import {
  InnerSearchGridContainer,
  SearchSidebarContainer,
  SearchContentContainer,
  SearchContainer,
  SearchResultType,
} from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchData = () => {
  const term = useQuery().get('term');
  const type = useQuery().get('type');

  const dispatch = useDispatch();
  const { push } = useHistory();

  const { results, loading } = useSelector((state: any) => state.search);

  useEffect(() => {
    if (term !== '') {
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
              <List>
                <ListItem
                  label={<FormattedMessage id="common.all" />}
                  onClick={() => push(`search?term=${term}&type=all`)}
                />
                <ListItem
                  onClick={() => push(`search?term=${term}&type=library`)}
                  label={<FormattedMessage id="common.library" />}
                />
                <ListItem
                  onClick={() => push(`search?term=${term}&type=users`)}
                  label={<FormattedMessage id="common.users" />}
                />
                <ListItem
                  onClick={() => push(`search?term=${term}&type=events`)}
                  label={<FormattedMessage id="common.events" />}
                />
              </List>
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
                    {results.users.map((user: any) => (
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
                    {results.library.map((item: any) => (
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
                    {results.events.map((event: any) => (
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
