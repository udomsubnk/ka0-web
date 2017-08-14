import React, { Component } from 'react';
import 'containers/App.css';
import NavbarTop from 'components/NavbarTop'
import NavFull from 'components/NavFull'
import AppBody from 'components/AppBody'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop></NavbarTop>
        <NavFull></NavFull>
        <AppBody></AppBody>
      </div>
    );
  }
}

export default App;
