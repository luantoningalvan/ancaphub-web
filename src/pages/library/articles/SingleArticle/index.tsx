import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Categories from '../../../../components/categories/ShowCategories';
import { Container, Paper } from 'snake-ui';
import { getSingleItemRequest as getSingleItem } from '../../../../redux/actions/library';
import {
  Author,
  Banner,
  TextControlButton,
  TextControls,
  Title,
} from './styles';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

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
        <Banner cover={singleItem.cover && singleItem.cover_url}>
          <Container>
            <Categories categories={singleItem.categories} />
            <Title>{singleItem?.title}</Title>
            <Author>
              <Link to={`/authors/${singleItem?.author?.username}`}>
                {singleItem?.author?.name}
              </Link>
            </Author>
          </Container>
        </Banner>

        <Container style={{ marginTop: -20 }}>
          <Paper padding style={{ fontSize }}>
            {singleItem.content && (
              <Editor
                readOnly
                onChange={() => {}}
                editorState={EditorState.createWithContent(
                  convertFromRaw(JSON.parse(singleItem.content))
                )}
              />
            )}
          </Paper>
        </Container>
      </>
    )
  );
};

export default SingleArticle;
