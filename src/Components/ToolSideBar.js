import React from 'react';
import styled from 'styled-components';
import RandomButton from './RandomButton';

const SideBar = styled.div`
  padding: 15px;
  background: #F2F2EF;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px;
`;

const ToolSideBar = (props) => {
  console.log('toolProps: ', props);
  return (
    <SideBar>
      <RandomButton getRandomBeer={props.getRandomBeer} />
    </SideBar>
  )
}

export default ToolSideBar;