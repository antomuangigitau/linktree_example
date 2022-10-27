import React from 'react';
import styles from './Header.module.css';
import { Img, ArrowShare, Icon } from '../../icons';
const Header = () => {
  return (
    <header className={styles['App__header']}>
      <div className={styles['container']}>
        <div className={styles['main__header__container']}>
          <div className={styles['header__container']}>
            <Img id='profile__img' />
            <h4 id='twitter' className={styles.name}>
              Tony Mwartial
            </h4>
            <h4 id='slack' className={styles.slack}>
              Antony Mwangi
            </h4>
          </div>
        </div>
        <div className={styles.round}>
          <ArrowShare />
          <Icon />
        </div>
      </div>
    </header>
  );
};

export default Header;
