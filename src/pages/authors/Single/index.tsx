import React, { useEffect } from 'react';
import { Container, Grid } from 'snake-ui';
import { AuthorHeader, Avatar, AuthorInfo, Chip } from './styles';

import LibraryCard from 'components/library/LibraryCard';
import defaultProfilePicture from '../../../assets/default-profile-picture.jpg';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getItemsRequest } from '../../../redux/actions/library';
import { getSingleAuthorRequest } from '../../../redux/actions/authors';

const AuthorsIndex: React.FC = () => {
  const { items } = useSelector((state: any) => state.library);
  const { author } = useSelector((state: any) => state.authors);
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleAuthorRequest(id));
    dispatch(getItemsRequest({ author: id }));
  }, []);

  return (
    <>
      <AuthorHeader cover={author.cover}>
        <Container>
          <Avatar>
            <img
              src={author.avatar || defaultProfilePicture}
              alt={author.name}
            />
          </Avatar>

          <AuthorInfo>
            <Chip>Autor</Chip>
            <h2>{author.name}</h2>
            <p>{author.bio}</p>
          </AuthorInfo>
        </Container>
      </AuthorHeader>

      <Container>
        <h3 style={{ fontSize: '1.4rem', margin: '32px 0px 16px 0px' }}>
          Conteúdos publicados
        </h3>
        <Grid container spacing={2}>
          {items &&
            items.map((item: any) => (
              <Grid item xs={3}>
                <LibraryCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default AuthorsIndex;
