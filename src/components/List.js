import React, { Component } from 'react';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const StyledList = styled.ul`
  color: ${props => props.theme.neutral100};
  margin-bottom: 0;

  .secondary-info {
    font-size: 16px;
    color: ${props => props.theme.primary500};
  }

  .aux-info {
    color: ${props => props.theme.neutral400};
    font-size: 12px;
  }

  .image {
    padding-top: 4px;
  }

  li {
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
  }
`;

class List extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledList>
        {data.map(item => (
          <li key={item.key}>
            <div>
              <LinkButton to={item.linkUrl}>{item.linkText}</LinkButton>
            </div>
            <div className="secondary-info">{item.secondaryInfo}</div>
            <div className="aux-info">{item.auxInfo}</div>
            {item.image && (
              <div className="image">
                <img width={item.imageWidth} src={item.image} alt={item.imageAlt} />
              </div>
            )}
          </li>
        ))}
      </StyledList>
    );
  }
}

export default List;
