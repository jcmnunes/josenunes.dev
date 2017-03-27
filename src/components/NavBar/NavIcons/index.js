/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { navIcons } from '/jn.config';
import styles from './NavIcons.css';

const NavIcons = () =>
  <div className={styles.root}>
    {
      navIcons.map(icon =>
        <img
          key={icon.name}
          src={require(`./images/${icon.img}.svg`)}
          alt={icon.name}
          style={{
            width: icon.size,
            height: icon.size,
            marginLeft: 7,
          }}
        />,
      )
    }
  </div>;

export default NavIcons;
