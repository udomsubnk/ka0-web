import React, { Component } from 'react';
import 'containers/App.css';
import Navbar from 'components/Navbar'
import AppBody from 'components/AppBody'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <AppBody></AppBody>
      </div>
    );
  }
}

export default App;
