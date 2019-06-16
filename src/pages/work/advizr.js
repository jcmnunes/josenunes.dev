import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SingleLayout from '../../components/layouts/singleLayout';

export default ({ data }) => (
  <SingleLayout
    title="Advizr"
    subTitle="Frontend developer"
    auxInfo="Jun 2019 - Present"
    techs={['React', 'Redux', 'Styled-Components', 'Sass', 'Jest', 'Enzyme', 'ESLint', 'Webpack']}
  >
    <p>
      Advizr (<a href="https://www.advizr.com/">www.advizr.com</a>), based in New York, is dedicated
      to creating financial planning programs and technology that will expand consumer and advisor
      access to high-quality financial planning, as well as drive advisor profitability. The
      powerful, automated, interactive financial planning solution empowers consumers to take
      control of their financial wellness and allows advisors to identify new opportunities and grow
      their practice.
    </p>
    <figure>
      <Img fluid={data.advizrWorkflow.childImageSharp.fluid} />
      <figcaption>
        Through beautifully designed forms, the user can create financial plans in no time.
      </figcaption>
    </figure>
    <p>
      At Advizr, I work as a frontend web developer, integrated into the web team responsible for
      the development and maintenance of the Advizr software (a React/Redux SPA).
    </p>
  </SingleLayout>
);

export const query = graphql`
  query advizrPage {
    advizrWorkflow: file(relativePath: { eq: "advizr-workflow.png" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
