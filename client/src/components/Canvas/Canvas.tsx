import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTool, setTool } from '@store/Tool';
import Layer from '@modules/Layer';

import styles from './Canvas.css';
import Brush from '@modules/Brush';

const Canvas = () => {
  const containerEl = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const tool = useSelector(getTool);

  useEffect(() => {
    if (!containerEl.current) return;

    const layer = new Layer(containerEl.current);
    dispatch(setTool(new Brush(layer)));
  }, []);

  return <div ref={containerEl} className={styles.root} />;
};

export default Canvas;
