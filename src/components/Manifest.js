import React, { Component } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import TerciaryButton from '../styles/TerciaryButton';

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
        Being a developer for 8 years now, I stumbled across several challenging and interesting
        projects. As a <span className="color-primary">React developer</span>, I'm constantly trying
        to improve and to learn new things.
        <div>
          <TerciaryButton onClick={this.goToAbout}>About Me ➜</TerciaryButton>
        </div>
      </StyledManifest>
    );
  }
}

export default Manifest;
