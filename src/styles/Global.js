import { createGlobalStyle } from 'styled-components';
import HackRegularWoff2 from './fonts/hack-regular.woff2';
import HackRegularWoff from './fonts/hack-regular.woff';
import HackBoldWoff2 from './fonts/hack-bold.woff2';
import HackBoldWoff from './fonts/hack-bold.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hack';
    font-style: normal;
    font-weight: 400;
    src: local('Hack'), local('Hack-Regular'),
         url('${HackRegularWoff2}') format('woff2'),
         url('${HackRegularWoff}') format('woff');
  }
  @font-face {
    font-family: 'Hack';
    font-style: normal;
    font-weight: 700;
    src: local('Hack Bold'), local('Hack-Bold'),
         url('${HackBoldWoff2}') format('woff2'),
         url('${HackBoldWoff}') format('woff');
  }

  body {
    background: ${props => props.theme.neutral1000};
    font-family: 'Hack', monospace;
  }
  
  ::selection {
    background: ${props => props.theme.primary300};
  }
  
  figcaption {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.neutral600};
    text-align: center;
    margin: 8px 20px 0px;
  }
`;

export default GlobalStyle;
