import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LinkButton from './LinkButton';
import iconCloudDownload from '../images/icon-cloud-download.svg';
import iconMail from '../images/icon-mail.svg';
import IconLinkedIn from '../images/linkedin';
import IconGithub from '../images/github';

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 48px;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.theme.primary500};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  > * {
    margin-right: 24px;
  }
`;

const SocialLinks = styled.div`
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

const Header = styled.div`
  margin-bottom: 8px;
`;

const Name = styled.span`
  color: ${props => props.theme.neutral100};
  font-size: 16px;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.neutral500};
  font-size: 16px;
  font-weight: 700;
  transition: color 0.2s ease;
  margin-left: 12px;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.primary400};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Header>
        <Name>Jose Nunes •</Name>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </Header>
      <LinksContainer>
        <Links>
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
        </Links>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/jnunes-jn/">
            <IconLinkedIn />
          </a>
          <a href="https://github.com/jcmnunes">
            <IconGithub />
          </a>
        </SocialLinks>
      </LinksContainer>
    </StyledFooter>
  );
};

export default Footer;
