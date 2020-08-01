import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { Container } from './styles';

const Breadcrumb = ({ list = [] }) => (
  <Container>
    {list.map((item) => (
      <li key={() => shortid()}>
        <>
          {item.link ? (
            <Link to={item.link}>{item.title}</Link>
          ) : (
            <>{item.title}</>
          )}
        </>
      </li>
    ))}
  </Container>
);

export { Breadcrumb };
