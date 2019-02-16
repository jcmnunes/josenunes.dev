import styled from 'styled-components';

const Main = styled.div`
  margin-top: 64px;

  @media (max-width: ${props => props.theme.bp_small}) {
    margin-top: 48px;
  }
`;

export default Main;
