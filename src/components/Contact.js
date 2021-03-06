import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Anchor } from './Anchor';
import { personalInfo } from '../content/personalInfo';
import Heading from '../styles/Heading';
import IconLinkedIn from '../images/linkedin';
import IconGithub from '../images/github';
import { CTAs } from './CTAs';

const Actions = styled.div`
  display: inline-flex;
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
          <CTAs />
        </Actions>

        {this.props.socialLinks && (
          <SocialLinks>
            <Anchor href={personalInfo.linkedIn}>
              <IconLinkedIn />
            </Anchor>

            <Anchor href={personalInfo.github}>
              <IconGithub />
            </Anchor>
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
