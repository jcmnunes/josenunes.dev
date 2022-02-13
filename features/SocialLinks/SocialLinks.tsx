import React from 'react';
import { IconLink } from '../../components/IconLink/IconLink';
import { GitHubIcon } from '../../icons/GitHubIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';
import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <IconLink aria-label="GitHub link" href="https://github.com/jcmnunes">
        <GitHubIcon />
      </IconLink>

      <IconLink aria-label="LinkedIn link" href="https://www.linkedin.com/in/jnunes-jn/">
        <LinkedInIcon />
      </IconLink>
    </div>
  );
};
