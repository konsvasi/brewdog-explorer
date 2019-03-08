import React from 'react';
import styled from 'styled-components';
import RandomButton from './RandomButton';

const SideBar = styled.div`
  padding: 15px;
  background: #F2F2EF;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px;
  grid-gap: 25px;
`;

const ToolSideBar = () => {
  return (
    <SideBar>
      <RandomButton />
    </SideBar>
  )
}

export default ToolSideBar;