import React, { Component } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  justify-self: start;
`
const Message = styled.p`
  text-align: center;
  color: #484848;
`;

const Slider = styled.input.attrs({
  type: 'range',
  min: "0",
  max: "20"
})`
display: block;
margin: auto;
`;

class AbvSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: "10"
    }
  }
  
  handleChange = (ev) => {
    ev.persist();
    console.log('ev.target.value:', ev.target.value);
    this.setState({
      rangeValue: ev.target.value
    }, this.getBeerWithAbv);
  }

  getBeerWithAbv = async () => {
    console.log('rangeVal:', this.state.rangeValue);
    const response = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=${this.state.rangeValue}`);
    const results = await response.json();
    this.props.beerWithAbv(results);
  }

  render() {
    return (
      <SliderContainer>
        <Message>Give me beer with abv above: {this.state.rangeValue}%</Message>
        <Slider defaultValue="10" onChange={this.handleChange}></Slider>
      </SliderContainer>
    )
  }
}

export default AbvSlider;