import React from 'react';
import NavMobile from '/components/common/NavBar/NavMobile';

const App = props =>
  <div>
    {props.children}
    <NavMobile />
  </div>;

export default App;
