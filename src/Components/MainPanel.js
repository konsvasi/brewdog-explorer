import React from 'react';
import styled from 'styled-components';
import ToolSideBar from './ToolSideBar';
import CardList from './CardList';
import Message from './Message';

const Panel = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
`;


const Container = (props) => {
  if (props.data && props.data.length > 0 ) {
    return <CardList data = {props.data} />
  }

  if (props.firstCall) {
    return <Message textToDisplay={"Search for a beer by moving the range slider, typing in the searchbar or just get a random recommendation"} />
  }

  return <Message textToDisplay={"Sorry, no beers found"} />
}
const MainPanel = (props) => {
  return (
    <Panel>
      <ToolSideBar getRandomBeer={props.getRandomBeer}  beerWithAbv={props.getBeerWithAbv}/>
      <Container data={props.data} firstCall={props.firstCall}/>
    </Panel>
  )
}

export default MainPanel;