import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { generate } from 'shortid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import LibraryCard from '../../components/library/LibraryCard';

import { loadCategoriesRequest } from '../../actions/categories';
import { getItemsRequest } from '../../actions/library';

import {
  Container,
  Hero,
  Card,
  CardHeader,
  MenuItem,
  Tab,
  Tabs,
  LoadContent,
  Paper,
} from '../../components/ui';

import {
  LibraryContainer,
  LibrarySidebarContainer,
  LibraryContentContainer,
  LibrarySidebarMenu,
} from './styles.css';

const Library = () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { items: categories, loading: loadingCategories } = useSelector(
    (state) => state.categories
  );
  const { items, loading } = useSelector((state) => state.library);
  const dispatch = useDispatch();
  const { type: typeParam } = useParams();

  useEffect(() => {
    dispatch(loadCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    setType(() => typeParam);
  }, [typeParam]);

  useEffect(() => {
    const types = {
      articles: 'article',
      books: 'book',
      videos: 'video',
    };
    dispatch(
      getItemsRequest({ type: types[typeParam], category: selectedCategory })
    );
  }, [typeParam, selectedCategory, dispatch]);

  return (
    <Container>
      <Hero
        title={<FormattedMessage id="common.library" />}
        description={<FormattedMessage id="home.features.0" />}
      />

      <LibraryContainer>
        <LibrarySidebarContainer>
          <Card>
            <CardHeader style={{ paddingBottom: 8 }}>
              <h3>
                <FormattedMessage id="common.categories" />
              </h3>
            </CardHeader>
            <LibrarySidebarMenu>
              <LoadContent loading={loadingCategories}>
                <MenuItem
                  label={<FormattedMessage id="common.all" />}
                  current={selectedCategory === ''}
                  onClick={() => setSelectedCategory('')}
                />
                {categories.map((category) => (
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
              <Tab
                label={<FormattedMessage id="common.all" />}
                current={typeParam === undefined}
                link="/library"
              />
              <Tab
                label={<FormattedMessage id="library.articles" />}
                current={typeParam === 'articles'}
                link="/library/articles"
              />
              <Tab
                label={<FormattedMessage id="library.books" />}
                current={typeParam === 'books'}
                link="/library/books"
              />
              <Tab
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
                <div spacing={2}>
                  {items.map((item) => (
                    <div xs={12} key={generate()}>
                      <LibraryCard item={item} />
                    </div>
                  ))}
                </div>
              )}
            </LoadContent>
          </div>
        </LibraryContentContainer>
      </LibraryContainer>
    </Container>
  );
};

export default Library;
