import React, { Component } from 'react';
import styled from 'styled-components';
import searchIcon from '../Assets/search.svg';

const Input = styled.input.attrs({
  type: 'text',
  size: 10
})`
  border-width: 0;
  width: 330px;
  height: 40px;
  font-size: 24px;
  padding: 5px;
  color: rgb(150, 148, 148);
  
  &:focus {
    outline: none;
  }
`

const SearchField = styled.div`
  margin-right: 40px;
  justify-self: end;
  align-self: center;
  width: 400px;
  background-color: white;
`;

const Icon = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;
`

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFieldValue: '',
    }
  }

  handleOnChange = (ev) => {
    this.setState({
      inputFieldValue: ev.target.value
    })
  }

  // Checks if the enter key is pressed
  // and calls the submit function if it was pressed
  checkForEnterPressed = (ev) => {
    if (ev.key === 'Enter') {
      this.submit(this.state.inputFieldValue);
    }
  }

  // Makes a fetch call based on the searchTerm given
  // and returns the response
  fetchResults = async (searchTerm) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/?beer_name=${searchTerm}`);
    const result = await response.json();
    return result;
  }

  // Submits the results to the parent component
  submit =  async (searchTerm) => {
    const result = await this.fetchResults(searchTerm);
    this.props.getResults(result);
    this.refs.searchField.value = '';
  }

  render() {
    return (
      <SearchField>
        <Input placeholder="Search the BrewDog collection" onChange={this.handleOnChange} onKeyDown={this.checkForEnterPressed} ref="searchField"></Input>
        <a href="#"><Icon src={searchIcon} alt="glass" onClick={() => {this.submit(this.state.inputFieldValue)}}/></a>
      </SearchField>
    )
  }
}

export default SearchBar;
