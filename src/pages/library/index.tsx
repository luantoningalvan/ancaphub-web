import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { generate } from 'shortid';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import LibraryCard from '../../components/library/LibraryCard';

import { loadCategoriesRequest } from '../../actions/categories';
import { getItemsRequest } from '../../actions/library';

import { LoadContent } from '../../components';
import {
  Container,
  Hero,
  Card,
  CardHeader,
  Tab,
  Tabs,
  Paper,
  Grid,
  ListItem,
} from 'snake-ui';

import {
  LibraryContainer,
  LibrarySidebarContainer,
  LibraryContentContainer,
  LibrarySidebarMenu,
} from './styles';

const Library = () => {
  const [type, setType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { items: categories, loading: loadingCategories } = useSelector(
    (state: any) => state.categories
  );
  const { items, loading } = useSelector((state: any) => state.library);
  const dispatch = useDispatch();
  const { type: typeParam }: { type: string } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(loadCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    setType(() => typeParam);
  }, [typeParam]);

  useEffect(() => {
    const types: { [key: string]: string } = {
      articles: 'article',
      books: 'book',
      videos: 'video',
    };
    dispatch(
      getItemsRequest({ type: types[type], category: selectedCategory })
    );
  }, [type, selectedCategory, dispatch]);

  return (
    <Container>
      <Hero
        title={<FormattedMessage id="common.library" />}
        description={<FormattedMessage id="home.features.0" />}
        actions
      />

      <LibraryContainer>
        <LibrarySidebarContainer>
          <Card>
            <CardHeader
              title={<FormattedMessage id="common.categories" />}
              style={{ paddingBottom: 8 }}
            />

            <LibrarySidebarMenu>
              <LoadContent loading={loadingCategories}>
                <ListItem
                  label={<FormattedMessage id="common.all" />}
                  current={selectedCategory === ''}
                  onClick={() => setSelectedCategory('')}
                />
                {categories.map((category: any) => (
                  <ListItem
                    key={category.name}
                    label={category.name}
                    current={selectedCategory === category._id}
                    onClick={() => setSelectedCategory(category._id)}
                  />
                ))}
              </LoadContent>
            </LibrarySidebarMenu>
          </Card>
        </LibrarySidebarContainer>
        <LibraryContentContainer>
          <Paper>
            <Tabs style={{ height: 48, padding: '0px 8px' }}>
              <Tab // @ts-ignore
                label={<FormattedMessage id="common.all" />}
                current={typeParam === undefined}
                onClick={() => push('/library')}
              />
              <Tab // @ts-ignore
                label={<FormattedMessage id="library.articles" />}
                current={typeParam === 'articles'}
                onClick={() => push('/library/articles')}
              />
              <Tab // @ts-ignore
                label={<FormattedMessage id="library.books" />}
                current={typeParam === 'books'}
                onClick={() => push('/library/books')}
              />
              <Tab // @ts-ignore
                label={<FormattedMessage id="library.videos" />}
                current={typeParam === 'videos'}
                onClick={() => push('/library/videos')}
              />
            </Tabs>
          </Paper>
          <div style={{ marginTop: 16 }}>
            <LoadContent loading={loading}>
              {isEmpty(items) ? (
                <Paper padding>
                  <FormattedMessage id="library.noneFound" />
                </Paper>
              ) : (
                <Grid container spacing={2}>
                  {items.map((item: any) => (
                    <Grid item xs={12} md={6} lg={4} key={generate()}>
                      <LibraryCard item={item} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </LoadContent>
          </div>
        </LibraryContentContainer>
      </LibraryContainer>
    </Container>
  );
};

export default Library;
