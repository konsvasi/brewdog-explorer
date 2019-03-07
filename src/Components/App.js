import React, { Component } from 'react';
import Header from './Header';
import MainPanel from './MainPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  getResults = (results) => {
    this.setState({results: results});
  }

  render() {
    return (
      <div>
        <Header getResults={this.getResults}/>
        <MainPanel data={this.state.results}/>
      </div>
    );
  }
}

export default App;
