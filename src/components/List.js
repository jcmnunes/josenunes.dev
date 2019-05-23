import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  color: ${props => props.theme.neutral100};
  margin-bottom: 0;
`;

class List extends Component {
  render() {
    const { data } = this.props;
    return (
      <StyledList>
        {data.map(item => (
          <ListItem key={item.key} data={item} />
        ))}
      </StyledList>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
