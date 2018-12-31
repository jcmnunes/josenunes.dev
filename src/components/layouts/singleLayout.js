import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from './layout';

const StyledWorkLayout = styled.div`
  .title {
    position: relative;
    font-weight: 700;
    color: ${props => props.theme.neutral100};
    font-size: 36px;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 24px;
    color: ${props => props.theme.primary500};
    margin-bottom: 14px;
  }

  .aux-info {
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

class SingleLayout extends Component {
  render() {
    const { title, subTitle, auxInfo, techs } = this.props;
    return (
      <Layout>
        <StyledWorkLayout>
          <div className="title">{title}</div>
          <div className="subtitle">{subTitle}</div>
          <div className="aux-info">{auxInfo}</div>
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
        </StyledWorkLayout>
      </Layout>
    );
  }
}

export default SingleLayout;
