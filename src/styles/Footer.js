import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  padding: 35px 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.white};
`;

export default Footer;
