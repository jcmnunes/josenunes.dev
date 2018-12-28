import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSkill = styled.div`
  .name {
    color: ${props => props.theme.neutral200};
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.05px;
  }

  .bar {
    position: relative;
    height: 3px;
    width: 100%;
    background: #3b3b3b;

    .scale {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: ${props => props.value};
      background: ${props => props.theme.primary500};
    }
  }
`;

class Skill extends Component {
  render() {
    const { name, value } = this.props;
    return (
      <StyledSkill value={value}>
        <div className="name">{name}</div>
        <div className="bar">
          <span className="scale" />
        </div>
      </StyledSkill>
    );
  }
}

export default Skill;
