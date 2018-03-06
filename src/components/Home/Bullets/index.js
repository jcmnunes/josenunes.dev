import React from 'react';
import { heros } from '/jn.config';
import { connect } from 'react-redux';
import { startTimer } from '/actions/home';
import styles from './Bullets.css';

export const Bullets = props =>
  <div className={`${styles.root}`}>
    {
      heros.map(hero =>
        <span
          key={hero.stringKey}
          onClick={() => props.startTimer(hero.stringKey)}
          className={`
            ${styles.bullet}
            ${props.activeHero === hero.stringKey && styles.active}
          `}
        />,
      )
    }
  </div>;

const mapStateToProps = state => ({
  activeHero: state.home.activeHero,
});

export default connect(mapStateToProps, { startTimer })(Bullets);
