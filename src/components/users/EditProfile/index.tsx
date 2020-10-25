import React, { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  FiEdit as EditIcon,
  FiUser,
  FiAlignJustify,
  FiGlobe,
  FiCalendar,
  FiMapPin,
  FiX as CloseIcon,
} from 'react-icons/fi';

import { updateProfileInfoRequest } from '../../../redux/actions/users';
import { TextField } from '../..';
import {
  IconButton,
  Button,
  Modal,
  Card,
  CardBody,
  CardHeader,
} from 'snake-ui';

const EditProfile = () => {
  const { formatMessage } = useIntl();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.profile.user);
  const handleClick = () => setOpen(!open);
  const editFormRef = useRef<FormHandles | null>(null);

  async function handleSubmit(validatedData: any) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(
            3,
            formatMessage({ id: 'account.settings.validation.nameShort' })
          )
          .max(
            30,
            formatMessage({ id: 'account.settings.validation.nameLong' })
          )
          .required(
            formatMessage({ id: 'account.settings.validation.nameRequired' })
          ),
        bio: Yup.string().max(
          160,
          formatMessage({ id: 'account.settings.validation.maxBioLength' })
        ),
        site: Yup.string().url(
          formatMessage({ id: 'account.settings.validation.invalidURL' })
        ),
        birthday: Yup.date()
          .max(
            new Date(),
            formatMessage({
              id: 'account.settings.validation.invalidBirthDate',
            })
          )
          .notRequired(),
      });

      await schema.validate(validatedData, {
        abortEarly: false,
      });
      dispatch(updateProfileInfoRequest(validatedData));
    } catch (err) {
      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        editFormRef?.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        <EditIcon />
        <span>
          <FormattedMessage id="components.editProfile.heading" />
        </span>
      </Button>

      <Modal
        onClose={handleClick}
        open={open}
        style={{ width: '100%', maxWidth: 420 }}
      >
        <Form
          initialData={{
            name: data.name,
            bio: data.bio || '',
            currentCity: data.currentCity || '',
            site: data.site || '',
            birthday:
              data.birthday && data.birthday !== null
                ? data.birthday.substring(0, 10)
                : undefined,
          }}
          onSubmit={handleSubmit}
          ref={editFormRef}
        >
          <Card>
            <CardHeader
              actions={[
                {
                  label: <FormattedMessage id="common.edit" />,
                  action: () => editFormRef?.current?.submitForm(),
                  show: true,
                },
              ]}
              title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton icon={<CloseIcon />} onClick={handleClick} />
                  <span style={{ marginLeft: 8 }}>
                    <FormattedMessage id="components.editProfile.heading" />
                  </span>
                </div>
              }
            />
            <CardBody>
              <FormattedMessage id="common.name">
                {(msg) => (
                  <TextField icon={FiUser} placeholder={msg} name="name" />
                )}
              </FormattedMessage>
              <FormattedMessage id="common.bio">
                {(msg) => (
                  <TextField
                    icon={FiAlignJustify}
                    placeholder={msg}
                    name="bio"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="nearby.location">
                {(msg) => (
                  <TextField
                    icon={FiMapPin}
                    placeholder={msg}
                    name="currentCity"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="common.website">
                {(msg) => (
                  <TextField icon={FiGlobe} placeholder={msg} name="site" />
                )}
              </FormattedMessage>
              <FormattedMessage id="common.birthday">
                {(msg) => (
                  <TextField
                    icon={FiCalendar}
                    type="date"
                    placeholder={msg}
                    name="birthday"
                  />
                )}
              </FormattedMessage>
            </CardBody>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default EditProfile;
