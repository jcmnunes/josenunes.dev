import styled from 'styled-components';

const PrimaryButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.neutral100};
  border: 1px solid ${props => props.theme.primary500};
  cursor: pointer;
  background: none;
  outline: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.primary500};
  }
`;

export default PrimaryButton;
