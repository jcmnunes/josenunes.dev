import React from 'react';
import Tags from '../Tags';
import Icon from '/components/common/Icon';
import icons from '/components/common/Icon/icons';
import styles from './SideBar.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={styles.root}>
        <h2>TAGS</h2>
        <h4>Selected Tags</h4>
        <div className={styles.selectedTags} onClick={this.toggle}>
          <Tags />
        </div>
        <div className={`${styles.tags} ${open && styles.open}`}>
          <Tags />
        </div>
        <Icon icon={icons.home} />
        <Icon icon={icons.loading} spin />
        <Icon icon={icons.location} />
        <Icon icon={icons.test} />
      </div>
    );
  }
}

export default SideBar;
