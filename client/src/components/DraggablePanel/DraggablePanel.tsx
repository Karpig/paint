import React, { FC } from 'react';
import Icon from '@components/Icon';
import useDragging from '../../hooks/useDragging';

import styles from './DraggablePanel.css';

interface DraggablePanelProps {
  title: string;
  code: string;
}

const DraggablePanel: FC<DraggablePanelProps> = props => {
  const { children, code, title } = props;
  const [ref, x, y] = useDragging(code);

  return (
    <div
      className={styles.root}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      ref={ref}
      title={title}
    >
      <div className={styles.draggable} data-draggable="target">
        <Icon name="draggable" />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default DraggablePanel;
