import React from 'react';
import Tech from './Tech';
import styles from './Techs.css';
import config from '/jn.config';

/**
 * ESDoc comment.
 */
const Techs = () =>
  <div className={styles.root}>
    <h1>
      This <a href="http://google.com">website</a> uses the
      awesome following technologies:
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
              width={tech.width}
            />
          );
        })
      }
    </div>
  </div>;

export default Techs;
