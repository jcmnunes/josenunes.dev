import styled from 'styled-components';

const H1 = styled.h1`
  color: ${props => props.theme.neutral100};
  font-size: 36px;

  span {
    color: ${props => props.theme.primary500};
  }

  @media (max-width: ${props => props.theme.bp_medium}) {
    font-size: 30px;
  }

  @media (max-width: ${props => props.theme.bp_small}) {
    font-size: 24px;
  }
`;

export default H1;
