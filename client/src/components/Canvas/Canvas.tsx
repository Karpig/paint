import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTool } from '@store/Tool';
import Layer from '@modules/Layer';
import Brush from '@modules/Brush';

import styles from './Canvas.css';

const Canvas = () => {
  const containerEl = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!containerEl.current) return;

    const layer = new Layer(containerEl.current);
    dispatch(setTool(new Brush(layer.canvas)));
  }, []);

  return <div ref={containerEl} className={styles.root} />;
};

export default Canvas;
