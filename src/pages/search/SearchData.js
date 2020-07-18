import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
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
  Spinner,
} from '../../components/ui';

import {
  InnerSearchGridContainer,
  SearchSidebarContainer,
  SearchContentContainer,
  SearchContainer,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, searchTerm]);

  const { formatMessage } = useIntl();

  const searchTitle = () => {
    return type === 'all' ? (
      <FormattedMessage id="search.showingResultsFor" values={{ term }} />
    ) : (
      <FormattedMessage
        id="search.showingResultsForWithFilter"
        values={{ term, filter: formatMessage({ id: `common.${type}` }) }}
      />
    );
  };
  return (
    <Container style={{ marginTop: 16 }}>
      {!loading ? (
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
            <h3 style={{ marginBottom: 16 }}>{searchTitle()}</h3>
            {results.users.length > 0 && (type === 'all' || type === 'users') && (
              <>
                <h3 style={{ margin: '16px 0' }}>
                  <FormattedMessage id="common.users" />
                </h3>
                <InnerSearchGridContainer>
                  {results.users.map((user) => (
                    <UserCard user={user} key={user._id} />
                  ))}
                </InnerSearchGridContainer>
              </>
            )}
            {results.library.length > 0 &&
              (type === 'all' || type === 'library') && (
                <>
                  <h3 style={{ margin: '16px 0' }}>
                    <FormattedMessage id="common.library" />
                  </h3>
                  <InnerSearchGridContainer>
                    {results.library.map((item) => (
                      <LibraryCard key={item._id} item={item} />
                    ))}
                  </InnerSearchGridContainer>
                </>
              )}
            {results.events.length > 0 &&
              (type === 'all' || type === 'events') && (
                <>
                  <h3 style={{ margin: '16px 0' }}>
                    <FormattedMessage id="common.events" />
                  </h3>
                  <InnerSearchGridContainer>
                    {results.events.map((event) => (
                      <EventCard key={event._id} event={event} />
                    ))}
                  </InnerSearchGridContainer>
                </>
              )}
          </SearchContentContainer>
        </SearchContainer>
      ) : (
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Spinner size={128} />
        </div>
      )}
    </Container>
  );
};

export default SearchData;
