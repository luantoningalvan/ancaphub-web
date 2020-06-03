/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import CloseIcon from 'react-ionicons/lib/IosClose';
import { Dialog } from '../Dialog';
import { IconButton } from '../Button';

const ImageBox = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        marginTop: 16,
        cursor: 'pointer',
        width: '100%',
        maxHeight: 350,
        overflow: 'hidden',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        style={{ width: '100%' }}
        src={src}
        alt=""
        onClick={() => setOpen(true)}
      />

      <Dialog show={open}>
        <IconButton
          icon={<CloseIcon />}
          color="primary"
          style={{
            position: 'absolute',
            left: 16,
            top: 16,
            height: 40,
            width: 40,
          }}
          onClick={() => setOpen(false)}
        />
        <img src={src} alt="" />
      </Dialog>
    </div>
  );
};

export { ImageBox };
