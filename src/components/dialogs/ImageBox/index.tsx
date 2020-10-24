import React, { useState } from 'react';
import { FiX as CloseIcon } from 'react-icons/fi';
import { IconButton, Modal } from 'snake-ui';
import { ImageBoxContainer } from './styles';

const ImageBox: React.FC<{ src: string }> = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <ImageBoxContainer>
      <img
        style={{ width: '100%' }}
        src={src}
        alt=""
        onClick={() => setOpen(true)}
      />

      <Modal open={open} onClose={() => setOpen(false)}>
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
      </Modal>
    </ImageBoxContainer>
  );
};

export default ImageBox;
