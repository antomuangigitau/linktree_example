import React from 'react';
import styles from './Header.module.css';
import { Img, ArrowShare } from '../../icons';
const Header = () => {
  return (
    <header className={styles['App__header']}>
      <div className={styles['container']}>
        <div className={styles['header__container']}>
          <Img id='profile__img'></Img>
          <h4 className={styles.name}>Annete Black</h4>
        </div>
        <div className={styles.round}>
          <ArrowShare />
        </div>
      </div>
    </header>
  );
};

export default Header;
