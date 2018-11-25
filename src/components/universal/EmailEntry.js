import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  width: 240px;
  color: ${colors.nearWhite};
  ::placeholder {
    color: ${colors.halfWhite};
  }
  padding: 8px 0px 8px 15px;
`

const Arrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 15px 10px 15px;
  opacity: 0.5;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  :hover {
    opacity: 1;
    transform: scale(1.08);
  }
`

const ArrowImage = styled.img`
  height: 16px;
  width: 27px;
`

class EmailEntry extends Component {
  render() {
    return (
      <Wrapper>
        <Input placeholder={"your email"}/>
        <Arrow>
          <ArrowImage src={require("../../assets/emailEntryArrow.png")}/>
        </Arrow>
      </Wrapper>
    );
  }
}

export default EmailEntry;