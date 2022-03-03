import React, { useRef, useState, useContext, createContext } from "react";
import { FormattedMessage } from "react-intl";
import {
  FiPlayCircle as VideoIcon,
  FiBook as BookIcon,
  FiFileText as ArticleIcon,
} from "react-icons/fi";

import { Button, Container, Grid, Paper, Hero, Card, CardBody } from "snake-ui";
import { Contribute } from "./styles";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { Dropzone } from "../../../../components";
import CreateAuthor from "../../../../components/authors/CreateAuthor";
import BookForm from "./forms/BookForm";
import ArticleForm from "./forms/ArticleForm";
import VideoForm from "./forms/VideoForm";
import { convertToRaw } from "draft-js";

import { useDispatch } from "react-redux";
import { createItemRequest } from "../../../../redux/actions/library";

const forms = {
  book: <BookForm />,
  article: <ArticleForm />,
  video: <VideoForm />,
};

export const CreateAuthorDialog = createContext<any>({});

export default () => {
  const [form, setForm] = useState<"book" | "article" | "video" | undefined>();
  const [step, setStep] = useState(1);
  const [createAuthor, setCreateAuthor] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { goBack, push } = useHistory();
  const dispatch = useDispatch();

  const handleForm = (formAttr: any) => {
    setForm(formAttr);
    setStep(2);
  };

  async function handleSubmit(data: any) {
    try {
      const schema = Yup.object().shape({
        author_id: Yup.string().required("É necessário escolher um autor"),
        title: Yup.string().required("É necessário fornecer um título"),
        content: Yup.mixed().test(
          "editor-is-empty",
          "O conteúdo do artigo não pode estar vazio",
          function () {
            return form === "article"
              ? data.content?.getCurrentContent()?.hasText()
              : true;
          }
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      let formData = new FormData();

      formData.append("title", data.title);
      formData.append("cover", data.cover);
      formData.append("author_id", data.author_id);
      formData.append("type", form as string);

      if (form === "video") formData.append("video_url", data.video_url);

      formData.append(
        "content",
        form === "article"
          ? JSON.stringify(convertToRaw(data.content.getCurrentContent()))
          : data.content
      );

      dispatch(createItemRequest(formData, push("/library")));
    } catch (err) {
      console.log(err);

      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef?.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Hero
          title="Enviar contribuição"
          description="Conheça as regras e o processo de aprovação antes de enviar sua contribuição"
          actions={
            <>
              <Button color="neutral" onClick={() => goBack()} type="button">
                Cancelar
              </Button>
              <Button disabled={step === 1} style={{ marginLeft: 8 }}>
                Enviar
              </Button>
            </>
          }
        />
        <Contribute>
          {step === 1 && (
            <>
              <h3 style={{ marginTop: 32 }}>Selecione o tipo de material</h3>

              <Grid container justifyContent="center">
                <Grid item xs={12} md={9} lg={8}>
                  <Paper padding>
                    <Grid container spacing={3} className="item-type-list">
                      <Grid item xs={12} sm={4}>
                        <div className="item-type">
                          <button
                            type="button"
                            onClick={() => handleForm("article")}
                          >
                            <ArticleIcon />
                            <h4>
                              <FormattedMessage id="common.article" />
                            </h4>
                          </button>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <div className="item-type">
                          <button
                            type="button"
                            onClick={() => handleForm("book")}
                          >
                            <BookIcon />
                            <h4>
                              <FormattedMessage id="common.book" />
                            </h4>
                          </button>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <div className="item-type">
                          <button
                            type="button"
                            onClick={() => handleForm("video")}
                          >
                            <VideoIcon />
                            <h4>
                              <FormattedMessage id="common.video" />
                            </h4>
                          </button>
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </>
          )}

          {step === 2 && form !== undefined && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                {/* @ts-ignore  */}
                <Paper padding>{forms[form]}</Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <h3
                    style={{
                      margin: 0,
                      padding: "16px 16px 0px 16px",
                      fontSize: "1rem",
                    }}
                  >
                    Capa
                  </h3>
                  <CardBody>
                    <Dropzone
                      name="cover"
                      acceptedFormats={[".png", ".jpg", ".jpeg"]}
                      onDrop={(
                        acceptedFiles: any,
                        files: any,
                        setFiles: any
                      ) => {
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
                      multiple
                    />
                  </CardBody>
                </Card>
              </Grid>
            </Grid>
          )}
        </Contribute>
      </Form>
    </Container>
  );
};
