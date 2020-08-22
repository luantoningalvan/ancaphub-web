import React, { useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { FiX as CloseIcon, FiUpload as UploadIcon } from 'react-icons/fi';
import styled from 'styled-components';
import Slider from 'rc-slider';
import Cropper from 'react-easy-crop';
import { IconButton, CardHeader, CardBody, Dialog } from '../ui';

const UplaodArea = styled.label`
  height: 250px;
  width: 300px;
  border-radius: 8px;
  border: 2px dashed ${(props) => props.theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    height: 40px;
    width: 40px;
    margin-bottom: 16px;
  }
`;

const CropperStyle = styled.div`
  width: 450px;

  .crop-content {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
  }

  img {
    height: auto;
    max-height: 100%;
  }

  .slider {
    padding: 16px;
  }
`;

const EditAvatar = ({
  open,
  dialogTitle,
  onClose,
  onUpdate,
  aspect = 1 / 1,
  shape = 'round',
}) => {
  const [image, setImage] = useState('');
  const [cropState, setCropState] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropInfo, setCropInfo] = useState({});

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCropInfo({ croppedArea, croppedAreaPixels });
  }, []);

  const handleCrop = () => {
    setCropState(!cropState);
  };

  const handleSelectImage = (e) => {
    setImage({
      image: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
    handleCrop();
  };
  const handleCancel = () => {
    setImage('');
    onClose();
  };

  const handleUpload = async () => {
    if (image.image) {
      const formData = new FormData();
      formData.append('data', JSON.stringify(cropInfo));
      formData.append('file', image.image);
      onUpdate(formData);
      handleCrop();
      handleCancel();
    }
  };

  return (
    <Dialog show={open}>
      <CardHeader
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton icon={<CloseIcon />} onClick={handleCancel} />
            {dialogTitle}
          </div>
        }
        actions={[
          {
            show: image !== '',
            action: handleUpload,
            label: <FormattedMessage id="common.update" />,
          },
        ]}
        style={{ padding: 8 }}
      />

      {image !== '' ? (
        <CropperStyle>
          <div className="crop-content">
            <Cropper
              image={image.preview}
              crop={crop}
              zoom={zoom}
              aspect={aspect || 1 / 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape={shape}
            />
          </div>
          <div className="slider">
            <Slider
              value={zoom}
              min={1}
              max={3}
              color="secondary"
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(value) => setZoom(value)}
            />
          </div>
        </CropperStyle>
      ) : (
        <CardBody>
          <UplaodArea htmlFor="upload-avatar">
            <input
              id="upload-avatar"
              type="file"
              name="file"
              onChange={handleSelectImage}
            />
            <UploadIcon />
            <FormattedMessage id="components.imageUpload.dragHere" />
          </UplaodArea>
        </CardBody>
      )}
    </Dialog>
  );
};

export default EditAvatar;
