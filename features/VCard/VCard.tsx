import React from 'react';
import Image from 'next/image';
import styles from './VCard.module.scss';
import profile from '../../img/profile.png';

interface Props {
  showAvatar?: boolean;
}

export const VCard: React.FC<Props> = ({ showAvatar = false }) => {
  return (
    <div className={styles.wrapper}>
      {showAvatar && (
        <Image src={profile} alt="avatar" width={100} height={100} placeholder="blur" />
      )}

      <div>
        <h1 className={styles.heading1}>
          Hello,
          <br />
          I&apos;m Jose Nunes
        </h1>
        <h2 className={styles.heading2}>
          <span>Frontend</span> Developer
        </h2>
      </div>
    </div>
  );
};
