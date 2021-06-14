import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SingleLayout from '../../components/layouts/singleLayout';
import { Anchor } from '../../components/Anchor';

const ProjectF1 = ({ data }) => (
  <SingleLayout
    title="Ostmodern / Formula 1"
    subTitle="Frontend developer"
    auxInfo="Jan 2019 - Mar 2019"
    techs={['React', 'Redux', 'RxJS/redux-observable', 'Sass', 'CSS Modules', 'Jest', 'Enzyme']}
  >
    <p>
      Ostmodern (<Anchor href="https://www.ostmodern.co.uk/">https://ostmodern.co.uk/</Anchor>), a
      London based company, are digital product designers and content delivery experts specializing
      in video-centric products. Ostmodern’s client list includes big names, such as Arsenal FC, BBC
      and Formula 1.
    </p>
    <figure>
      <Img fluid={data.f1tvApp.childImageSharp.fluid} />
      <figcaption>Homepage of F1TV web app.</figcaption>
    </figure>
    <p>
      At Ostmodern, I worked as a frontend web developer, integrated into the web team (a
      multidisciplinary Scrum team) responsible for developing and maintaining the{' '}
      <Anchor href="https://f1tv.formula1.com">F1TV web app</Anchor>.
    </p>
    <figure>
      <Img fluid={data.f1tvAppLeaderboard.childImageSharp.fluid} />
      <figcaption>
        F1TV web app leaderboard. The leaderboard updates in real-time, even for replays.
      </figcaption>
    </figure>
    <p>
      On the Frontend side, the F1TV app is a React/Redux SPA. The app uses the redux-observable
      package to handle async actions. Most of the code is covered by unit-tests, using Jest and
      Enzyme. CSS Modules and SASS are responsible for the styling.
    </p>
  </SingleLayout>
);

export const query = graphql`
  query ostmodernPage {
    f1tvApp: file(relativePath: { eq: "f1tv-app.png" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    f1tvAppLeaderboard: file(relativePath: { eq: "f1tvapp-leaderboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ProjectF1;
