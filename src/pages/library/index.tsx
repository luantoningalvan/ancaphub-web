import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { generate } from 'shortid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import LibraryCard from '../../components/library/LibraryCard';

import { loadCategoriesRequest } from '../../actions/categories';
import { getItemsRequest } from '../../actions/library';

import { MenuItem, LoadContent } from '../../components/ui';
import {
  Container,
  Hero,
  Card,
  CardHeader,
  Tab,
  Tabs,
  Paper,
  Grid,
} from 'snake-ui';

import {
  LibraryContainer,
  LibrarySidebarContainer,
  LibraryContentContainer,
  LibrarySidebarMenu,
} from './styles';

const Library = () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { items: categories, loading: loadingCategories } = useSelector(
    (state: any) => state.categories
  );
  const { items, loading } = useSelector((state: any) => state.library);
  const dispatch = useDispatch();
  const { type: typeParam }: { type: string } = useParams();

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
                <MenuItem
                  label={<FormattedMessage id="common.all" />}
                  current={selectedCategory === ''}
                  onClick={() => setSelectedCategory('')}
                />
                {categories.map((category: any) => (
                  <MenuItem
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
                link="/library"
              />
              <Tab // @ts-ignore
                label={<FormattedMessage id="library.articles" />}
                current={typeParam === 'articles'}
                link="/library/articles"
              />
              <Tab // @ts-ignore
                label={<FormattedMessage id="library.books" />}
                current={typeParam === 'books'}
                link="/library/books"
              />
              <Tab // @ts-ignore
                label={<FormattedMessage id="library.videos" />}
                current={typeParam === 'videos'}
                link="/library/videos"
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
                    <Grid xs={12} key={generate()}>
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
