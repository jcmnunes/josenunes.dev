import React from 'react';
import PluginTransitionLink from 'gatsby-plugin-transition-link';

const TransitionLink = ({ children, ...rest }) => (
  <PluginTransitionLink {...rest}>{children}</PluginTransitionLink>
);

export default TransitionLink;
