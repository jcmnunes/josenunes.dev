import React, { Component } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

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

  goToAbout = () => {
    navigate('/about');
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
            Although I started my IT career as a Python developer, I’ve been working as a frontend
            developer for the past 3 years. My initial tech stack was focused on vanilla JavaScript
            and jQuery. Nowadays, I work mainly with modern frontend web technologies in the React
            ecosystem. In fact, I’ve been working as a React developer for more than two years now.
          </div>
        )}
        <div className="actions">
          <div className="terciary-button" onClick={this.toggleShowMore}>
            {showMore ? 'Read less' : 'Read more'}
          </div>
          {showMore && (
            <div className="terciary-button" onClick={this.goToAbout}>
              Read even more
            </div>
          )}
        </div>
      </StyledManifest>
    );
  }
}

export default Manifest;
