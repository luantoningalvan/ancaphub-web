import React, { useState } from 'react';
import { Select } from '../../';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import CreateAuthor from '../CreateAuthor';

export default () => {
  const authors = useSelector((state: any) => state.authors);
  const [createAuthor, setCreateAuthor] = useState(false);

  return (
    <>
      <CreateAuthor
        open={createAuthor}
        onClose={() => setCreateAuthor(false)}
      />
      <FormattedMessage id="common.author">
        {(msg: string) => (
          <Select
            name="author_id"
            placeholder={msg}
            options={authors.items.map((author: any) => ({
              label: author.name,
              value: author.id,
            }))}
            onAddButtonClick={() => setCreateAuthor(true)}
          />
        )}
      </FormattedMessage>
    </>
  );
};
