import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { PageSubTitle } from '../../../components/PageSubTitle/PageSubTitle';
import { Techs } from '../../../components/Techs/Techs';
import szHomepage from '../../../img/soundzipper-homepage.png';
import sheratonCeiling from '../../../img/sheraton-ceiling.jpg';

const techs = ['HTML5', 'jQuery', 'Sass', 'PHP', 'Wordpress'];

const SoundzipperPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | Soundzipper</title>
      </Head>

      <PageTitle>Soundzipper</PageTitle>

      <PageSubTitle>Frontend Developer</PageSubTitle>

      <p style={{ marginBottom: 8 }}>Sep 2015 - Sep 2016</p>

      <Techs techs={techs} />

      <p className="paragraph">
        Soundzipper (
        <a
          href="https://soundzipper.com"
          rel="noreferrer noopener"
          target="_blank"
          className="anchor"
        >
          https://soundzipper.com
        </a>
        ) is a Singapore based acoustics consultancy company. In mid-2015 I started working with
        Soundzipper to develop and maintain the company&apos;s website.
      </p>

      <figure>
        <Image
          src={szHomepage}
          alt="Soundzipper's Homepage"
          layout="responsive"
          placeholder="blur"
        />
        <figcaption>Soundzipper&apos;s homepage (2016).</figcaption>
      </figure>

      <p className="paragraph">
        Soundzipper.com is a typical jQuery app that uses Sass for styling. One of the requirements
        was to develop both an intuitive back-office and a blog. Wordpress was the perfect fit at
        the time (by using the ACF package, I was able to build an intuitive back-office for the
        website).
      </p>

      <figure>
        <Image
          src={sheratonCeiling}
          alt="Sheraton ceiling"
          layout="responsive"
          placeholder="blur"
        />
        <figcaption>
          One render I made while working at Soundzipper, for a ceiling to be installed in a
          Sheraton hotel.
        </figcaption>
      </figure>

      <p className="paragraph">
        Overall, working at Soundzipper was a very fun and enriching experience. I even had the
        opportunity to develop my skills in graphic design and 3D rendering by engaging in some cool
        ongoing projects inside the company.
      </p>
    </div>
  );
};

export default SoundzipperPage;
