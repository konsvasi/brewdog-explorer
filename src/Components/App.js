import React, { Component } from 'react';
import Header from './Header';
import MainPanel from './MainPanel';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
    background-color: #372A29;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      firstCall: true
    }
  }

  getResults = (results) => {
    this.setState({results: results, 
      firstCall: false
    });
  }

  getRandomBeer = (result) => {
    this.setState({results: result,
      firstCall: false
    });  
  }

  getBeerWithAbv = (result) => {
    this.setState({results: result,
    firstCall: false
  });
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header getResults={this.getResults}/>
        <MainPanel data={this.state.results} 
          getRandomBeer={this.getRandomBeer}
          getBeerWithAbv={this.getBeerWithAbv}
          firstCall={this.state.firstCall}
        />
      </div>
    );
  }
}

export default App;
