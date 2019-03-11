import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #5F9190;
  width: 240px;
  height: 60px;
  justify-self: center;
  border-radius: 30px;
  box-shadow: 15px 13px 29px -5px rgba(0,0,0,0.21);
  border-style: none;
  padding: 10px;
  color: #F2F2EF;
  font-weight: 700;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;


const click = async (props) => {
  const response = await fetch(`https://api.punkapi.com/v2/beers/random`);
  const result = await response.json();
  props.getRandomBeer(result);

}

const RandomButton = (props) => {
  return (
    <Button onClick={() => { click(props)}}>Click for a random beer recommendation</Button>
  )
}

export default RandomButton;