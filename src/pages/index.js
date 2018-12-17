import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';

import iconCloudDownload from '../images/icon-cloud-download.svg';
import iconCheveronRight from '../images/icon-cheveron-right.svg';
import iconMail from '../images/icon-mail.svg';

const H1 = styled.h1`
  color: ${props => props.theme.white};

  span {
    color: ${props => props.theme.primary};
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.white};
`;

const Message = styled.p`
  color: #b1b1b1;
  font-size: 18px;
  font-weight: 400;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  .cheveron {
    transition: all 0.2s ease;
  }

  &:hover {
    .cheveron {
      transform: translateX(5px);
    }
  }

  img {
    width: 24px;
    margin-bottom: 0;
  }

  span {
    font-size: 14px;
    color: #cfcfcf;
    margin-left: 16px;
    margin-right: 4px;
  }
`;

export default () => (
  <Layout>
    <H2>
      Hello, <br /> I Am Jose Nunes
    </H2>
    <H1>
      <span>Frontend</span> Developer
    </H1>
    <Message>New website coming soon...</Message>
    <Actions>
      <LinkButton href={require('../../static/assets/cv.pdf')} download="JoseNunes-CV.pdf">
        <img src={iconCloudDownload} alt="icon-cloud-download" />
        <span>Download my CV</span>
        <img className="cheveron" src={iconCheveronRight} alt="icon-cheveron-right" />
      </LinkButton>
      <LinkButton href="mailto:jn@josenunes.xyz">
        <img src={iconMail} alt="icon-mail" />
        <span>jn@josenunes.xyz</span>
        <img className="cheveron" src={iconCheveronRight} alt="icon-cheveron-right" />
      </LinkButton>
    </Actions>
  </Layout>
);
