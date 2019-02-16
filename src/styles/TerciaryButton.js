import styled from 'styled-components';

const TerciaryButton = styled.button`
  color: ${props => props.theme.neutral400};
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export default TerciaryButton;
