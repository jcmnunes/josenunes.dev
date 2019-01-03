import styled from 'styled-components';

const TerciaryButton = styled.button`
  color: ${props => props.theme.neutral400};
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  margin-top: 16px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

export default TerciaryButton;
