import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { Contacts } from '../Contacts/Contacts';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div>
        <span className={styles.title} style={{ marginRight: 8 }}>
          Jose Nunes
        </span>

        <span className={styles.title}>•</span>

        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>

        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </div>

      <div className={styles.contacts}>
        <Contacts />

        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
