import React, { useEffect, useState } from "react";
import { FiXCircle, FiPlusCircle } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { PageHeader } from "../../styles";
import { TextField, Dropzone } from "../../../../../components";
import { Button, Paper, Breadcrumbs, Grid } from "snake-ui";
import FullEditor from "../../../../../components/editor/FullEditor";
import {
  createProjectPostRequest,
  getSingleProjectPostRequest,
} from "../../../../../redux/actions/projects";

const NewPost: React.FC<{ project: any; editing?: boolean }> = ({
  project,
  editing,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState<any>(null);
  const { loadingPosts, post } = useSelector((state: any) => state.projects);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const postId = useQuery().get("postId");

  useEffect(() => {
    dispatch(getSingleProjectPostRequest({ postId, projectId: project.id }));
  }, []);

  const handleSubmit: SubmitHandler = ({ title, content }) => {
    const toRaw = JSON.stringify(convertToRaw(content.getCurrentContent()));

    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", toRaw);
    formData.append("thumbnail", image);

    dispatch(
      createProjectPostRequest({
        navigate,
        project: project.id,
        data: formData,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} initialData={post}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PageHeader>
            <div className="page-title">
              <Breadcrumbs
                list={[
                  {
                    title: "Postagens",
                    onClick: () =>
                      navigate(`/projects/${project.id}/manage/posts`),
                  },
                  { title: "Nova" },
                ]}
              />
              <h2>Adicionar Postagem</h2>
            </div>
            <div style={{ display: "flex" }}>
              <Link to="../posts">
                <Button color="primary" variant="outlined">
                  <FiXCircle />
                  Cancelar
                </Button>
              </Link>

              <Button type="submit" color="secondary" style={{ marginLeft: 8 }}>
                <FiPlusCircle />
                Adicionar
              </Button>
            </div>
          </PageHeader>
        </Grid>
        <Grid item xs={12}>
          <Paper padding>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="title" placeholder="Título da postagem" />
              </Grid>
              <Grid item xs={12}>
                <FullEditor
                  name="content"
                  initialState={
                    editing
                      ? EditorState.createWithContent(
                          convertFromRaw(JSON.parse(post.content))
                        )
                      : null
                  }
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <h3 style={{ marginBottom: 16 }}>Capa</h3>
          <Dropzone
            name="cover"
            acceptedFormats={[".png"]}
            onDrop={(acceptedFiles: any, files: any, setFiles: any) => {
              const newFiles: any = [];
              acceptedFiles.forEach((file: any) => {
                const fileName = String(file.name);
                const extension = file.name.split(".").pop();
                const size = file.size;
                const preview = URL.createObjectURL(file);
                newFiles.push({
                  fileName,
                  extension,
                  size,
                  preview,
                  state: "success",
                });
              });
              setFiles([...files, ...newFiles]);
            }}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default NewPost;
