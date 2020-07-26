import React from 'react';
import { FiXCircle, FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from '../styles';
import { Button } from '../../../../../components/ui';

const NewPost = () => {
  return (
    <Header>
      <h2>Nova Publicação</h2>

      <div style={{ display: 'flex' }}>
        <Link to="../posts">
          <Button color="primary" variant="outlined">
            <FiXCircle />
            Cancelar
          </Button>
        </Link>

        <Button color="secondary" style={{ marginLeft: 8 }}>
          <FiPlusCircle />
          Adicionar
        </Button>
      </div>
    </Header>
  );
};

export default NewPost;
