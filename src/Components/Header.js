import React from 'react';
import styled from 'styled-components';

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
    </Head>
  )
}


export default Header;