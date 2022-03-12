import React, { useEffect, useCallback, useState } from "react";
import { FiPlusCircle, FiEdit, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FormattedDate } from "react-intl";
import { parseISO, addDays } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { LoadContent, ConfirmationDialog } from "../../../../../components";
import { Button, Paper, IconButton, Breadcrumbs, Grid } from "snake-ui";
import { Table } from "../styles";
import { PageHeader } from "../../styles";
import {
  getProjectPostsRequest,
  removeProjectPostRequest,
} from "../../../../../redux/actions/projects";

const PostList: React.FC<{ project: any }> = ({ project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, loadingPosts } = useSelector((state: any) => state.projects);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    dispatch(getProjectPostsRequest(project.id));
  }, [dispatch, project.id]);

  const handleDeletePost = useCallback((id) => {
    setShowDeleteDialog(id);
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageHeader>
            <div className="page-title">
              <Breadcrumbs list={[{ title: "Postagens" }]} />
              <h2>Postagens</h2>
            </div>
            <Link to="new">
              <Button color="primary">
                <FiPlusCircle />
                Nova
              </Button>
            </Link>
          </PageHeader>
        </Grid>
        <Grid item xs={12}>
          <LoadContent loading={loadingPosts}>
            {posts.length > 0 ? (
              <Table>
                <thead>
                  <th>Título</th>
                  <th>Data</th>
                  <th>Autor</th>
                  <th style={{ textAlign: "right" }}>Ações</th>
                </thead>

                <tbody>
                  {posts.map((post: any) => (
                    <tr key={post.id}>
                      <th>{post.title}</th>
                      <th>
                        <FormattedDate
                          value={addDays(parseISO(post.created_at), 1)}
                          year="numeric"
                          month="long"
                          day="2-digit"
                        />
                      </th>
                      <th>{post.author.name}</th>
                      <th className="actions">
                        <IconButton
                          icon={<FiEdit />}
                          onClick={() =>
                            navigate(
                              `/projects/${project.id}/manage/posts/edit?postId=${post.id}`
                            )
                          }
                        />
                        <IconButton
                          icon={<FiTrash />}
                          onClick={() => handleDeletePost(post.id)}
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
        </Grid>
      </Grid>
      <ConfirmationDialog
        show={showDeleteDialog}
        message="Deseja mesmo publicação essa postagem? Essa ação é definitiva!"
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={() =>
          dispatch(
            removeProjectPostRequest({
              projectId: project.id,
              postId: showDeleteDialog,
            })
          )
        }
        title="Deletar publicação"
      />
    </>
  );
};

export default PostList;
