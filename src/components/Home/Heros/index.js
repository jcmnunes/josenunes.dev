import React from 'react';
import Hero from './Hero';
import LangMenu from '/components/common/LangMenu';
import styles from './Heros.css';
import { heros } from '/jn.config';

class Heros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ii: 0,
      interval: '',
    };
  }

  componentWillMount() {
    const len = heros.length - 1;
    const interval = window.setInterval(() => {
      if (this.state.ii === len) {
        this.setState({ ...this.state, ii: 0 });
      } else {
        this.setState({ ...this.state, ii: this.state.ii + 1 });
      }
    }, 10000);
    this.setState({ ...this.state, interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { ii } = this.state;
    return (
      <div className={styles.root}>
        {
          heros.map((hero, index) =>
            <Hero key={hero.title} visible={index === ii} hero={hero} />,
          )
        }
        <div className={styles.langMenu}>
          <div className="container" style={{ textAlign: 'right' }}>
            <LangMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Heros;
