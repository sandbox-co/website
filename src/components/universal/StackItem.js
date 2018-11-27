import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  margin: 30px 35px 30px 35px;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    cursor: default;
    transform: scale(1.04);
  }
`

const Image = styled.img`
  height: 50px;
  width: auto;
`

const Name = styled.h4`
  color: ${colors.nearBlack};
  font-size: 24px;
  font-weight: 600;
`

class StackItem extends Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.image}/>
        <Name>{this.props.name}</Name>
      </Wrapper>
    );
  }
}

export default StackItem;