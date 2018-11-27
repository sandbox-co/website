import React, { Component } from 'react';
import styled from 'styled-components'
import {colors} from '../../lib/styles'
import StackItem from "../universal/StackItem"
import ProjectCard from "../universal/ProjectCard"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	padding-left: 50px;
	padding-right: 50px;
  width: 100%;
  box-sizing: border-box;
`

const Title = styled.h2`
  color: ${colors.nearBlack};
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
`

const SubTitle = styled.h4`
  color: ${colors.nearBlack};
  font-size: 24px;
  font-weight: 400;
`

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 380px;
`

const SectionTitle = styled.h3`
  color: ${colors.nearBlack};
  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  margin-left: 30px;
`

const SectionIcon = styled.img`
  width: 40px;
  height: auto;
`

const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-left: 40px;
`

const LearnFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 80px;
`

const SeeCurriculumLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.primary};
  font-size: 26px;
  font-weight: 700;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`

const SeeCurriculumArrow = styled.img`
  height: 20px;
  width: auto;
  margin-left: 10px;
  margin-top: 5px;
`

class Learn extends Component {
  render() {
    return (
      <Wrapper>
        <Title>sandbox learn</Title>
        <SubTitle>technical bootcamp for students</SubTitle>

        <SectionHeader>
          <SectionIcon resizeMode="cover" src={require("../../assets/learnStack.png")}/>
          <SectionTitle>
            Learn the stack used by the
            best tech companies
          </SectionTitle>
        </SectionHeader>

        <SectionContent>
          <StackItem image={require("../../assets/reactLogo.png")} name={"React"}/>
          <StackItem image={require("../../assets/firebaseLogo.png")} name={"Firebase"}/>
          <StackItem image={require("../../assets/reduxLogo.png")} name={"Redux"}/>
          <StackItem image={require("../../assets/reactLogo.png")} name={"React Native"}/>
          <StackItem image={require("../../assets/stripeLogo.png")} name={"Stripe"}/>
          <StackItem image={require("../../assets/slackLogo.png")} name={"Slack"}/>
          <StackItem image={require("../../assets/githubLogo.png")} name={"Github"}/>
          <StackItem image={require("../../assets/figmaLogo.png")} name={"Figma"}/>
          <StackItem image={require("../../assets/sentryLogo.png")} name={"Sentry"}/>
        </SectionContent>

        <SectionHeader>
          <SectionIcon resizeMode="cover" src={require("../../assets/learnProjects.png")}/>
          <SectionTitle>
            With projects that are fun
            and experiential
          </SectionTitle>
        </SectionHeader>

        <SectionContent>
          <ProjectCard image={require("../../assets/socialCard.png")} name={"Social Card"}/>
          <ProjectCard image={require("../../assets/weatherApp.png")} name={"Weather App"}/>
          <ProjectCard image={require("../../assets/toDoApp.png")} name={"To Do App"}/>
        </SectionContent>

        <LearnFooter>
          <SeeCurriculumLink>
            see the curriculum
            <SeeCurriculumArrow src={require("../../assets/learnArrow.png")}/>
          </SeeCurriculumLink>
        </LearnFooter>

      </Wrapper>
    );
  }
}

export default Learn;