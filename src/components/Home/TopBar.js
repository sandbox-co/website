import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
	display: flex;
	height: 80px;
	background-color: rgba(255, 255, 255, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 50px;
	padding-right: 50px;
`

const Title = styled.h1`
	font-size: 40px;
	font-weight: 700;
	color: ${colors.black};
`

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`

const NavLink = styled.h2`
	font-size: 24px;
	font-weight: 500;
	margin-left: 40px;
	cursor: default;
	color: ${colors.black};
	&:hover {
		cursor: default;
	}
`

class TopBar extends Component {
  render() {
    return (
      <Wrapper>
        <Title>sandbox</Title>
        <Nav>
        	<NavLink>about</NavLink>
        	<NavLink>learn</NavLink>
        	<NavLink>events</NavLink>
        	<NavLink>partners</NavLink>
        	<NavLink>people</NavLink>
        	<NavLink>stay updated</NavLink>
        </Nav>
      </Wrapper>
    );
  }
}

export default TopBar;