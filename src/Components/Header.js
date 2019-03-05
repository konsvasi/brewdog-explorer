import React from 'react';
import styled from 'styled-components';
import SearchBar from './Searchbar';

const Head = styled.header`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 90px;
  background-color: rebeccapurple;
`;

const Logo = styled.h1`
  color: rosybrown;
  grid-column: 1;
  justify-self: center;
`;

const Header = () => {
  return (
    <Head>
      <Logo>Brewdog explorer</Logo>
      <SearchBar />
    </Head>
  )
}


export default Header;