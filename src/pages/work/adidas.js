import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Anchor } from '../../components/Anchor';
import SingleLayout from '../../components/layouts/singleLayout';

const ProjectAdidas = ({ data }) => (
  <SingleLayout
    title="Adidas AG"
    subTitle="Frontend developer"
    auxInfo="Mar 2018 - Dec 2018"
    techs={['React', 'Redux', 'Sass', 'Immutable', 'Jest', 'Enzyme']}
  >
    <p>
      adidas AG (<Anchor href="https://www.adidas-group.com">https://www.adidas-group.com</Anchor>)
      needs no introduction. It is the largest sportswear manufacturer in Europe, and the second
      largest in the world. With its headquarters in Herzogenaurach, Germany, employs nearly 57,000
      people around the world.
    </p>
    <figure>
      <Img fluid={data.adidasGym.childImageSharp.fluid} />
      <figcaption>
        We are barely alive after an early morning Crossfit session at the adidas gym.
      </figcaption>
    </figure>
    <p>
      At adidas, I worked as a frontend developer, integrated on a multi-disciplinary Scrum team, in
      the development of a B2B React/Redux web app called “Click” (“Click” is a self-service order
      intake platform for small and medium wholesale customers).
    </p>
    <figure>
      <Img fluid={data.clickTeam.childImageSharp.fluid} />
      <figcaption>Almost the entire Click team hanging out after work.</figcaption>
    </figure>
    <p>
      On the Frontend side, the "Click" app is a typical React/Redux SPA. The data model follows a
      conventional "container - component - action - reducer - selector" flow. The app is written
      with modern JavaScript features (> ES6).
    </p>
    <figure>
      <Img fluid={data.clickApp.childImageSharp.fluid} />
      <figcaption>Store selection page of the "Click" app.</figcaption>
    </figure>
  </SingleLayout>
);

export const query = graphql`
  query adidasPage {
    adidasGym: file(relativePath: { eq: "adidas-gym.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clickTeam: file(relativePath: { eq: "click-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clickApp: file(relativePath: { eq: "click-app.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ProjectAdidas;
