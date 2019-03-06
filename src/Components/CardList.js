import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const List = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 15px;
`;


const CardList = () => {
  return (
    <List>
      <Card />
      <Card />
      <Card />
    </List>
  )
}

export default CardList;