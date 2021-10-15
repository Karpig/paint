import React from 'react';

import styles from './Menu.css';

const Menu = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.row}>
          <span className={styles.title}>Paint</span>
          <nav className={styles.navigation}>
            <div className={styles.navigation__item}>File</div>
            <div className={styles.navigation__item}>Edit</div>
            <div className={styles.navigation__item}>View</div>
            <div className={styles.navigation__item}>Image</div>
            <div className={styles.navigation__item}>Layers</div>
            <div className={styles.navigation__item}>Correction</div>
            <div className={styles.navigation__item}>Effects</div>
            <div className={styles.navigation__item}>About</div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
