import styled from 'styled-components';

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: ${props => props.theme.bp_medium}) {
    grid-template-columns: 1fr;
  }
`;

export default TwoColumnGrid;
