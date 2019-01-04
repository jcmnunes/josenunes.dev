import React, { Component } from 'react';
import PluginPageTransition from 'gatsby-plugin-page-transitions';

class PageTransition extends Component {
  render() {
    return (
      <PluginPageTransition
        defaultStyle={{
          transition: 'all 200ms cubic-bezier(0.47, 0, 0.75, 0.72)',
          top: '30px',
          opacity: 0,
          position: 'absolute',
          width: '100%',
        }}
        transitionStyles={{
          entering: { top: '0%', opacity: 1 },
          entered: { top: '0%', opacity: 1 },
          exiting: { top: '30px' },
        }}
        transitionTime={200}
      >
        {this.props.children}
      </PluginPageTransition>
    );
  }
}

export default PageTransition;
