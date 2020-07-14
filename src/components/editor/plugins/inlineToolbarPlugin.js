import React from 'react';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from 'draft-js-buttons';
import createinlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';

// Heading button SVG
import { ReactComponent as HeadingIcon } from '../../../assets/headingButton.svg';

// Plugin instance
const inlineToolbar = createinlineToolbarPlugin();

// Headlines picker
const HeadlinePicker = (props) => {
  const onWindowClick = () => props.onOverrideContent(undefined);

  React.useEffect(() => {
    setTimeout(() => window.addEventListener('click', onWindowClick));

    return function cleanup() {
      window.removeEventListener('click', onWindowClick);
    };
  });

  return (
    <>
      {[HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton].map(
        (Button, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Button key={index} {...props} />
        )
      )}
    </>
  );
};

export const HeadlineButton = (props) => {
  const onMouseDown = (event) => event.preventDefault();

  const onClick = () => {
    props.onOverrideContent(HeadlinePicker);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      role="presentation"
      className="draftJsToolbar__buttonWrapper__1Dmqh"
    >
      <button
        type="button"
        onClick={onClick}
        className="draftJsToolbar__button__qi1gf"
      >
        <HeadingIcon />
      </button>
    </div>
  );
};

export default inlineToolbar;
