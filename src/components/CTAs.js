import React from 'react';
import LinkButton from './LinkButton';
import iconCloudDownload from '../images/icon-cloud-download.svg';
import { personalInfo } from '../content/personalInfo';
import iconMail from '../images/icon-mail.svg';

export const CTAs = () => {
  return (
    <>
      <LinkButton
        to={'/assets/JoseNunes-CV.pdf'}
        icon={iconCloudDownload}
        iconAltText="icon-cloud-download"
        small
      >
        Download my CV
      </LinkButton>

      <LinkButton to={`mailto:${personalInfo.email}`} icon={iconMail} iconAltText="icon-mail" small>
        {personalInfo.email}
      </LinkButton>
    </>
  );
};
