import React from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  background: salmon;
  height: 400px;
`;

const ToolSideBar = () => {
  return (
    <SideBar>
      <h2>Tools will be placed here</h2>
    </SideBar>
  )
}

export default ToolSideBar;