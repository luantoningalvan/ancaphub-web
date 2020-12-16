import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  DroppableArea,
  FileList,
  FileListItem,
  EmptyList,
  Avatar,
} from './styles';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { FiCheckCircle, FiPlusCircle, FiAlertTriangle } from 'react-icons/fi';
import { Button, CircularLoader } from 'snake-ui';
import { useDropzone } from 'react-dropzone';
import filesize from 'filesize';
import { useField, UnformField } from '@unform/core';

export interface UploadProps {
  disabled?: boolean;
  label?: string | number | boolean | object | {};
  error?: any;
  name: string;
  required?: boolean;
  multiple?: boolean;
  maxFileSize?: number;
  maxFiles?: number;
  acceptedFormats: string[];
  value?: any;
  onDrop?(acceptFiles: any[], files: FileProps[], setFiles: any): void;
  onChange?: any;
  [key: string]: any;
}

export interface FileProps {
  fileName: string;
  extension: string;
  size: number;
  state?: 'success' | 'error';
  loading?: boolean;
  preview?: any;
}

const Upload: React.FC<UploadProps> = (props) => {
  const {
    label,
    info,
    required,
    name,
    maxFiles,
    maxFileSize,
    onDrop,
    multiple,
    acceptedFormats,
    disabled,
  } = props;
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const dropzoneInputRef = useRef<any>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dropzoneInputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
      },
    });
  }, [fieldName, registerField]);

  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<FileProps[]>([]);
  const [allAcceptedFiles, setAllAcceptedFiles] = useState<any>([]);

  const handleDrop = (acceptFiles: any) => {
    setIsOver(false);
    setAllAcceptedFiles([...allAcceptedFiles, ...acceptFiles]);
    onDrop && onDrop(acceptFiles, files, setFiles);
  };

  const handleOpenDialog = () => {
    if (
      (!multiple && files.length === 0) ||
      (multiple && (!maxFiles || maxFiles > files.length))
    ) {
      dropzoneInputRef?.current?.click();
    }

    return;
  };

  const handleDelete = useCallback(
    (name) => {
      const newFiles = [...files];
      const findFile = newFiles.findIndex((f) => f.fileName === name);
      newFiles.splice(findFile, 1);
      setFiles(newFiles);

      const newAllAcceptedFiles = [...allAcceptedFiles];
      const findFile2 = newAllAcceptedFiles.findIndex(
        (f: any) => f.name === name
      );
      newAllAcceptedFiles.splice(findFile2, 1);
      setAllAcceptedFiles(newAllAcceptedFiles);
    },
    [files, allAcceptedFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    onDragLeave: () => setIsOver(false),
    onDragOver: () => setIsOver(true),
    maxSize: maxFileSize,
    multiple: multiple,
    accept: acceptedFormats,
  });

  return (
    <>
      <DroppableArea {...getRootProps()} isOver={isOver} disabled={disabled}>
        <input
          {...getInputProps()}
          style={{ display: 'none' }}
          ref={dropzoneInputRef}
        />

        <div className="backdrop">Solte o arquivo aqui</div>
        <div className="blur">
          {files.length > 0 ? (
            <>
              <FileList>
                {files.map((file, index) => (
                  //@ts-ignore
                  <FileListItem
                    loading={file.loading}
                    state={file.state}
                    key={`${name}-file-${index}`}
                  >
                    {['png', 'jpg', 'jpeg'].includes(file.extension) ? (
                      <Avatar src={file.preview} />
                    ) : (
                      <div>{file.extension}</div>
                    )}

                    <div className="file-info">
                      <h5>{file.fileName}</h5>
                      <div>
                        <span style={{ color: '#8B8B8B' }}>
                          {filesize(file.size)}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleDelete(file.fileName)}
                        >
                          Excluir
                        </button>
                      </div>
                    </div>

                    {file.loading ? (
                      <CircularLoader size={22} />
                    ) : (
                      <span className="upload-state-icon">
                        {file.state === 'success' ? (
                          <FiCheckCircle />
                        ) : (
                          <FiAlertTriangle />
                        )}
                      </span>
                    )}
                  </FileListItem>
                ))}
              </FileList>
              {(!multiple && files.length === 0) ||
                (multiple && (!maxFiles || maxFiles > files.length) && (
                  <Button
                    variant="outlined"
                    onClick={handleOpenDialog}
                    style={{ margin: '0px 16px 16px 16px' }}
                    data-testid={`${name}-add-more-button`}
                  >
                    <FiPlusCircle style={{ marginRight: 8 }} />
                    Adicionar arquivos
                  </Button>
                ))}
            </>
          ) : (
            <EmptyList onClick={handleOpenDialog}>
              <span>Arraste arquivos aqui ou clique para buscar...</span>
            </EmptyList>
          )}
        </div>
      </DroppableArea>
    </>
  );
};

export default Upload;
