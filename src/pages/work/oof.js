import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SingleLayout from '../../components/layouts/singleLayout';

export default ({ data }) => (
  <SingleLayout
    title="OOF"
    subTitle="Web developer"
    auxInfo="May 16 - Jun 16"
    techs={['HTML5', 'jQuery', 'Sass', 'PHP', 'Wordpress']}
  >
    <p>
      OOF (<a href="http://www.oof.pt/">www.oof.pt</a>) is an art and graphic design company from
      Guimarães, Portugal. I worked with OOF to implement a{' '}
      <a href="http://exchange.ics.uminho.pt/">website</a> for Exchange (a research group that
      belongs to the Social Studies department of the University of Coimbra, Portugal).
    </p>
    <figure>
      <Img fluid={data.homepage.childImageSharp.fluid} />
      <figcaption>Homepage of Exchange website.</figcaption>
    </figure>
    <p>
      Exchange main requirements were an intuitive back-office and a professional design. I was
      responsible for the back-office part and for converting static design mockups, provided by
      OOF, into a jQuery/Sass website. I used the{' '}
      <a href="https://www.advancedcustomfields.com/">ACF package</a> to build an easy to use
      Wordpress back-office.
    </p>
    <figure>
      <Img fluid={data.projectsPage.childImageSharp.fluid} />
      <figcaption>
        Sub-projects page of Exchange's website. All the content of the website can easily be
        modified through a custom made Wordpress back-office.
      </figcaption>
    </figure>
  </SingleLayout>
);

export const query = graphql`
  query oofPage {
    homepage: file(relativePath: { eq: "exchange-homepage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectsPage: file(relativePath: { eq: "exchange-projects-page.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
