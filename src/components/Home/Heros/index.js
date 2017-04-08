import React from 'react';
import Carousel from 're-carousel';
import IndicatorDots from './IndicatorDots';
import Hero from './Hero';
import LangMenu from '/components/common/LangMenu';
import styles from './Heros.css';
import { heros } from '/jn.config';

const Heros = () => {
  const frames = heros.map(hero =>
    <Hero
      key={hero.stringKey}
      hero={hero}
    />,
  );
  return (
    <div className={styles.root}>
      <div className={styles.carouselContainer}>
        <Carousel auto frames={frames} indicator={IndicatorDots} interval={5000} />
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
