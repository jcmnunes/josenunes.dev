import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const StyledListItem = styled.li`
  margin-bottom: 32px;
  list-style: none;
  position: relative;

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${props => props.theme.primary500};
    position: absolute;
    left: -30px;
    top: 12px;
    border-radius: 50%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SecondaryInfo = styled.div`
  font-size: 14px;
  color: ${props => props.theme.primary500};
`;

const AuxInfo = styled.div`
  color: ${props => props.theme.neutral400};
  font-size: 12px;
`;

const Image = styled.div`
  padding-top: 4px;
`;

const ListItem = ({ data }) => {
  return (
    <StyledListItem>
      <div>
        <LinkButton to={data.linkUrl}>{data.linkText}</LinkButton>
      </div>
      <SecondaryInfo>{data.secondaryInfo}</SecondaryInfo>
      <AuxInfo>{data.auxInfo}</AuxInfo>
      {data.image && (
        <Image>
          <img width={data.imageWidth} src={data.image} alt={data.imageAlt} />
        </Image>
      )}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    secondaryInfo: PropTypes.string,
    auxInfo: PropTypes.string,
    image: PropTypes.string,
    imageWidth: PropTypes.string,
    imageAlt: PropTypes.string,
  }).isRequired,
};

export default ListItem;
