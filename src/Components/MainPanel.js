import React from 'react';
import styled from 'styled-components';
import ToolSideBar from './ToolSideBar';
import CardList from './CardList';

const Panel = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, 1fr);
`;

const MainPanel = (props) => {
  return (
    <Panel>
      <ToolSideBar />
      <CardList data = {props.data} />
    </Panel>
  )
}

export default MainPanel;