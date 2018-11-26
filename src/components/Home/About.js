import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 50px;
	padding-right: 50px;
	flex: 1;
`

const Header = styled.div`
	background-color: ${colors.primary};
	padding: 1em;
	justify-content: flex-start;
`

const Title = styled.h1`
  font-size: 1.3rem;
  text-align: left;
`

const Body = styled.div`
	background-color: ${colors.secondary};
	padding: 12em;
	text-align: center;
`

class About extends Component {
  render() {
    return (
      <Wrapper>
				<Header>
					<Title>
						Learn to build and ship applications
					</Title>
					bridging the gap between CS education and technical entrepreneurship at Yale
				</Header>
				<Body>
					We turn creative students into <br></br>
					technical superstars
				</Body>
      </Wrapper>
    );
  }
}

export default About;
