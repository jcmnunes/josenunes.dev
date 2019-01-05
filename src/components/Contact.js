import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <div style={{ marginBottom: '48px' }}>
        <Heading>Get in touch</Heading>
        <Actions>
          <LinkButton
            to={'/assets/JoseNunes-CV.pdf'}
            icon={iconCloudDownload}
            iconAltText="icon-cloud-download"
            small
          >
            Download my CV
          </LinkButton>
          <LinkButton to="mailto:jn@josenunes.xyz" icon={iconMail} iconAltText="icon-mail" small>
            jn@josenunes.xyz
          </LinkButton>
        </Actions>
        {this.props.socialLinks && (
          <SocialLinks>
            <a href="https://www.linkedin.com/in/jnunes-jn/">
              <IconLinkedIn />
            </a>
            <a href="https://github.com/jcmnunes">
              <IconGithub />
            </a>
          </SocialLinks>
        )}
      </div>
    );
  }
}

Contact.defaultProps = {
  socialLinks: false,
};

Contact.propTypes = {
  socialLinks: PropTypes.bool,
};

export default Contact;
