import styled from 'styled-components';

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

export default Heading;
