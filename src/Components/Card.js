import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(3, 100px);
  background-color: palegreen;
`;

const ProductImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
`;

const Details = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
`;

const Card = () => {
 return (
  <Info>
    <ProductImage />
    <Details>
      <h1>BeerName</h1>
      <p>Description bla blab</p>
      <p>Abv: 19%</p>
      <p>Goes well with food list</p>
    </Details>
  </Info>
 )
}

export default Card;