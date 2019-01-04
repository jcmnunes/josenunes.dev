import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.neutral300};
  align-items: center;
  cursor: pointer;

  > div {
    margin-right: 6px;
  }
`;

export default Header;
