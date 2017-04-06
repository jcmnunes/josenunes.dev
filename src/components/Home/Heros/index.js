import React from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import LangMenu from '/components/common/LangMenu';
import Bullets from '/components/Home/Bullets';
import styles from './Heros.css';
import { startTimer, stopTimer } from '/actions/home';
import { heros, sliderTime } from '/jn.config';

class Heros extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anim: true };
  }

  componentWillMount() {
    this.props.startTimer();
  }

  componentDidUpdate() {
    document.getElementById('bar').classList.remove(styles.anim);
    setTimeout(() => {
      document.getElementById('bar').classList.add(styles.anim);
    }, 50);
  }

  componentWillUnmount() {
    this.props.stopTimer();
  }

  render() {
    const { activeHero } = this.props;
    const { anim } = this.state;
    return (
      <div className={styles.root}>
        {
          heros.map(hero =>
            <Hero
              key={hero.stringKey}
              visible={hero.stringKey === activeHero}
              hero={hero}
            />,
          )
        }
        <div className={styles.bar}>
          <div
            id="bar"
            className={`
              ${styles.progress}
              ${anim && styles.anim}
            `}
            style={{
              right: 0,
              animationDuration: `${sliderTime}s`,
            }}
          />
        </div>
        <div className={styles.langMenu}>
          <div className="container" style={{ textAlign: 'right' }}>
            <LangMenu />
          </div>
        </div>
        <div
          onClick={() => this.props.startTimer(null, true)}
          className={`${styles.arrow} ${styles.left}`}
        >
          <span />
          <span />
        </div>
        <div
          onClick={() => this.props.startTimer()}
          className={`${styles.arrow} ${styles.right}`}
        >
          <span />
          <span />
        </div>
        <Bullets />
      </div>
    );
  }
}

/**
 * Maps the state.home.activeHero from the store
 * to the component's prop activeHero.
 */
export const mapStateToProps = state => ({
  activeHero: state.home.activeHero,
});

export default connect(mapStateToProps, { startTimer, stopTimer })(Heros);
