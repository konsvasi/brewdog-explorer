import React from 'react';
import styled from 'styled-components';
import SearchBar from './Searchbar';

const Head = styled.header`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 90px;
  background-color: #0FD0D5;
`;

const Logo = styled.h1`
  color: #484848;
  grid-column: 1;
  justify-self: center;
`;

const Header = (props) => {
  return (
    <Head>
      <Logo>Brewdog explorer</Logo>
      <SearchBar getResults={props.getResults}/>
    </Head>
  )
}


export default Header;