import React from 'react';
import styles from './Tags.css';

const tags = [
  { name: 'React', color: '#F9BF3B' },
  { name: 'Redux', color: '#F96900' },
  { name: 'CSS', color: '#52B3DD' },
  { name: 'Webpack', color: '#336E7B' },
  { name: 'Node', color: '#91A6A6' },
  { name: 'Other', color: '#BCC3C7' },
];

const Tags = () => (
  <div className={styles.root}>
    {tags.map(tag => (
      <span
        key={tag.name}
        className={styles.tag}
        style={{ background: tag.color }}
      >
        {tag.name}
      </span>
    ))}
  </div>
);

export default Tags;
