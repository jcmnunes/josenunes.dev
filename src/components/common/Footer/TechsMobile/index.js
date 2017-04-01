import React from 'react';
import Tech from '../Techs/Tech';
import styles from './TechsMobile.css';
import config from '/jn.config';

class TechsMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleTech: 0 };
    this.changeVisibleTech = this.changeVisibleTech.bind(this);
  }

  componentWillMount() {
    this.interval = window.setInterval(this.changeVisibleTech, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeVisibleTech() {
    const { techs } = config;
    const { visibleTech } = this.state;
    const numberOfTechs = techs.length;
    let nextTech = visibleTech + 1;
    if (visibleTech === numberOfTechs - 1) {
      nextTech = 0;
    }
    this.setState({ visibleTech: nextTech });
  }

  render() {
    const { visibleTech } = this.state;
    return (
      <div className={styles.root}>
        {
          config.techs.map((tech, index) =>
            <div
              key={tech.name}
              className={`
                ${styles.tech}
                ${visibleTech === index && styles.visible}
              `}>
              <Tech
                sty={{}}
                name={tech.name}
                img={tech.img}
                link={tech.link}
                width={tech.width * 1.2}
                mobile
              />
            </div>,
          )
        }
      </div>
    );
  }
}

export default TechsMobile;
