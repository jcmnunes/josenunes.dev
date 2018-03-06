import React from 'react';

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '0px',
    textAlign: 'center',
  },
};

const IndicatorDots = props => {
  // Hide dots when there is only one dot.
  if (props.total < 2) return <div style={styles.wrapper} />;

  const dots = [];
  for (let i = 0; i < props.total; i += 1) {
    dots.push(<Dot key={i} selected={props.index === i} />);
  }
  return <div style={styles.wrapper}>{dots}</div>;
};

IndicatorDots.propTypes = {
  index: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired,
};

const Dot = props =>
  <span
    style={{
      display: 'inline-block',
      height: '8px',
      width: '8px',
      borderRadius: '4px',
      backgroundColor: 'gray',
      margin: '7px 5px',
      opacity: props.selected ? '1' : '0.3',
      transitionDuration: '300ms',
    }}
  />;

Dot.defaultProps = {
  selected: false,
};

Dot.propTypes = {
  selected: React.PropTypes.bool,
};

export default IndicatorDots;
