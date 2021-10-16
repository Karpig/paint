import React, { useEffect, useRef } from 'react';
import Layer from '@modules/Layer';

import styles from './Canvas.css';

const Canvas = () => {
  const containerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerEl.current) return;

    new Layer(containerEl.current);
  }, []);

  return <div ref={containerEl} className={styles.root} />;
};

export default Canvas;
