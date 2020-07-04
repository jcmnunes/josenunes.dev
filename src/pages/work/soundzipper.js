import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SingleLayout from '../../components/layouts/singleLayout';
import { Anchor } from '../../components/Anchor';

export default ({ data }) => (
  <SingleLayout
    title="Soundzipper"
    subTitle="Frontend developer"
    auxInfo="Sep 2015 - Sep 2016"
    techs={['HTML5', 'jQuery', 'Sass', 'PHP', 'Wordpress']}
  >
    <p>
      Soundzipper (<Anchor href="https://www.soundzipper.com/">www.soundzipper.com</Anchor>) is a
      Singapore based acoustics consultancy company. In mid-2015 I started working with Soundzipper
      to develop and maintain the company's website.
    </p>
    <figure>
      <Img fluid={data.homepage.childImageSharp.fluid} />
      <figcaption>Homepage of soundzipper.com.</figcaption>
    </figure>
    <p>
      Soundzipper.com is a typical jQuery app that uses Sass for styling. One of the requirements
      was to develop both an intuitive back-office and a blog. Wordpress was the perfect fit at the
      time (by using the <Anchor href="https://www.advancedcustomfields.com/">ACF package</Anchor>,
      I was able to build an intuitive back-office for the website).
    </p>
    <figure>
      <Img fluid={data.ceiling.childImageSharp.fluid} />
      <figcaption>
        One render I made while working at Soundzipper, for a ceiling to be installed in a Sheraton
        hotel.
      </figcaption>
    </figure>
    <p>
      Overall, working at Soundzipper was a very fun and enriching experience. I even had the
      opportunity to develop my skills in graphic design and 3D rendering by engaging in some cool
      ongoing projects inside the company.
    </p>
  </SingleLayout>
);

export const query = graphql`
  query soundzipperPage {
    homepage: file(relativePath: { eq: "soundzipper-homepage.png" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ceiling: file(relativePath: { eq: "sheraton-ceiling.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 716) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
