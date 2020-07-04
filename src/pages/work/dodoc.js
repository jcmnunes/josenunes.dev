import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SingleLayout from '../../components/layouts/singleLayout';
import { Anchor } from '../../components/Anchor';

export default ({ data }) => (
  <SingleLayout
    title="doDOC Corp"
    subTitle="Frontend developer"
    auxInfo="Oct 2016 - Feb 2018"
    techs={[
      'React',
      'Redux',
      'CSS Modules',
      'PostCSS',
      'Mocha',
      'Enzyme',
      'ESLint',
      'Stylelint',
      'Prettier',
      'Webpack',
    ]}
  >
    <p>
      doDOC (<Anchor href="https://www.dodoc.com">www.dodoc.com</Anchor>) is software development
      company with headquarters in Boston (USA) and Coimbra (Portugal). doDOC product is a single
      platform solution for secure collaboration when working with complex and regulated documents.
    </p>
    <figure>
      <Img fluid={data.poster.childImageSharp.fluid} />
      <figcaption>
        doDOC product is a single platform solution for secure collaboration when working with
        complex and regulated documents.
      </figcaption>
    </figure>
    <p>
      When I joined the company, in October 2016, the frontend of the app was written in jQuery. The
      app was reaching a size that led to the decision to replace the frontend tech. The React
      library was chosen, and my job was to gradually transition all the frontend code into a
      React/Redux SPA.
    </p>
    <figure>
      <Img fluid={data.loginScreen.childImageSharp.fluid} />
      <figcaption>Login screen of doDOC's web app.</figcaption>
    </figure>
    <p>
      I (naively) started the job without hesitation. Looking back, I can see that this experience
      was the perfect opportunity to learn React, as well as the React ecosystem. I've been a big
      fan of React ever since.
    </p>
  </SingleLayout>
);

export const query = graphql`
  query dodocPage {
    poster: file(relativePath: { eq: "dodoc-poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    loginScreen: file(relativePath: { eq: "dodoc-login.png" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
