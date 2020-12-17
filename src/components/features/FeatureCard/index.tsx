import React, { useState } from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import { FeatureCardContainer, Progress } from './styles';
import { Modal } from 'snake-ui';
import Player from 'react-player';

interface FeatureCardProps {
  title?: string;
  description?: string;
  videoUrl?: string;
  progress?: number;
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { videoUrl, title, description, icon, progress = 0 } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Player url={videoUrl} />
      </Modal>

      <FeatureCardContainer>
        <button onClick={() => setOpen(true)}>
          <FiPlayCircle size={22} />
        </button>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
        <Progress passed={progress} />
      </FeatureCardContainer>
    </>
  );
};

export default FeatureCard;
