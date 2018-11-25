import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'
import EmailEntry from "../universal/EmailEntry"

const Wrapper = styled.div`
  padding-top: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-left: 50px;
	padding-right: 50px;
`

const Background = styled.img`
  height: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  overflow: visible;
  z-index: -1;
  width: 100%;
  min-width: 1400px;
  bottom: -50%;
  @media (max-width: 800px) {
    top: -480px;
    min-width: 1000px;
  }
`

const Title = styled.h2`
  color: ${colors.halfWhite};
  font-size: 40px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 40px;
  padding-bottom: 100px;
  width: 100%;
  @media (max-width: 800px) {
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Address = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${colors.halfWhite};
  font-size: 20px;
  line-height: 50px;
  font-weight: 600;
  padding-top: 20px;
  @media (max-width: 800px) {
    align-items: center;
  }
`

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

const EmailText = styled.div`
  color: ${colors.nearWhite};
  font-size: 20px;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 5px;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px;
  @media (max-width: 800px) {
    align-items: center;
  }
`

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
`

const LinkText = styled.h3`
  color: ${colors.halfWhite};
  font-size: 24px;
  font-weight: 600;
  margin-right: 15px;
`

const LinkImage = styled.img`
  height: 24px;
  width: auto;
`

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Background src={require("../../assets/footerBackground.png")}/>
        <Title>sandbox</Title>
        <Content>
          <Address>
            Sandbox @ Yale<br/>
            254 Elm Street<br/>
            New Haven, CT 06511
          </Address>
          <EmailSection>
            <EmailText>stay updated</EmailText>
            <EmailEntry/>
          </EmailSection>
          <Links>
            <Link>
              <LinkText>Github</LinkText>
              <LinkImage src={require("../../assets/githubIcon.png")}/>
            </Link>
            <Link>
              <LinkText>Medium</LinkText>
              <LinkImage src={require("../../assets/mediumIcon.png")}/>
            </Link>
            <Link>
              <LinkText>YouTube</LinkText>
              <LinkImage src={require("../../assets/youtubeIcon.png")}/>
            </Link>
          </Links>
        </Content>
      </Wrapper>
    );
  }
}

export default Footer;