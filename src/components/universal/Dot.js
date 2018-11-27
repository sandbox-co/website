import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  ${props => css`
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: ${props.size/2}px;
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

class Dot extends Component {
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

export default Dot;