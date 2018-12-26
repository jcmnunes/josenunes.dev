import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from './layout';

import adidasLogo from '../../images/adidas-logo.svg';

const StyledLayout = styled.div`
  .title {
    display: flex;
    h1 {
      position: relative;
      font-weight: 700;
      color: ${props => props.theme.neutral100};
      font-size: 36px;
      margin-bottom: 8px;
    }

    .logo {
      margin-bottom: 0;
      height: 34px;
      margin-left: 24px;
    }
  }

  h2 {
    font-size: 24px;
    color: ${props => props.theme.primary500};
    margin-bottom: 14px;
  }

  h3 {
    font-size: 14px;
    color: ${props => props.theme.neutral400};
    font-weight: 400;
    margin-bottom: 16px;
  }

  .techs {
    font-size: 14px;
    color: ${props => props.theme.neutral600};
    margin-bottom: 24px;
  }

  .body {
    p {
      font-size: 18px;
      color: ${props => props.theme.neutral400};
    }
  }

  @media (max-width: ${props => props.theme.bp_medium}) {
    .body {
      p {
        font-size: 16px;
      }
    }
  }
`;

class WorkLayout extends Component {
  render() {
    const { company, companyRole, dates, techs } = this.props;
    return (
      <Layout>
        <StyledLayout>
          <div className="title">
            <h1>{company}</h1>
            <img className="logo" src={adidasLogo} alt="adidas-logo" />
          </div>
          <h2>{companyRole}</h2>
          <h3>{dates}</h3>
          <div className="techs">
            MAIN TECHS USED:
            <br />
            {techs.map((tech, index) => {
              if (index === techs.length - 1) {
                return tech;
              }
              return `${tech} | `;
            })}
          </div>
          <div className="body">{this.props.children}</div>
        </StyledLayout>
      </Layout>
    );
  }
}

export default WorkLayout;
