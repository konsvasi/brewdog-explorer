import React from 'react';
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

const SearchBar = () => {  
  return (
    <SearchField>
      <Input placeholder="Search the BrewDog collection"></Input>
      <a href="#"><Icon src={searchIcon} alt="glass"/></a>
    </SearchField>
    
  )
}

export default SearchBar;
