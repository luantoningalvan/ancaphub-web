import React, { useEffect, useCallback, useState } from 'react';
import { FiPlusCircle, FiEdit, FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedDate } from 'react-intl';
import { parseISO, addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  LoadContent,
  ConfirmationDialog,
  Paper,
  Breadcrumb,
} from '../../../../../components/ui';
import { Table } from '../styles';
import { PageHeader } from '../../styles';
import { getProjectPostsRequest } from '../../../../../actions/projects';

const PostList = ({ project }) => {
  const dispatch = useDispatch();
  const { posts, loadingPosts } = useSelector((state) => state.projects);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    dispatch(getProjectPostsRequest(project._id));
  }, []);

  const handleDeletePost = useCallback((id) => {
    setShowDeleteDialog(id);
  }, []);

  return (
    <>
      <PageHeader>
        <div className="page-title">
          <Breadcrumb list={[{ title: 'Postagens' }]} />
          <h2>Postagens</h2>
        </div>
        <Link to="posts/new">
          <Button color="primary">
            <FiPlusCircle />
            Nova
          </Button>
        </Link>
      </PageHeader>

      <LoadContent loading={loadingPosts}>
        {posts.length > 0 ? (
          <Table>
            <thead>
              <th>Título</th>
              <th>Data</th>
              <th>Autor</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </thead>

            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <th>{post.title}</th>
                  <th>
                    <FormattedDate
                      value={addDays(parseISO(post.createdAt), 1)}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </th>
                  <th>{post.author.name}</th>
                  <th className="actions">
                    <IconButton icon={<FiEdit />} />
                    <IconButton
                      icon={<FiTrash />}
                      onClick={() => handleDeletePost(post._id)}
                    />
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Paper padding>Nenhuma publicação criada ainda</Paper>
        )}
      </LoadContent>
      <ConfirmationDialog
        show={showDeleteDialog}
        message="Deseja mesmo publicação essa postagem? Essa ação é definitiva!"
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={() => console.log(showDeleteDialog)}
        title="Deletar publicação"
      />
    </>
  );
};

export default PostList;
