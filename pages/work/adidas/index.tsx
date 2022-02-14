import { NextPage } from 'next';
import Image from 'next/image';
import { Head } from '../../../components/Head/Head';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { PageSubTitle } from '../../../components/PageSubTitle/PageSubTitle';
import { Techs } from '../../../components/Techs/Techs';
import adidasGym from '../../../img/adidas-gym.jpg';
import clickTeam from '../../../img/click-team.jpg';
import clickApp from '../../../img/click-app.jpg';

const techs = ['React', 'Redux', 'Sass', 'Immutable', 'Jest', 'Enzyme'];

const AdidasPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | Adidas</title>
      </Head>

      <PageTitle>Adidas AG</PageTitle>

      <PageSubTitle>Frontend Developer</PageSubTitle>

      <p style={{ marginBottom: 8 }}>Mar 2018 - Dec 2018</p>

      <Techs techs={techs} />

      <p className="paragraph">
        adidas AG (
        <a
          href="https://www.adidas-group.com"
          rel="noreferrer noopener"
          target="_blank"
          className="anchor"
        >
          https://www.adidas-group.com
        </a>
        ) needs no introduction. It is the largest sportswear manufacturer in Europe, and the second
        largest in the world. With its headquarters in Herzogenaurach, Germany, employs nearly
        57,000 people around the world.
      </p>

      <figure>
        <Image src={adidasGym} alt="Adidas gym" layout="responsive" placeholder="blur" />
        <figcaption>
          We are barely alive after an early morning Crossfit session at the adidas gym.
        </figcaption>
      </figure>

      <p className="paragraph">
        At adidas, I worked as a frontend developer, integrated on a multi-disciplinary Scrum team,
        in the development of a B2B React/Redux web app called &quot;Click&quot; (&quot;Click&quot;
        is a self-service order intake platform for small and medium wholesale customers).
      </p>

      <figure>
        <Image src={clickTeam} alt="Click team" layout="responsive" placeholder="blur" />
        <figcaption>Almost the entire Click team hanging out after work.</figcaption>
      </figure>

      <p className="paragraph">
        On the Frontend side, the &quot;Click&quot; app is a typical React/Redux SPA. The data model
        follows a conventional &quot;container - component - action - reducer - selector&quot; flow.
        The app is written with modern JavaScript features (&gt; ES6).
      </p>

      <figure>
        <Image src={clickApp} alt="Click app" layout="responsive" placeholder="blur" />
        <figcaption>Store selection page of the &quot;Click&quot; app (2018).</figcaption>
      </figure>
    </div>
  );
};

export default AdidasPage;
