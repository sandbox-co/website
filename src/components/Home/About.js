import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'
import aboutBackground from "../../assets/aboutBackground.png"
import Ball from "../universal/Ball"
import Dot from "../universal/Dot"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  width: 100%;
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${aboutBackground});
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    background-size: 1400px auto;
    background-position: 0px 0px;
    height: 500px;
  }
  @media (max-width: 1200px) {
    height: 700px;
    background-size: 1400px auto;
    background-position: 0px 0px;
  }
  height: 800px;
  width: 100%;
  overflow: visible;
  box-sizing: border-box;
  padding: 50px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: ${colors.white};
  position: relative;
`

const Hero = styled.h1`
  color: ${colors.nearBlack};
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 0px;
  margin-left: 50px;
  padding-top: 200px;
`

const Description = styled.h3`
  color: ${colors.nearBlack};
  font-size: 30px;
  font-weight: 400;
  margin-left: 50px;
  padding-bottom: 80px;
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Hero>learn to build and ship applications</Hero>
        <Description>bridging the gap between CS education and technical entrepreneurship at Yale</Description>
        <Banner>

          <Dot top={"50%"} left={"100px"} size={30}/>
          <Dot bottom={"30%"} left={"170px"} size={36}/>
          <Dot top={"20%"} right={"100px"} size={30}/>
          <Dot top={"30%"} right={"220px"} size={20}/>
          <Dot bottom={"40%"} right={"35%"} size={14}/>

          <Ball top={"22%"} left={"50px"} size={150}/>
          <Ball top={"16%"} left={"150px"} size={130}/>
          <Ball top={"26%"} left={"180px"} size={100}/>
          <Ball top={"34%"} left={"160px"} size={80}/>
          
          <Ball bottom={"20%"} right={"50px"} size={130}/>
          <Ball bottom={"30%"} right={"100px"} size={110}/>
          <Ball bottom={"31%"} right={"180px"} size={90}/>
          <Ball bottom={"20%"} right={"140px"} size={80}/>
          <Ball bottom={"24%"} right={"170px"} size={80}/>

          we turn creative students into<br/>technical superstars

        </Banner>
      </Wrapper>
    );
  }
}

export default About;