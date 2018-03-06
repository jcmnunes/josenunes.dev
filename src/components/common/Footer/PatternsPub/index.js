import React from 'react';
import { connect } from 'react-redux';
import Tech from '../Techs/Tech';
import styles from './PatternsPub.css';

const PatternsPub = ({ string }) =>
  <div className={styles.root}>
    <h1>{string}</h1>
    <div className={styles.techs}>
      <Tech
        sty={{ marginRight: 0 }}
        name="Subtle patterns"
        img={'subtle'}
        link="https://www.toptal.com/designers/subtlepatterns/"
        width={30}
      />
    </div>
  </div>;

const mapStateToProps = state => ({
  string: state.intl.messages.footer.patterns,
});

export default connect(mapStateToProps)(PatternsPub);
