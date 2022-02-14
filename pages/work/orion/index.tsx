import { NextPage } from 'next';
import Image from 'next/image';
import { Head } from '../../../components/Head/Head';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { PageSubTitle } from '../../../components/PageSubTitle/PageSubTitle';
import { Techs } from '../../../components/Techs/Techs';
import orionApps from '../../../img/orion-apps.jpg';
import orionCall from '../../../img/orion-call.jpg';

const techs = ['React', 'React-Native', 'TypeScript', 'CSS in JS', 'React-Testing-Library'];

const OrionPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | Orion</title>
      </Head>

      <PageTitle>Orion Advisor Tech</PageTitle>

      <PageSubTitle>Frontend Developer</PageSubTitle>

      <p style={{ marginBottom: 8 }}>Jun 2019 - Present</p>

      <Techs techs={techs} />

      <p className="paragraph">
        Orion Advisor Tech (
        <a
          href="https://orionadvisortech.com"
          rel="noreferrer noopener"
          target="_blank"
          className="anchor"
        >
          https://orionadvisortech.com
        </a>
        ), exists to help fiduciary minded advisors realize their unique vision for success. The
        powerful, automated, interactive financial planning solution empowers consumers to take
        control of their financial wellness and allows advisors to identify new opportunities and
        grow their practice.
      </p>

      <figure>
        <Image src={orionApps} alt="Orion apps" layout="responsive" placeholder="blur" />
        <figcaption>Orion&apos;s client portal (web and mobile versions).</figcaption>
      </figure>

      <p className="paragraph">
        At Orion, I work as a Frontend developer (React / React-Native), integrated into the team
        responsible for maintaining and improving Orion&apos;s client portal&apos;s web and mobile
        versions. The web version is a React SPA. The mobile app is a React-Native app that targets
        both iOS and Android platforms.
      </p>

      <figure>
        <Image src={orionCall} alt="Orion call" layout="responsive" placeholder="blur" />
        <figcaption>It is always great to catch up with the team.</figcaption>
      </figure>
    </div>
  );
};

export default OrionPage;
