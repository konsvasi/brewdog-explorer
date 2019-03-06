import React, { Component } from 'react';
import styled from 'styled-components';
import ToolSideBar from './ToolSideBar';
import CardList from './CardList';

const Panel = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, 1fr);
`;

class MainPanel extends Component {
  render() {
    return (
      <Panel>
        <ToolSideBar />
        <CardList />
      </Panel>
    )
  }
}

export default MainPanel;