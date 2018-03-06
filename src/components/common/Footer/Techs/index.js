import React from 'react';
import { connect } from 'react-redux';
import Tech from './Tech';
import styles from './Techs.css';
import config from '/jn.config';

const Techs = ({ strings }) =>
  <div className={styles.root}>
    <h1>
      {strings.techs1}&nbsp;
      <a
        href="https://github.com/jcmnunes/josenunesxyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        {strings.techs2}
      </a>&nbsp;{strings.techs3}
    </h1>
    <div className={styles.techs}>
      {
        config.techs.map((tech, index) => {
          const len = config.techs.length;
          const margin = (index + 1) !== len ? 10 : 0;
          return (
            <Tech
              sty={{ marginRight: margin }}
              key={tech.name}
              name={tech.name}
              img={tech.img}
              link={tech.link}
              width={tech.width}
            />
          );
        })
      }
    </div>
  </div>;


const mapStateToProps = state => ({
  strings: state.intl.messages.footer,
});

export default connect(mapStateToProps)(Techs);
