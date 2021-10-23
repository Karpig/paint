import React from 'react';

import styles from './Toolbar.css';
import Icon from '@components/Icon';
import { useDispatch } from 'react-redux';
import { setTool } from '@store/Tool';
import Pencil from '@modules/Pencil';

const Toolbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <Icon name="pencil" onClick={() => dispatch(setTool(new Pencil()))} />
      </div>
      <div className={styles.item}>
        <Icon name="brush" />
      </div>
      <div className={styles.item}>
        <Icon name="fill" />
      </div>
      <div className={styles.item}>
        <Icon name="pipette" />
      </div>
      <div className={styles.item}>
        <Icon name="text" />
      </div>
      <div className={styles.item}>
        <Icon name="hand" />
      </div>
      <div className={styles.item}>
        <Icon name="eraser" />
      </div>
      <div className={styles.item}>
        <Icon name="brush" />
      </div>
    </div>
  );
};

export default Toolbar;
