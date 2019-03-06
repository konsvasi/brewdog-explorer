import React, { Component } from 'react';
import Header from './Header';
import MainPanel from './MainPanel';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPanel />
      </div>
    );
  }
}

export default App;
