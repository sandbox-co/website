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

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <TopBar/>
        <About/>
        <Learn/>
        <Events/>
        <Partners/>
        <People/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default Home;