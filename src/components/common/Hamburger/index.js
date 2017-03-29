import React from 'react';
import styles from './Hamburger.css';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.open = this.open.bind(this);
  }
  open() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { open } = this.state;
    return (
      <div
        className={`
          ${styles.root}
          ${open && styles.open}
        `}
        onClick={this.open}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
}

export default Hamburger;
