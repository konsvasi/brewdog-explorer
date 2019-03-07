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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel>
        <ToolSideBar />
        <CardList data = {this.props.data} />
      </Panel>
    )
  }
}

export default MainPanel;