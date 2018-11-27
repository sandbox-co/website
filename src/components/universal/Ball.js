import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import {colors} from '../../lib/styles'
import ball from "../../assets/ball.png"

const Wrapper = styled.div`
  background-image: url(${ball});
  background-position: center center;
  position: absolute;
  background-size: contain;
  ${props => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}
  ${props => props.top && css`
    top: ${props.top};
  `}
  ${props => props.left && css`
    left: ${props.left};
  `}
  ${props => props.bottom && css`
    bottom: ${props.bottom};
  `}
  ${props => props.right && css`
    right: ${props.right};
  `}
`

class Ball extends Component {
  render() {
    return (
      <Wrapper
        top={this.props.top} 
        bottom={this.props.bottom}
        left={this.props.left} 
        right={this.props.right} 
        size={this.props.size || 100}/>
    );
  }
}

export default Ball;