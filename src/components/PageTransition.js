import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const transitionName = 'slideUp';

const TransitionWrapper = styled.div`
  &.${transitionName}-enter {
    opacity: 0.01;
    transform: translateY(50px);
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 200ms ease-in;
  }

  &.${transitionName}-exit {
    opacity: 0.01;
    transform: translateY(0);
    z-index: 100;
  }

  &.${transitionName}-exit-active {
    opacity: 0.01;
    transform: translateY(50px);
    transition: all 200ms ease-out;
  }
`;

class TransitionHandler extends React.Component {
  shouldComponentUpdate() {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    return this.props.children;
  }
}

const PageTransition = props => (
  <TransitionGroup>
    <CSSTransition
      // During SSR no location is set; this ensures the first transition works.
      key={props.location ? props.location.pathname : '/'}
      classNames={transitionName}
      timeout={{ enter: 200, exit: 200 }}
    >
      <TransitionHandler location={props.location}>
        <TransitionWrapper>{props.children}</TransitionWrapper>
      </TransitionHandler>
    </CSSTransition>
  </TransitionGroup>
);

export default PageTransition;
