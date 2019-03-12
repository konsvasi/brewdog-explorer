import React from 'react';
import styled from 'styled-components';
import ToolSideBar from './ToolSideBar';
import CardList from './CardList';
import Message from './Message';

const Panel = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 90px 1fr;
`;


const Container = (props) => {
  if (props.data && props.data.length > 0 ) {
    return <CardList data = {props.data} />
  }

  return <Message textToDisplay={"Sorry, no beers found"} />
}
const MainPanel = (props) => {
  return (
    <Panel>
      <ToolSideBar getRandomBeer={props.getRandomBeer} />
      <Container data={props.data}/>
    </Panel>
  )
}

export default MainPanel;