import React from 'react';
import NavMobile from '/components/common/NavBar/NavMobile';

const App = props =>
  <div className="coise">
    {props.children}
    <NavMobile />
  </div>;

export default App;
