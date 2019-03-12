import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const List = styled.div`
 padding: 15px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
 grid-auto-rows: 450px;
 grid-gap: 15px;
`;


const CardList = (props) => {
  const resultList = props.data.map((beer => {
    return (
      <Card key={beer.id} beer={beer} />
    )
  }))
  return (
    <List>
      {resultList}
    </List>
  )
}

export default CardList;