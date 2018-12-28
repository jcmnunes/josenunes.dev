import React, { Component } from 'react';
import styled from 'styled-components';

import AnchorButton from './AnchorButton';

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

  a {
    color: ${props => props.theme.neutral200};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.neutral400};
    }
  }
`;

class Contact extends Component {
  render() {
    return (
      <div>
        <Heading>Get in touch</Heading>
        <Actions>
          <AnchorButton
            href={require('../../static/assets/cv.pdf')}
            download="JoseNunes-CV.pdf"
            icon={iconCloudDownload}
            iconAltText="icon-cloud-download"
          >
            Download my CV
          </AnchorButton>
          <AnchorButton href="mailto:jn@josenunes.xyz" icon={iconMail} iconAltText="icon-mail">
            jn@josenunes.xyz
          </AnchorButton>
        </Actions>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/jnunes-jn/">
            <IconLinkedIn />
          </a>
          <a href="https://github.com/jcmnunes">
            <IconGithub />
          </a>
        </SocialLinks>
      </div>
    );
  }
}

export default Contact;
