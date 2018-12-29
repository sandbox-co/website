import React, { Component } from 'react';
import styled from 'styled-components'
import TopBar from './TopBar'
import About from './About'
import Learn from './Learn'
import Events from './Events'
import Partners from './Partners'
import People from './People'
import Footer from './Footer'

const Wrapper = styled.div`
	display: flex;
	background-color: white;
	flex-direction: column;
	align-items: center;
	padding-top: 80px;
`

const BlurredWhiteWrapper = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
`

const BlurredWhite = styled.div`
  height: 70px;
  position: absolute;
  top: -10px;
  left: -10px;
  width: 120%;
  filter:blur(4px);
  -o-filter:blur(4px);
  -ms-filter:blur(4px);
  -moz-filter:blur(4px);
  -webkit-filter:blur(4px);
  background-color: rgba(255, 255, 255, 0.9);
`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <About/>
        <Learn/>
        <Events/>
        <Partners/>
        <People/>
        <Footer/>
        <BlurredWhiteWrapper>
          <BlurredWhite/>
        </BlurredWhiteWrapper>
        <TopBar/>
      </Wrapper>
    );
  }
}

export default Home;