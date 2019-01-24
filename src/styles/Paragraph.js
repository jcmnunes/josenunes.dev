import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${props => props.theme.neutral400};

  @media (max-width: ${props => props.theme.bp_medium}) {
    font-size: 14px;
  }
`;

export default Paragraph;
