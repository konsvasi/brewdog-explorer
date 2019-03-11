import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 350px;
  grid-auto-rows: 450px;
  grid-gap: 15px;
  justify-self: center;
`;

const Msg = styled.h2`
 color: #F2F2EF;
 justify-self: center;
 align-self: center;
`;

const Message = (props) => {
  return (
    <Wrapper>
      <Msg>
        {props.textToDisplay}
      </Msg>
    </Wrapper>
  )
}

export default Message;