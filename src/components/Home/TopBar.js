import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import {colors} from '../../lib/styles'
import EmailEntry from "../universal/EmailEntry"

const Wrapper = styled.div`
	display: flex;
	height: 80px;
	background-color: rgba(255, 255, 255, 0.9);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 50px;
	padding-right: 30px;
	z-index: 100;
`

const Title = styled.h1`
	font-size: 40px;
	font-weight: 700;
	color: ${colors.black};
	padding-bottom: 5px;
`

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`

const NavLink = styled.h2`
	font-size: 24px;
	font-weight: 400;
	padding: 20px;
	cursor: default;
	color: ${colors.black};
	transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
	&:hover {
		cursor: default;
		transform: scale(1.03);
	}
	display: block;
	@media (max-width: 1000px) {
    display: none;
  }
	${props => props.active && css`
		font-weight: 700;
	`}
	${props => props.button && css`
		font-weight: 600;
		color: ${colors.secondary};
		@media (max-width: 1000px) {
	    display: block;
	  }
	`}
`

const EmailSection = styled.div`
  position: absolute;
  display: flex;
  right: 50px;
  top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  opacity: 0;
  ${props => props.visible && css`
		opacity: 1;
	`}
`


class TopBar extends Component {

	constructor(props) {
		super(props)
		this.state = {
			emailEntryVisible: false
		}
	}

  render() {
    return (
      <Wrapper>
        <Title>sandbox</Title>
        <Nav>
        	<NavLink active>about</NavLink>
        	<NavLink>learn</NavLink>
        	<NavLink>events</NavLink>
        	<NavLink>partners</NavLink>
        	<NavLink>people</NavLink>
        	<NavLink button onClick={() => {
        		this.setState({emailEntryVisible: !this.state.emailEntryVisible})
        	}}>stay updated</NavLink>
        </Nav>
        <EmailSection visible={this.state.emailEntryVisible}>
          <EmailEntry primary/>
        </EmailSection>
      </Wrapper>
    );
  }
}

export default TopBar;