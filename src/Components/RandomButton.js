import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  color: #484848;
  justify-self: start;
  align-self: center;
  font-size:16px;
  letter-spacing:2px;
  text-align:center;
  width:170px;
  font-weight:bold;
  padding:14px 0px;
  border:3px solid #0FD0D5;
  border-radius:2px;
  position:relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.1);

  &:hover {
    background: #0FD0D5;
    transition: 0.5s ease all;
  }

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
    <Button onClick={() => { click(props)}}>Random beer</Button>
  )
}

export default RandomButton;