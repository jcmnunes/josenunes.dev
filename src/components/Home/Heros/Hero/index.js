import React from 'react';
import { connect } from 'react-redux';
import { PrimaryLargeBtn } from '/components/common/Buttons';
import styles from './Hero.css';

const Hero = ({ visible, hero, strings }) => {
  const { stringKey, pattern } = hero;
  const { title, par, btn } = strings[stringKey];
  const img = require(`../../../../patterns/${pattern}.png`);
  return (
    <div
      className={`${styles.root} ${visible && styles.visible}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={`${styles.textContainer} container`}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{par}</p>
          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <PrimaryLargeBtn
              onClick={() => alert('hello')}
            >
              {btn}
            </PrimaryLargeBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Maps the state.auth. from the store
 * to the component's prop .
 */
export const mapStateToProps = state => ({
  strings: state.intl.messages.heros,
});

export default connect(mapStateToProps)(Hero);
