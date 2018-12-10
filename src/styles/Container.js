import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-color: ${props => props.theme.gray2};
  background-image: ${props => props.theme.pattern};
`;

export default Container;
