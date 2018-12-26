import React, { Component } from 'react';
import styled from 'styled-components';

import LinkButton from './LinkButton';

import Heading from '../styles/Heading';

import iconMail from '../images/icon-mail.svg';
import iconCloudDownload from '../images/icon-cloud-download.svg';
import IconLinkedIn from '../images/linkedin';
import IconGithub from '../images/github';

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
`;

const SocialLinks = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 20px 20px;
`;

class Contact extends Component {
  render() {
    return (
      <div>
        <Heading>Get in touch</Heading>
        <Actions>
          <LinkButton
            href={require('../../static/assets/cv.pdf')}
            download="JoseNunes-CV.pdf"
            icon={iconCloudDownload}
            iconAltText="icon-cloud-download"
          >
            Download my CV
          </LinkButton>
          <LinkButton href="mailto:jn@josenunes.xyz" icon={iconMail} iconAltText="icon-mail">
            jn@josenunes.xyz
          </LinkButton>
        </Actions>
        <SocialLinks>
          <IconLinkedIn />
          <IconGithub />
        </SocialLinks>
      </div>
    );
  }
}

export default Contact;
