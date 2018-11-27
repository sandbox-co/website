import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import {colors} from '../../lib/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 30px 80px 30px 80px;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    cursor: default;
    transform: scale(1.03);
  }
`

const Image = styled.img`
  height: 100px;
  width: auto;
`

const Name = styled.h4`
  color: ${colors.nearBlack};
  font-size: 24px;
  margin-top: 20px;
  font-weight: 600;
`

class ProjectCard extends Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.image}/>
        <Name>{this.props.name}</Name>
      </Wrapper>
    );
  }
}

export default ProjectCard;