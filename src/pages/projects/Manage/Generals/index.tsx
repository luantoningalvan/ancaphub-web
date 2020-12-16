/* eslint-disable import/no-named-default */
import React, { useState, useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { Scope, FormHandles } from '@unform/core';
import { useDispatch } from 'react-redux';
import { FiDelete } from 'react-icons/fi';
import { IconButton, Button, Breadcrumbs, Grid } from 'snake-ui';
import { TextField, Select } from '../../../../components';
import { PageHeader } from '../styles';
import { EditAvatarContainer, EditCoverContainer } from './styles';
import {
  default as EditAvatar,
  default as EditCover,
} from '../../../../components/upload/CropImage';
import defaultProjectAvatar from '../../../../assets/default-project-avatar.png';
import {
  updateProjectRequest,
  updateProjectAvatarRequest,
  updateProjectCoverRequest,
  removeProjectAvatarRequest,
  removeProjectCoverRequest,
} from '../../../../redux/actions/projects';
import projectCategories from '../../../../assets/project-categories';

interface GeneralProps {
  project: {
    id: string;
    cover?: string;
    avatar?: string;
    type: string;
    links: any;
  };
}
const Generals: React.FC<GeneralProps> = ({ project }) => {
  const [editAvatarDialogState, setEditarAvatarDialogState] = useState(false);
  const [editCoverDialogState, setEditarCoverDialogState] = useState(false);
  const [links, setLinks] = useState<{ type: string; url: string }[]>([]);
  const formRef = useRef<FormHandles | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    dispatch(updateProjectRequest({ data, id: project.id }));
  };

  useEffect(() => {
    if (formRef !== null) {
      const formData: any = formRef?.current?.getData();

      setLinks(formData?.links || project.links || []);
    }
  }, [formRef, project]);

  const addSocialLink = () => setLinks([...links, { type: '', url: '' }]);
  const removeSocialLink = (index: number) =>
    setLinks(links.filter((_, i) => index !== i));

  return (
    <>
      <EditAvatar
        open={editAvatarDialogState}
        onClose={() => setEditarAvatarDialogState(false)}
        dialogTitle="Editar avatar do projeto"
        onUpdate={(data: any) =>
          dispatch(updateProjectAvatarRequest({ id: project.id, data }))
        }
      />

      <EditCover
        open={editCoverDialogState}
        onClose={() => setEditarCoverDialogState(false)}
        dialogTitle="Editar capa do projeto"
        shape="rect"
        aspect={3 / 1}
        onUpdate={(data: any) =>
          dispatch(updateProjectCoverRequest({ id: project.id, data }))
        }
      />

      <Form onSubmit={handleSubmit} initialData={project} ref={formRef}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader>
              <div className="page-title">
                <Breadcrumbs list={[{ title: 'Gerais' }]} />
                <h2>Gerais</h2>
              </div>

              <Button
                color="secondary"
                style={{ float: 'right', marginTop: 16 }}
                type="submit"
              >
                Salvar
              </Button>
            </PageHeader>
          </Grid>
          <Grid item xs={12}>
            <EditCoverContainer>
              <img
                src={
                  project.cover ||
                  'https://tokystorage.s3.amazonaws.com/images/default-cover.png'
                }
                alt="Profile cover"
              />

              <div className="cover-buttons">
                {project.cover ? (
                  <>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => setEditarCoverDialogState(true)}
                    >
                      Editar Capa
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(removeProjectCoverRequest(project.id))
                      }
                      style={{ background: '#d62000' }}
                      type="button"
                    >
                      Remover Capa
                    </Button>
                  </>
                ) : (
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => setEditarCoverDialogState(true)}
                  >
                    Adicionar Capa
                  </Button>
                )}
              </div>
            </EditCoverContainer>
          </Grid>

          <Grid item xs={4}>
            <EditAvatarContainer>
              <img
                src={project.avatar || defaultProjectAvatar}
                alt="Profile Pic"
              />
              <div className="buttons">
                {project.avatar ? (
                  <>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => setEditarAvatarDialogState(true)}
                    >
                      Editar Avatar
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(removeProjectAvatarRequest(project.id))
                      }
                      type="button"
                      style={{ background: '#d62000' }}
                    >
                      Remover Avatar
                    </Button>
                  </>
                ) : (
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => setEditarAvatarDialogState(true)}
                  >
                    Adicionar Avatar
                  </Button>
                )}
              </div>
            </EditAvatarContainer>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField placeholder="Nome do Projeto" name="name" />
              </Grid>
              <Grid item xs={12}>
                <Select
                  options={Object.entries(projectCategories).map((a) => ({
                    value: a[0],
                    label: a[1],
                  }))}
                  placeholder="Categoria"
                  name="category"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Descrição"
                  name="description"
                  multiline
                />
              </Grid>

              <Grid item xs={12}>
                <h3
                  style={{
                    marginBottom: 8,
                    fontSize: 20,
                  }}
                >
                  Links
                </h3>
                <ul>
                  {links.map((link, index) => (
                    <Scope
                      path={`links[${index}]`}
                      key={`${link.type + index + 1}`}
                    >
                      <li
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 8,
                        }}
                      >
                        <TextField placeholder="Link útil" name="url" />
                        <Select
                          placeholder="Rede"
                          name="type"
                          options={[
                            { label: 'Facebook', value: 'facebook' },
                            { label: 'Twitter', value: 'twitter' },
                            { label: 'Instagram', value: 'instagram' },
                            { label: 'YouTube', value: 'youtube' },
                            { label: 'Site', value: 'site' },
                          ]}
                          style={{ margin: '0px 8px' }}
                        />
                        <IconButton
                          icon={<FiDelete />}
                          type="button"
                          onClick={() => removeSocialLink(index)}
                        />
                      </li>
                    </Scope>
                  ))}
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginTop: 8 }}
                    type="button"
                    onClick={addSocialLink}
                  >
                    Adicionar Link
                  </Button>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default Generals;
