import styled from 'styled-components';

const Container = styled.div`
  max-width: 716px;
  min-height: 100vh;
  background-color: ${props => props.theme.gray2};
  margin: 0 auto;
  padding: 96px 32px;

  @media (max-width: ${props => props.theme.bp_small}) {
    padding: 64px 32px;
  }
`;

export default Container;
