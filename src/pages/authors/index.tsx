import React, { useEffect } from 'react';
import AuthorCard from '../../components/authors/AuthorCard';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Hero } from 'snake-ui';
import { getAuthorsRequest } from 'redux/actions/authors';

const AuthorsIndex: React.FC = () => {
  const { items } = useSelector((state: any) => state.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorsRequest());
  }, []);

  return (
    <Container>
      <Hero
        title="Autores"
        description="Confira a lista de todos os autores que possuem obras no AncapHub"
      />
      <Grid container spacing={2} style={{ marginTop: 16 }}>
        {items.map((author: any) => (
          <Grid item xs={3}>
            <AuthorCard data={author} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AuthorsIndex;
