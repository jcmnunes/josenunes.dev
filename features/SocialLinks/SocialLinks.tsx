import React from 'react';
import { IconLink } from '../../components/IconLink/IconLink';
import { GitHubIcon } from '../../icons/GitHubIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';
import { personalInfo } from '../../content/personalInfo';
import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <IconLink aria-label="GitHub link" href={personalInfo.github}>
        <GitHubIcon />
      </IconLink>

      <IconLink aria-label="LinkedIn link" href={personalInfo.linkedIn}>
        <LinkedInIcon />
      </IconLink>
    </div>
  );
};
