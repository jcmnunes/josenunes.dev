import styled from 'styled-components';

const HeroCard = styled.div`
  position: relative;
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: 800px;
  z-index: 1;
  padding: 50px;
  background: ${props => props.theme.gray1};
`;

export default HeroCard;
