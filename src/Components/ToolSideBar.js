import React from 'react';
import styled from 'styled-components';
import RandomButton from './RandomButton';
import AbvSlider from './AbvSlider';

const SideBar = styled.div`
  padding: 15px;
  background: #F2F2EF;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const ToolSideBar = (props) => {
  return (
    <SideBar>
      <RandomButton getRandomBeer={props.getRandomBeer} />
      <AbvSlider beerWithAbv={props.beerWithAbv}/>
    </SideBar>
  )
}

export default ToolSideBar;