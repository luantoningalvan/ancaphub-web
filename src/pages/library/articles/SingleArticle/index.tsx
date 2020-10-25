import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Categories from '../../../../components/categories/ShowCategories';
import { Container, Paper } from 'snake-ui';
import { getSingleItemRequest as getSingleItem } from '../../../../actions/library';
import {
  Author,
  Banner,
  TextControlButton,
  TextControls,
  Title,
} from './styles';

const SingleArticle = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const [fontSize, setFontSize] = React.useState(16);

  React.useEffect(() => {
    dispatch(getSingleItem({ itemId: id }));
  }, [dispatch, id]);

  const { singleItem } = useSelector((state: any) => state.library);

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
      <Container>
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
