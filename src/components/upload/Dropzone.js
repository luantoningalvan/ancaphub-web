import React, { useRef, useEffect } from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

const Upload = ({ onUpload, file, ...rest }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current !== null) {
      const reader = new FileReader();

      reader.onloadend = () => {
        imageRef.current.src = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        imageRef.current.src = '';
      }
    }
  }, [file]);

  function renderDragMessage(isDragActive, isDragRejest) {
    if (!isDragActive) {
      return <UploadMessage>Selecione ou arraste a imagem aqui.</UploadMessage>;
    }

    if (isDragRejest) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }

  return (
    <div {...rest}>
      {file === null ? (
        <Dropzone
          accept="image/png, image/jpeg"
          onDropAccepted={(files) => onUpload(files)}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} data-testid="upload" />
              {renderDragMessage(isDragActive, isDragReject)}
            </DropContainer>
          )}
        </Dropzone>
      ) : (
        <img ref={imageRef} alt="Preview" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default Upload;
