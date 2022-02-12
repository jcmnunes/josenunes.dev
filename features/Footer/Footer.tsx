import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { LinkButton } from '../../components/LinkButton/LinkButton';
import { CloudDownloadIcon } from '../../icons/CloudDownloadIcon';
import { EnvelopeIcon } from '../../icons/EnvelopeIcon';
import { GitHubIcon } from '../../icons/GitHubIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';
import { IconLink } from '../../components/IconLink/IconLink';

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

      <div className={styles.ctas}>
        <Link href="/assets/JoseNunes-CV.pdf">
          <a rel="noreferrer noopener" target="_blank">
            <LinkButton icon={<CloudDownloadIcon />}>Download my CV</LinkButton>
          </a>
        </Link>

        <Link href="mailto:josenunes@hey.com">
          <a rel="noreferrer noopener" target="_blank">
            <LinkButton icon={<EnvelopeIcon />}>josenunes@hey.com</LinkButton>
          </a>
        </Link>

        <div className={styles.socialLinks}>
          <IconLink
            aria-label="GitHub link"
            href="https://github.com/jcmnunes"
            className={styles.github}
          >
            <GitHubIcon />
          </IconLink>

          <IconLink
            style={{ marginLeft: 4 }}
            aria-label="LinkedIn link"
            href="https://www.linkedin.com/in/jnunes-jn/"
          >
            <LinkedInIcon />
          </IconLink>
        </div>
      </div>
    </footer>
  );
};
