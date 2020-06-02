import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UploadButton from 'react-ionicons/lib/IosCloudUpload';
import { isEmpty } from 'lodash';
import LibraryCard from '../../components/library/LibraryCard';

import { loadCategoriesRequest } from '../../actions/categories';
import { getItemsRequest } from '../../actions/library';

import { 
  Container,
  Hero,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Button,
  LoadContent,
  Paper,
} from '../../components/ui'

export default () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { items: categories, loading: loadingCategories } = useSelector(
    (state) => state.categories,
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
    dispatch(getItemsRequest({ type: types[typeParam], category: selectedCategory }));
  }, [typeParam, selectedCategory, dispatch]);

  return (
    <Container>
      <Hero
        title={<FormattedMessage id="common.library" />}
        description={<FormattedMessage id="home.features.0" />}
        actions={(
          <Link to="/library/contribute">
            <Button color="primary" to="/library/contribute">
              <UploadButton />
              <span>
                <FormattedMessage id="library.contribute" />
              </span>
            </Button>
          </Link>
        )}
      />

      <div spacing={2} style={{ marginTop: 8 }}>
        <div xs={12}>
          <Card style={{ width: '100%' }}>
            <CardHeader style={{ paddingBottom: 8 }}>
              <h3>
                <FormattedMessage id="common.categories" />
              </h3>
            </CardHeader>
            <Menu style={{ maxHeight: 208, overflowX: 'scroll' }}>
              <LoadContent loading={loadingCategories}>
                <MenuItem
                  label={<FormattedMessage id="common.all" />}
                  current={selectedCategory === ''}
                  onClick={() => setSelectedCategory('')}
                />
                {categories.map((category) => (
                  <MenuItem
                    label={category.name}
                    current={selectedCategory === category._id}
                    onClick={() => setSelectedCategory(category._id)}
                  />
                ))}
              </LoadContent>
            </Menu>
          </Card>
        </div>
        <div xs={12}>
          <div style={{ width: '100%' }}>
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
                      <div xs={12}>
                        <LibraryCard item={item} />
                      </div>
                    ))}
                  </div>
                )}
              </LoadContent>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
