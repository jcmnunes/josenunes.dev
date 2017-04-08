import React from 'react';
import Slider from 'react-slick';
import Hero from './Hero';
import LangMenu from '/components/common/LangMenu';
import styles from './Heros.css';
import { heros } from '/jn.config';

const Heros = () => {
  const frames = heros.map(hero =>
    <div key={hero.stringKey}>
      <Hero hero={hero} />
    </div>,
  );
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.root}>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {frames}
        </Slider>
      </div>
      <div className={styles.langMenu}>
        <div className="container" style={{ textAlign: 'right' }}>
          <LangMenu />
        </div>
      </div>
    </div>
  );
};

export default Heros;
