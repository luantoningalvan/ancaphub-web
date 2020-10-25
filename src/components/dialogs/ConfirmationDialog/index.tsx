import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FiX as CloseIcon } from 'react-icons/fi';
import { Button, IconButton, Modal } from 'snake-ui';

interface ConfirmationDialogProps {
  show: boolean;
  title: string | JSX.Element;
  message: string | JSX.Element;
  onClose(): void;
  onConfirm(): void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  show,
  title,
  message,
  onClose,
  onConfirm,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open={show} onClose={onClose}>
      <div className="dialog-header">
        <h4>{title}</h4>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className="dialog-message">
        <p>{message}</p>
      </div>

      <div className="dialog-actions">
        <Button
          onClick={onClose}
          size="small"
          color="primary"
          variant="outlined"
        >
          <FormattedMessage id="common.cancel" />
        </Button>
        <Button onClick={handleConfirm} size="small" color="secondary">
          <FormattedMessage id="common.delete" />
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
