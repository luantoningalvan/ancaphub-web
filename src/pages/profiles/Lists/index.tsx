import React from 'react';
import { Grid } from 'snake-ui';
import ListCard from '../../../components/lists/ListCard';

const Lists = () => {
  const lists = [
    {
      title: 'Pretendo ler',
      itemsCount: 3,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/9140LT91hYL.jpg',
    },
    {
      title: 'Lidos',
      itemsCount: 12,
      cover:
        'https://cdn.mises.org.br/images/articles/b6f1001c42844f29b2832c713c13c5bc.jpg',
    },
    {
      title: 'Iniciantes',
      itemsCount: 8,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/71cA1CzENgL.jpg',
    },
  ];

  return (
    <Grid spacing={2}>
      {lists.map((list) => (
        <Grid sm={6} lg={4} key={list.title}>
          <ListCard list={list} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Lists;
