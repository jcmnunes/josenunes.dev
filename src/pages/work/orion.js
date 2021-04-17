import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SingleLayout from '../../components/layouts/singleLayout';
import { Anchor } from '../../components/Anchor';

const ProjectOrion = ({ data }) => (
  <SingleLayout
    title="Orion Advisor Tech"
    subTitle="Frontend developer"
    auxInfo="Jun 2019 - Present"
    techs={['React', 'React-Native', 'TypeScript', 'CSS in JS']}
  >
    <p>
      Orion Advisor Tech (
      <Anchor href="https://www.orionadvisortech.com/">www.orionadvisortech.com</Anchor>), exists to
      help fiduciary minded advisors realize their unique vision for success. The powerful,
      automated, interactive financial planning solution empowers consumers to take control of their
      financial wellness and allows advisors to identify new opportunities and grow their practice.
    </p>
    <figure>
      <Img fluid={data.orionApps.childImageSharp.fluid} />
      <figcaption>Orion's client portal (web and mobile versions).</figcaption>
    </figure>
    <p>
      At Orion, I work as a Frontend developer (React / React-Native), integrated into the team
      responsible for maintaining and improving Orion's client portal's web and mobile versions. The
      web version is a React SPA. The mobile app is a React-Native app that targets both iOS and
      Android platforms.
    </p>
    <figure>
      <Img fluid={data.advizrTeam.childImageSharp.fluid} />
      <figcaption>It is always great to catch up with the team.</figcaption>
    </figure>
  </SingleLayout>
);

export const query = graphql`
  query advizrPage {
    orionApps: file(relativePath: { eq: "orion-apps.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    advizrTeam: file(relativePath: { eq: "advizr-call.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ProjectOrion;
