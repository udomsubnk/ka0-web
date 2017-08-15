import React, { Component } from 'react';
import 'containers/App.css';
import NavbarTop from 'components/NavbarTop'
import AppBody from 'components/AppBody'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop></NavbarTop>
        <AppBody></AppBody>
      </div>
    );
  }
}

export default App;
