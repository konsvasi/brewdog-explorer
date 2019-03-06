import React from 'react';
import styled, { keyframes } from 'styled-components';
import searchIcon from '../Assets/search.svg';

const Details = styled.div`
  padding: 20px;
  grid-row: 3;
  grid-column: 1 / -1;
  background: white;
  width: 100%;
`;

const Description = styled.p`
  font-size: 16px;
  display: none;
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const Info = styled.div`
  box-shadow: 15px 13px 29px -5px rgba(0,0,0,0.21);
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(3, 150px);
  background: palegreen;
  &:hover ${Details} {
    grid-row: 2 / 4;
    transition: 2s;
    ${Description} {
      display: block;
      animation: ${fadeIn} 2s;
      transition: 2s;
    }
  }

  &:hover {
    box-shadow: 15px 13px 29px -5px rgba(0,0,0,0.5);
    transition: 2s
  }
`;

const ProductImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: rgb(40,40,40);
  margin: 0;
`;

const TagLine = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: 	rgb(120,120,120);
  margin: 0;
`;

const Card = (props) => {
 return (
  <Info>
    <ProductImage src={searchIcon}/>
    <Details>
      <Name>BeerName</Name>
      <TagLine>
        A beer with a zing
      </TagLine>
      <Description>
        This is the description. Bla bla bla
        blalsl asg alsglasglalg
        asglaslgals gl asgsaglasg
      </Description>
    </Details>
  </Info>
 )
}

export default Card;