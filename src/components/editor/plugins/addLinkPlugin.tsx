import React from 'react';

export const linkStrategy = (
  contentBlock: any,
  callback: any,
  contentState: any
) => {
  contentBlock.findEntityRanges((character: any) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    );
  }, callback);
};

export const Link = ({ children, ...props }: any) => {
  const { contentState, entityKey } = props;
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <a
      className="link"
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
      href={url}
    >
      {children}
    </a>
  );
};

const addLinkPlugin = {
  decorators: [
    {
      strategy: linkStrategy,
      component: Link,
    },
  ],
};

export default addLinkPlugin;
