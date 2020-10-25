import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleItemRequest } from '../../../../redux/actions/library';
import { LoadContent } from '../../../../components';
import { Paper, Container, Button, Menu } from 'snake-ui';

import defaultThumbnail from '../../../../assets/default-book-cover.jpg';
import Categories from '../../../../components/categories/ShowCategories';

import {
  BookDisplayContainer,
  BookDisplayGrid,
  Title,
  Banner,
  Author,
  BookCover,
} from './styles';

function SingleBook() {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const [downloadAnchor, setDownloadAnchor] = useState(null);

  useEffect(() => {
    dispatch(getSingleItemRequest({ itemId: id }));
  }, [dispatch, id]);

  const { singleItem, loading } = useSelector((state: any) => state.library);

  return (
    <LoadContent loading={loading}>
      <Banner
        cover={
          singleItem && singleItem.cover
            ? singleItem.cover.url
            : defaultThumbnail
        }
      />
      <BookDisplayContainer>
        <Container>
          <BookDisplayGrid>
            <div>
              <Paper>
                <BookCover
                  src={
                    singleItem && singleItem.cover
                      ? singleItem.cover.url
                      : defaultThumbnail
                  }
                />
                <div style={{ padding: 10 }}>
                  <Button
                    color="secondary"
                    onClick={(e: any) => setDownloadAnchor(e.currentTarget)}
                  >
                    <FormattedMessage id="common.download" />
                  </Button>
                  <Menu
                    placement="top"
                    anchorEl={downloadAnchor}
                    onClose={() => setDownloadAnchor(null)}
                    open={Boolean(downloadAnchor)}
                    options={
                      singleItem.files
                        ? singleItem.files.map((file: any) => ({
                            label: file.originalname,
                            onClick: () => window.open(file.url, '_blank'),
                          }))
                        : []
                    }
                  />
                </div>
              </Paper>
            </div>
            <div>
              <div style={{ marginBottom: 8 }}>
                <Categories categories={singleItem.categories} />
              </div>

              <Title>{singleItem && singleItem.title}</Title>
              <Author>{singleItem && singleItem.author}</Author>
              <div>{singleItem && singleItem.content}</div>
            </div>
          </BookDisplayGrid>
        </Container>
      </BookDisplayContainer>
    </LoadContent>
  );
}

export default SingleBook;
