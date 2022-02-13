import React from 'react';
import styles from './ListItem.module.scss';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

const externalProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

interface Props {
  href: string;
  text: string;
  isExternal?: boolean;
  helpText?: string;
  auxText?: string;
}

export const ListItem: React.FC<Props> = ({
  text,
  href,
  helpText,
  auxText,
  isExternal,
  children,
}) => {
  return (
    <li className={styles.wrapper}>
      <Link href={href}>
        <a className={styles.link} {...(isExternal ? externalProps : {})}>
          {text} <ChevronRightIcon width={22} />
        </a>
      </Link>

      {helpText && <div className={styles.helpText}>{helpText}</div>}

      {auxText && <div className={styles.auxText}>{auxText}</div>}

      <div className={styles.children}>{children}</div>
    </li>
  );
};
