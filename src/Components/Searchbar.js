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
      inputFieldValue: ''
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
      this.submit();
    }
  }

  submit = () => {
    console.log('submitted:', this.state.inputFieldValue);
  }

  render() {
    return (
      <SearchField>
        <Input placeholder="Search the BrewDog collection" onChange={this.handleOnChange} onKeyDown={this.checkForEnterPressed}></Input>
        <a href="#"><Icon src={searchIcon} alt="glass" onClick={this.submit}/></a>
      </SearchField>
      
    )
  }
}

export default SearchBar;
