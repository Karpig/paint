import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor, setLineWidth } from '@store/Tool';

import styles from './SettingBar.css';

const SettingBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.item}>
            <label className={styles.item__label} htmlFor="">
              Толщина линии
            </label>
            <input
              className={styles.item__field}
              type="number"
              defaultValue={1}
              onChange={event => dispatch(setLineWidth(event.target.value))}
            />
          </div>

          <div className={styles.item}>
            <label className={styles.item__label} htmlFor="">
              Цвет линии
            </label>
            <input
              className={styles.item__field}
              type="color"
              defaultValue={1}
              onChange={event => dispatch(setColor(event.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
