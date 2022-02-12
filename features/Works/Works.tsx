import React from 'react';
import Image from 'next/image';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ListItem } from '../../components/ListItem/ListItem';
import { works } from './Works.meta';
import styles from './Works.module.scss';

export const Works = () => {
  return (
    <section>
      <SectionTitle>Recent Work Experiences</SectionTitle>

      <ul className={styles.list}>
        {works.map(work => (
          <ListItem
            key={work.key}
            href={work.url}
            text={work.linkText}
            helpText={work.helpText}
            auxText={work.auxInfo}
          >
            <Image
              src={work.img.src}
              alt={work.img.alt}
              width={work.img.width}
              height={work.img.height}
            />
          </ListItem>
        ))}
      </ul>
    </section>
  );
};
