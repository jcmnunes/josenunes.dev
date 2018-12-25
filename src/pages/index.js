import React from 'react';
import styled from 'styled-components';

import Homepage from '../components/layouts/Homepage';
import Manifest from '../components/Manifest';
import LinkButton from '../components/LinkButton';

import iconCloudDownload from '../images/icon-cloud-download.svg';
import iconMail from '../images/icon-mail.svg';
import IconLinkedIn from '../images/linkedin';
import IconGithub from '../images/github';

const H1 = styled.h1`
  color: ${props => props.theme.neutral100};
  font-size: 36px;

  span {
    color: ${props => props.theme.primary500};
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.neutral100};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: ${props => props.theme.bp_medium}) {
    grid-template-columns: 1fr;
  }
`;

const Heading = styled.h3`
  color: ${props => props.theme.neutral200};
  font-size: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.theme.primary500};
  }
`;

const StyledList = styled.ul`
  color: ${props => props.theme.neutral100};
  margin-bottom: 0;

  .secondary-info {
    font-size: 16px;
    color: ${props => props.theme.primary500};
  }

  .aux-info {
    color: ${props => props.theme.neutral400};
    font-size: 12px;
  }

  li {
    margin-bottom: 32px;
    list-style: none;
    position: relative;

    &:before {
      content: '';
      width: 8px;
      height: 8px;
      background: ${props => props.theme.primary500};
      position: absolute;
      left: -30px;
      top: 12px;
      border-radius: 50%;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 20px 20px;
`;

export default () => (
  <Homepage>
    <H2>
      Hello, <br /> I Am Jose Nunes
    </H2>
    <H1>
      <span>Frontend</span> Developer
    </H1>
    <Manifest />
    <StyledGrid>
      <div>
        <Heading>Recent Work Experiences</Heading>
        <StyledList>
          <li>
            <div>
              <LinkButton large>Adidas AG</LinkButton>
            </div>
            <div className="secondary-info">Frontend Developer</div>
            <div className="aux-info">Mar 18 - Dec 18</div>
          </li>
          <li>
            <div>
              <LinkButton large>doDOC Corp.</LinkButton>
            </div>
            <div className="secondary-info">Frontend Developer</div>
            <div className="aux-info">Mar 18 - Dec 18</div>
          </li>
          <li>
            <div>
              <LinkButton large>Soundzipper</LinkButton>
            </div>
            <div className="secondary-info">Frontend Developer</div>
            <div className="aux-info">Mar 18 - Dec 18</div>
          </li>
          <li>
            <div>
              <LinkButton large>OOF</LinkButton>
            </div>
            <div className="secondary-info">Frontend Developer</div>
            <div className="aux-info">Mar 18 - Dec 18</div>
          </li>
        </StyledList>
      </div>
      <div>
        <div style={{ marginBottom: 48 }}>
          <Heading>Recent Projects</Heading>
          <StyledList>
            <li>
              <div>
                <LinkButton large>FlowTask App</LinkButton>
              </div>
              <div className="aux-info">Task manager app</div>
            </li>
            <li>
              <div>
                <LinkButton large>mceuteixeira.com</LinkButton>
              </div>
              <div className="aux-info">Personal Website/Blog</div>
            </li>
            <li>
              <div>
                <LinkButton large>josenunes.xyz</LinkButton>
              </div>
              <div className="aux-info">Personal Website/Blog</div>
            </li>
          </StyledList>
        </div>
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
      </div>
    </StyledGrid>
  </Homepage>
);
