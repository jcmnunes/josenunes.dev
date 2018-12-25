import React, { Component } from 'react';
import styled from 'styled-components';

const StyledManifest = styled.div`
  color: #b1b1b1;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 48px;

  .color-primary {
    color: ${props => props.theme.primary500};
  }

  .terciary-button {
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
    margin-top: 16px;
    cursor: pointer;
  }

  .actions {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: max-content max-content;
  }
`;

class Manifest extends Component {
  state = { showMore: false };

  toggleShowMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { showMore } = this.state;
    return (
      <StyledManifest>
        Being a developer for 6 years now, I stumbled across several challenging and interesting
        projects. As a <span className="color-primary">React developer</span>, I'm constantly trying
        to improve and to learn new things.
        {showMore && (
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </div>
        )}
        <div className="actions">
          <div className="terciary-button" onClick={this.toggleShowMore}>
            {showMore ? 'Read less' : 'Read more'}
          </div>
          {showMore && <div className="terciary-button">Read even more</div>}
        </div>
      </StyledManifest>
    );
  }
}

export default Manifest;
