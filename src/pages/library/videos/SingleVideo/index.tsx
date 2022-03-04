import React from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Categories from "../../../../components/categories/ShowCategories";
import {
  Author,
  Banner,
  Title,
  PlayerWrapper,
  VideoContentContainer,
} from "./styles";
import { Container } from "snake-ui";

import { getSingleItemRequest as getSingleItem } from "../../../../redux/actions/library";

const SingleVideo = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSingleItem({ itemId: id }));
  }, [dispatch, id]);

  const { singleItem } = useSelector((state: any) => state.library);

  return (
    singleItem && (
      <>
        <Banner>
          <Container>
            <PlayerWrapper>
              <ReactPlayer
                className="videoPlayer"
                width="100%"
                height="100%"
                url={singleItem.video_url}
                controls
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                    },
                  },
                }}
              />
            </PlayerWrapper>
            <div style={{ marginTop: 32 }}>
              <Categories categories={singleItem?.categories} />

              <Title>{singleItem?.title}</Title>
              <Author>
                <FormattedMessage
                  id="library.videos.participants"
                  values={{ participants: singleItem?.author?.name }}
                />
              </Author>
            </div>
          </Container>
        </Banner>
        <VideoContentContainer>{singleItem?.content}</VideoContentContainer>
      </>
    )
  );
};

export default SingleVideo;
