import React from 'react';
import styled, { keyframes } from 'styled-components';

const Details = styled.div`
  padding: 30px;
  grid-row: 3;
  grid-column: 1 / -1;
  background: white;
`;


const Description = styled.div`
  display: none;
`;

const DescriptionContent = styled.p`
  font-size: 16px;
  color: rgb(120,120,120);
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const ProductImage = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 300px;
`;

const Info = styled.div`
  box-shadow: 15px 13px 29px -5px rgba(0,0,0,0.21);
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 150px minmax(150px, auto);
  background: palegreen;
  &:hover ${Details} {
    grid-row: 2 / 4;
    ${Description} {
      display: block;
      animation: ${fadeIn} 2s;
      transition: 2s;
    }
  }

  &:hover {
    box-shadow: 15px 13px 29px -5px rgba(0,0,0,1);
    transition: 2s;
    grid-template-rows: 1fr;
    background: red;
    z-index: 10;
  }
`;

const ImageContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  justify-self: center;
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

const SubDetails = styled.p`
  font-weight: 700;
  color: rgb(120,120,120);
`;

const Card = (props) => {
 return (
  <Info>
    <ImageContainer>
      <ProductImage src={props.beer.image_url}/>
    </ImageContainer>
    <Details>
      <Name>{props.beer.name}</Name>
      <TagLine>
        {props.beer.tagline}
      </TagLine>
      <Description>
        <DescriptionContent>
          {props.beer.description}
        </DescriptionContent>
        <SubDetails>Abv:{props.beer.abv}% Ibu: {props.beer.ibu}</SubDetails>
      </Description>
    </Details>
  </Info>
 )
}

export default Card;