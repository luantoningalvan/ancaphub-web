import React from 'react';
import { FiPlusCircle, FiEdit, FiTrash } from 'react-icons/fi';
import { Button, IconButton } from '../../../../components/ui';
import { Header, Table } from './styles';

const Posts = () => {
  return (
    <>
      <Header>
        <h2>Publicações</h2>
        <Button color="primary">
          <FiPlusCircle />
          Nova
        </Button>
      </Header>
      <Table>
        <thead>
          <th>Título</th>
          <th>Data</th>
          <th>Autor</th>
          <th style={{ textAlign: 'right' }}>Ações</th>
        </thead>

        <tbody>
          <tr>
            <th>Teste</th>
            <th>27/07/2020</th>
            <th>Luan Tonin Galvan</th>
            <th className="actions">
              <IconButton icon={<FiEdit />} />
              <IconButton icon={<FiTrash />} />
            </th>
          </tr>
          <tr>
            <th>Teste</th>
            <th>27/07/2020</th>
            <th>Luan Tonin Galvan</th>
            <th className="actions">
              <IconButton icon={<FiEdit />} />
              <IconButton icon={<FiTrash />} />
            </th>
          </tr>
          <tr>
            <th>Teste</th>
            <th>27/07/2020</th>
            <th>Luan Tonin Galvan</th>
            <th className="actions">
              <IconButton icon={<FiEdit />} />
              <IconButton icon={<FiTrash />} />
            </th>
          </tr>
          <tr>
            <th>Teste</th>
            <th>27/07/2020</th>
            <th>Luan Tonin Galvan</th>
            <th className="actions">
              <IconButton icon={<FiEdit />} />
              <IconButton icon={<FiTrash />} />
            </th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Posts;
