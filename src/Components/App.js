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

  getRandomBeer = (result) => {
    this.setState({results: result});  
  }

  render() {
    return (
      <div>
        <Header getResults={this.getResults}/>
        <MainPanel data={this.state.results} getRandomBeer={this.getRandomBeer}/>
      </div>
    );
  }
}

export default App;
