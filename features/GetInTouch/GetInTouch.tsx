import React from 'react';
import styles from './GetInTouch.module.scss';
import { Contacts } from '../Contacts/Contacts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const GetInTouch = () => {
  return (
    <>
      <SectionTitle>Get in touch</SectionTitle>

      <div className={styles.wrapper}>
        <Contacts />

        <SocialLinks />
      </div>
    </>
  );
};
