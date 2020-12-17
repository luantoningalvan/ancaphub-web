import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { searchTermRequest as searchTerm } from '../../../redux/actions/search';

import UserCard from '../../../components/users/UserCard';
import LibraryCard from '../../../components/library/LibraryCard';
import EventCard from '../../../components/events/EventCard';
import AuthorCard from '../../../components/authors/AuthorCard';
import ProjectCard from '../../../components/projects/ProjectCard';

import { LoadContent } from '../../../components';
import { Container, Card, CardHeader, List, ListItem, Grid } from 'snake-ui';
import { FiFilter } from 'react-icons/fi';

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

  const getCard = (key: string, item: any): React.ReactNode => {
    switch (key) {
      case 'users': {
        return <UserCard user={item} />;
      }
      case 'library': {
        return <LibraryCard item={item} />;
      }
      case 'events': {
        return <EventCard event={item} />;
      }
      case 'authors': {
        return <AuthorCard data={item} />;
      }
      case 'projects': {
        return <ProjectCard data={item} />;
      }
    }
  };

  return (
    <Container style={{ marginTop: 16 }}>
      <LoadContent loading={loading}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FiFilter size={20} style={{ marginRight: 8 }} />{' '}
                    <FormattedMessage id="search.filter" />
                  </div>
                }
              />
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
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={4}>
              {results &&
                Object.entries(results).map(
                  ([key, object]: any) =>
                    object &&
                    object?.length > 0 && (
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <h3>
                              <FormattedMessage id={`common.${key}`} />
                            </h3>
                          </Grid>
                          {object.map((element: any) => (
                            <Grid item xs={4}>
                              {getCard(key, element)}
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    )
                )}
            </Grid>
          </Grid>
        </Grid>
      </LoadContent>
    </Container>
  );
};

export default SearchData;
