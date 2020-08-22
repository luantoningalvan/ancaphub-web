import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Card, CardHeader, CardBody } from '../Card';
import { Collapse } from '../Collapse';

const ExpansionPanel = ({ title, children, ...rest }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Card bordered {...rest}>
      <CardHeader
        title={title}
        actions={[
          {
            action: handleOpen,
            label: open ? <FiChevronUp /> : <FiChevronDown />,
            type: 'icon',
            show: true,
          },
        ]}
        onClick={handleOpen}
        style={{ cursor: 'pointer', padding: 16 }}
      />

      <Collapse expanded={open}>
        <CardBody>{children}</CardBody>
      </Collapse>
    </Card>
  );
};

export { ExpansionPanel };
