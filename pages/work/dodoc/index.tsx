import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { PageSubTitle } from '../../../components/PageSubTitle/PageSubTitle';
import { Techs } from '../../../components/Techs/Techs';
import doDOCHomepage from '../../../img/dodoc-homepage.png';
import doDOCLogin from '../../../img/dodoc-login.png';

const techs = ['React', 'Redux', 'CSS Modules', 'PostCSS', 'Mocha', 'Enzyme'];

const DoDOCPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | doDOC</title>
      </Head>

      <PageTitle>doDOC Corp</PageTitle>

      <PageSubTitle>Frontend Developer</PageSubTitle>

      <p style={{ marginBottom: 8 }}>Oct 2016 - Feb 2018</p>

      <Techs techs={techs} />

      <p className="paragraph">
        doDOC (
        <a href="https://dodoc.com" rel="noreferrer noopener" target="_blank" className="anchor">
          https://dodoc.com
        </a>
        ) is software development company with headquarters in Boston (USA) and Coimbra (Portugal).
        doDOC product is a single platform solution for secure collaboration when working with
        complex and regulated documents.
      </p>

      <figure>
        <Image src={doDOCHomepage} alt="doDOC Homepage" layout="responsive" placeholder="blur" />
        <figcaption>
          doDOC product is a single platform solution for secure collaboration when working with
          complex and regulated documents.
        </figcaption>
      </figure>

      <p className="paragraph">
        When I joined the company, in October 2016, the frontend of the app was written in jQuery.
        The app was reaching a size that led to the decision to replace the frontend tech. The React
        library was chosen, and my job was to gradually transition all the frontend code into a
        React/Redux SPA.
      </p>

      <figure>
        <Image src={doDOCLogin} alt="doDOC login screen" layout="responsive" placeholder="blur" />
        <figcaption>Login screen of doDOC&apos;s web app (2016).</figcaption>
      </figure>

      <p className="paragraph">
        I (naively) started the job without hesitation. Looking back, I can see that this experience
        was the perfect opportunity to learn React, as well as the React ecosystem. I&apos;ve been a
        big fan of React ever since.
      </p>
    </div>
  );
};

export default DoDOCPage;
