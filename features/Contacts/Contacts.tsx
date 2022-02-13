import React from 'react';
import Link from 'next/link';
import { LinkButton } from '../../components/LinkButton/LinkButton';
import { CloudDownloadIcon } from '../../icons/CloudDownloadIcon';
import { EnvelopeIcon } from '../../icons/EnvelopeIcon';

export const Contacts = () => {
  return (
    <>
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
    </>
  );
};
