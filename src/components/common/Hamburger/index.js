import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '/actions';
import styles from './Hamburger.css';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
  }
  open() {
    this.props.toggleMenu();
  }
  render() {
    const { sty, open } = this.props;
    return (
      <div
        style={sty}
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

/**
 * Maps the state.global.menuOpen from the store
 * to the component's prop open.
 */
export const mapStateToProps = state => ({
  open: state.global.menuOpen,
});

export default connect(mapStateToProps, { toggleMenu })(Hamburger);
