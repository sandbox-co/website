import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 50px;
	padding-right: 50px;
  box-sizing: border-box;
  height: 800px;
  width: 100%;
`

const Background = styled.img`
  height: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  overflow: visible;
  width: 100%;
  top: 200px;
  @media (max-width: 800px) {
    
  }
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        
      </Wrapper>
    );
  }
}

export default About;