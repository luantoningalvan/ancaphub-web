import React, { useContext } from 'react';
import { TextField, Select } from '../../../../../components';
import { FormattedMessage } from 'react-intl';
import FullEditor from 'components/editor/FullEditor';
import { useSelector } from 'react-redux';
import { CreateAuthorDialog } from '../';

export default () => {
  const authors = useSelector((state: any) => state.authors);
  const createAuthorDialog = useContext(CreateAuthorDialog);

  return (
    <>
      <FormattedMessage id="common.title">
        {(msg) => (
          <TextField
            name="title"
            placeholder={msg}
            style={{ marginBottom: 8 }}
          />
        )}
      </FormattedMessage>
      <FormattedMessage id="common.author">
        {(msg: string) => (
          <Select
            name="author_id"
            placeholder={msg}
            options={authors.items.map((author: any) => ({
              label: author.name,
              value: author.id,
            }))}
            style={{ marginBottom: 8 }}
            onAddButtonClick={() => createAuthorDialog.toggleDialog(true)}
          />
        )}
      </FormattedMessage>
      <FullEditor name="content" />
    </>
  );
};
