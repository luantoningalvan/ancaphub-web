import React, { useState } from 'react';
import ExpandIcon from 'react-ionicons/lib/IosArrowDown';
import { Card, CardHeader, CardBody } from '../Card';
import { Collapse } from '../Collapse';

const ExpansionPanel = ({ title, children, ...rest }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Card bordered {...rest}>
      <CardHeader
        title={title}
        icon={ExpandIcon}
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
