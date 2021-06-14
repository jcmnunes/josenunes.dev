import React, { Component } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import TerciaryButton from '../styles/TerciaryButton';
import { personalInfo } from '../content/personalInfo';

const StyledManifest = styled.div`
  color: ${props => props.theme.neutral400};
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 48px;

  .color-primary {
    color: ${props => props.theme.primary500};
  }

  @media (max-width: ${props => props.theme.bp_medium}) {
    font-size: 16px;
  }

  @media (max-width: ${props => props.theme.bp_small}) {
    font-size: 14px;
  }
`;

class Manifest extends Component {
  goToAbout = () => {
    navigate('/about');
  };

  render() {
    return (
      <StyledManifest>
        I've been a Frontend developer for more than {personalInfo.feYearsExperience} years now. I
        love to build usable, accessible, and beautiful interfaces. I'm a big fan of clean,
        reusable, and maintainable code.
        <div>
          <TerciaryButton onClick={this.goToAbout}>About Me ➜</TerciaryButton>
        </div>
      </StyledManifest>
    );
  }
}

export default Manifest;
