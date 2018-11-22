import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const StyledHero = styled.div`
  margin-left: -200px;
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  z-index: 1;
  height: 400px;

  @media (max-width: ${props => props.theme.huge}) {
    height: 350px;
  }
`;

const BorderImage = styled.div`
  position: relative;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.1);
  flex: 1;
  background: url('https://picsum.photos/450/580');

  :before {
    position: absolute;
    content: '';
    top: -30px;
    right: -30px;
    height: 100%;
    width: 100%;
    border: 15px solid ${props => props.theme.gray1};
    display: inline-block;
    z-index: -1;
  }
`;

const Content = styled.div`
  color: ${props => props.theme.white};
  margin: 0 75px;
  flex: 3;

  h1 {
    color: ${props => props.theme.white};

    span {
      color: ${props => props.theme.primary};
    }
  }

  h2 {
    color: ${props => props.theme.white};
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 10px;
`;

class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <BorderImage />
        <Content>
          <h2>
            Hello, <br /> I Am Jose Nunes
          </h2>
          <h1>
            <span>Frontend</span> Developer
          </h1>
          <p>
            David There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words which
            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            you need to be sure there.
          </p>
          <ButtonGrid>
            <Button intent="primary">Download my CV</Button>
            <Button>My Skills</Button>
          </ButtonGrid>
        </Content>
      </StyledHero>
    );
  }
}

export default Hero;
