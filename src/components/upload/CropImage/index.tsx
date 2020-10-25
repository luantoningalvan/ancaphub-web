import React, { useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { FiX as CloseIcon, FiUpload as UploadIcon } from 'react-icons/fi';
import Slider from 'rc-slider';
import Cropper from 'react-easy-crop';
import { IconButton, CardHeader, CardBody, Modal } from 'snake-ui';
import { CropperStyle, UplaodArea } from './styles';

interface EditAvatarProps {
  open: boolean;
  dialogTitle: string;
  onClose(): void;
  onUpdate(data: any): void;
  aspect: any;
  shape: 'round' | 'rect';
}

const EditAvatar: React.FC<EditAvatarProps> = ({
  open,
  dialogTitle,
  onClose,
  onUpdate,
  aspect = 1 / 1,
  shape = 'round',
}) => {
  const [image, setImage] = useState<any>('');
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

  const handleSelectImage = (e: any) => {
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
      const formData: any = new FormData();
      formData.append('data', JSON.stringify(cropInfo));
      formData.append('avatar', image.image);
      onUpdate(formData);
      handleCrop();
      handleCancel();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
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
            {/* @ts-ignore */}
            <Slider
              value={zoom}
              min={1}
              max={3}
              color="secondary"
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(value: any) => setZoom(value)}
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
    </Modal>
  );
};

export default EditAvatar;
