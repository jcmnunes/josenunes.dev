import { NextPage } from 'next';
import Image from 'next/image';
import { Head } from '../../../components/Head/Head';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { PageSubTitle } from '../../../components/PageSubTitle/PageSubTitle';
import { Techs } from '../../../components/Techs/Techs';
import f1TVApp from '../../../img/f1tv-app.png';
import f1TVLeaderboard from '../../../img/f1tvapp-leaderboard.png';

const techs = ['React', 'Redux', 'RxJS/redux-observable', 'Sass', 'CSS Modules', 'Jest', 'Enzyme'];

const OstmodernPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | Ostmodern / F1</title>
      </Head>

      <PageTitle>Ostmodern / Formula 1</PageTitle>

      <PageSubTitle>Frontend Developer</PageSubTitle>

      <p style={{ marginBottom: 8 }}>Jan 2019 - Mar 2019</p>

      <Techs techs={techs} />

      <p className="paragraph">
        Ostmodern (
        <a
          href="https://ostmodern.co.uk/"
          rel="noreferrer noopener"
          target="_blank"
          className="anchor"
        >
          https://ostmodern.co.uk/
        </a>
        ), a London based company, are digital product designers and content delivery experts
        specializing in video-centric products. Ostmodern’s client list includes big names, such as
        Arsenal FC, BBC and Formula 1.
      </p>

      <figure>
        <Image src={f1TVApp} alt="F1TV app" layout="responsive" placeholder="blur" />
        <figcaption>Homepage of F1TV web app.</figcaption>
      </figure>

      <p className="paragraph">
        At Ostmodern, I worked as a frontend web developer, integrated into the web team (a
        multidisciplinary Scrum team) responsible for developing and maintaining the{' '}
        <a
          href="https://f1tv.formula1.com/"
          rel="noreferrer noopener"
          target="_blank"
          className="anchor"
        >
          F1TV web app
        </a>
        .
      </p>

      <figure>
        <Image
          src={f1TVLeaderboard}
          alt="F1TV app leaderboard"
          layout="responsive"
          placeholder="blur"
        />
        <figcaption>
          F1TV web app leaderboard. The leaderboard updates in real-time, even for replays.
        </figcaption>
      </figure>

      <p className="paragraph">
        On the Frontend side, the F1TV app is a React/Redux SPA. The app uses the redux-observable
        package to handle async actions. Most of the code is covered by unit-tests, using Jest and
        Enzyme. CSS Modules and SASS are responsible for the styling.
      </p>
    </div>
  );
};

export default OstmodernPage;
