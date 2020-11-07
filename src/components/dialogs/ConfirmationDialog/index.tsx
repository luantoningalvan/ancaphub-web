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
  title = '',
  message,
  onClose,
  onConfirm,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open={show} onClose={onClose} title={title as string} showCloseIcon>
      <div style={{ padding: '0 16px 8px 16px' }}>
        <p>{message}</p>
      </div>

      <div style={{ padding: 16, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} color="neutral">
          <FormattedMessage id="common.cancel" />
        </Button>
        <Button
          onClick={handleConfirm}
          color="secondary"
          style={{ marginLeft: 8 }}
        >
          <FormattedMessage id="common.delete" />
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
