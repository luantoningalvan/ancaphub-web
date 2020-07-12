import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import parse from 'html-react-parser';

// Ícones
import { FiPlus, FiMinus } from 'react-icons/fi';

import defaultThumbnail from '../../assets/default-book-cover.jpg';
import Categories from '../../components/categories/ShowCategories';

import { Container, Paper } from '../../components/ui';

import { getSingleItemRequest as getSingleItem } from '../../actions/library';

const Banner = styled.div`
  background: url(${(props) => (props.cover ? props.cover : defaultThumbnail)})
    rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center;
  width: 100%;
  background-blend-mode: overlay;
  padding: 96px 0px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.contrast};
  font-size: 2.125rem;
  margin-bottom: 5px;
`;

const Author = styled.h3`
  font-weight: lighter;
  color: ${(props) => props.theme.palette.text.contrast};
  font-size: 1.25rem;
`;

const TextControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

const TextControlButton = styled.span`
  cursor: pointer;
`;

const SingleArticle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [fontSize, setFontSize] = React.useState(16);

  React.useEffect(() => {
    dispatch(getSingleItem({ itemId: id }));
  }, [dispatch, id]);

  const { singleItem } = useSelector((state) => state.library);

  function handleGrowText() {
    if (fontSize + 2 <= 20) {
      setFontSize((prev) => prev + 2);
    }
  }

  function handleShrinkText() {
    if (fontSize - 2 >= 12) {
      setFontSize((prev) => prev - 2);
    }
  }

  if (!singleItem) {
    return (
      <Container mt={2}>
        <FormattedMessage id="common.unavailable" />
      </Container>
    );
  }

  return (
    singleItem && (
      <>
        <Banner cover={singleItem.cover && singleItem.cover.url}>
          <Container>
            <Categories categories={singleItem.categories} />
            <Title>{singleItem && singleItem.title}</Title>
            <Author>{singleItem && singleItem.title}</Author>
          </Container>
        </Banner>

        <div style={{ marginTop: -20 }}>
          <Container>
            <TextControls>
              <h5>
                <FormattedMessage id="common.fontSize" />
              </h5>
              <TextControlButton onClick={() => handleGrowText()}>
                <FiPlus />
              </TextControlButton>
              <TextControlButton onClick={() => handleShrinkText()}>
                <FiMinus />
              </TextControlButton>
            </TextControls>
            <Paper padding style={{ fontSize }}>
              {parse(`${singleItem && singleItem.content}`)}
            </Paper>
          </Container>
        </div>
      </>
    )
  );
};

export default SingleArticle;
