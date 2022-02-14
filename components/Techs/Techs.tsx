import React from 'react';
import styles from './Techs.module.scss';

interface Props {
  techs: string[];
}

export const Techs: React.FC<Props> = ({ techs }) => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Main techs used:</h3>

      <div className={styles.techs}>
        {techs.map((tech, index) => (
          <React.Fragment key={tech}>
            <span>{tech}</span>

            {index !== techs.length - 1 && (
              <div role="separator" className={styles.separator}>
                |
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
