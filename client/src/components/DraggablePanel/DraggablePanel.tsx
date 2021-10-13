import React, { MouseEvent, FC, useEffect, useRef, useState } from 'react';
import Icon from '@components/Icon';
import useDragging from '../../hooks/useDragging';

import styles from './DraggablePanel.css';

interface DraggablePanelProps {
  title: string;
  code: string;
}

const DraggablePanel: FC<DraggablePanelProps> = props => {
  const { children, code, title } = props;
  const [ref, x, y, isDragging] = useDragging(code);

  return (
    <div ref={ref} className={styles.root} style={{ left: `${x}px`, top: `${y}px` }}>
      <div className={styles.draggable}>
        <Icon name="draggable" />
      </div>
      <div className={styles.head}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default DraggablePanel;
