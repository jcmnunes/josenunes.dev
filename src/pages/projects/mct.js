import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SingleLayout from '../../components/layouts/singleLayout';
import Heading from '../../styles/Heading';
import { Anchor } from '../../components/Anchor';

export default ({ data }) => (
  <SingleLayout
    title="mceuteixeira.com"
    subTitle="Personal website"
    auxInfo="First release: 2018"
    techs={['React', 'Gatsby', 'Styled-Components', 'ESLint', 'Prettier']}
  >
    <p>
      This is my personal website. It is a <Anchor href="https://www.gatsbyjs.org/">Gatsby</Anchor>{' '}
      website. I started the design process by consi
    </p>
    <Heading>Design process</Heading>
    <p>
      I went through severeal initial iterations of the website before committing to the current
      one. The first version of the website had a full height homepage (no scrolling) with a hero
      carousel, a header and a footer.
    </p>
    <p>Later, I decided to buy a ready made portfolio theme... TBD</p>
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
  query mctPage {
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
