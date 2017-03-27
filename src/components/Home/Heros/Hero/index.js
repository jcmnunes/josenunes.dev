import React from 'react';
import { PrimaryLargeBtn } from '/components/common/Buttons';
import styles from './Hero.css';

const Hero = ({ visible, hero }) => {
  const img = require(`../../../../patterns/${hero.pattern}.png`);
  return (
    <div
      className={`${styles.root} ${visible && styles.visible}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={`${styles.textContainer} container`}>
        <div className={styles.text}>
          <h1>{hero.title}</h1>
          <p>{hero.paragraph}</p>
          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <PrimaryLargeBtn
              onClick={() => alert('hello')}
            >
              Visit blog
            </PrimaryLargeBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
