import React from 'react';
import { connect } from 'react-redux';
import { PrimaryLargeBtn } from '/components/common/Buttons';
import styles from './Hero.css';

const Hero = ({ hero, strings }) => {
  const { stringKey, pattern } = hero;
  const { title, par, btn } = strings[stringKey];
  const img = require(`../../../../patterns/${pattern}.png`);
  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={`${styles.textContainer} container`}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{par}</p>
          <div className={styles.btnContainer}>
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
