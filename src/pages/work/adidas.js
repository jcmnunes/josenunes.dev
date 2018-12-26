import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import WorkLayout from '../../components/layouts/workLayout';

export default ({ data }) => (
  <WorkLayout
    company="Adidas AG"
    companyRole="Frontend developer"
    dates="Mar 18 - Dec 18"
    techs={[
      'React',
      'Redux',
      'Sass',
      'Immutable',
      'Jest',
      'Enzyme',
      'ESLint',
      'Prettier',
      'Webpack',
    ]}
  >
    <p>
      Being a developer for 6 years now, I stumbled across several challenging and interesting
      projects. As a React developer, I'm constantly trying to improve and to learn new things.
    </p>
    <figure>
      <Img fluid={data.adidasGym.childImageSharp.fluid} />
      <figcaption>This is the caption</figcaption>
    </figure>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores beatae corporis,
      cupiditate debitis delectus dolorem dolores fuga ipsum libero molestiae nihil nisi perferendis
      quo recusandae repellendus suscipit voluptate.
    </p>
  </WorkLayout>
);

export const query = graphql`
  query {
    adidasGym: file(relativePath: { eq: "adidas-gym.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
