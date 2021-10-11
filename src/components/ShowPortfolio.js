import Spinner from 'react-bootstrap/Spinner'
import React, { useEffect, useState, useContext } from 'react'
import { createGlobalStyle } from 'styled-components'

import styled from 'styled-components'

import { Link, useParams } from 'react-router-dom'
/**
 * CSS
 */
import './ShowPortfolio.css'
import MyContext from '../MyContext'
import OwnerInfos from './OwnerInfos'

import {

  repoTestData
} from '../testdata'
/**
 * FOR GITHUB API
 */
import { Octokit } from '@octokit/core'
const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB
})

/**
 * FOR FETCHING DATA
 */
const axios = require('axios')

const StyleTopicsText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0px;
  margin-right: 10px;
`

const StyleLanguageText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0px;
`

const StyleCounterNumber = styled.p`
  font-size: 1rem;
  margin: 0px;
`

const StyleCounterNumberFilled = styled.p`
  color: #00000071;
  /* height: 25px;
  width: 25px;
  border-radius:50%; */
  font-size: 1rem;
  text-align: center;

  margin: 0px;
`

const BatchContainerFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: top;
  align-items: flex-start;
  text-align: center;
  color: white;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 100%;
`

const BatchLanguageFilter = styled.div`
  background-color: #afafaf;
  color: #000000;
  width: 100%;
  padding: 3px 9px;
  margin: 2.5px 2.5px 2.5px 0px;
  display: inline;

  font-size: 0.7rem;
  text-transform: lowercase;
  text-align: center;
  border: 0px solid #f1f2f8;
  border-radius: 5px;
  cursor: initial;

  /* box-shadow:#00000011 3px 3px 5px; */
`

/**
 * ShowPortfolio
 * @param {String} githubUsername
 */
function ShowPortfolio ({ githubUsername, colorShema }) {
  console.log('in ShowPortfolio')
  console.log("repoTestData",repoTestData);
  const { username, setUsername } = useContext(MyContext)

  console.log('in ShowPortfolio githubUsername=>', githubUsername)
  //States
  const [repoData, setRepoData] = useState(null)
  const [ownerData, setOwnerData] = useState('')

  const [countedLanguages, setCountedLanguages] = useState(null)
  const [countedTopics, setCountedTopics] = useState(null)
  const [loadingData, setLoadingData] = useState(false)
  //Context
  //const {username, setUsername} = useContext (MyContext);

  /**
   * GET ALL DATA
   */

  useEffect(() => {
    setUsername(githubUsername)

    const getData = async () => {
      
     
      let fetchedData=[];
      if(process.env.REACT_APP_TESTDATA==="1"){
          console.log("1");
fetchedData=repoTestData;
      }else{
           console.log("0...");
fetchedData= await axios.get(
        `${process.env.REACT_APP_LOCALHOST || "https://github-portfolio-maker.herokuapp.com" }/api/filtered/${githubUsername}`)
      }

        
        
        
     

 console.log('fetchedData=>', fetchedData);
      setRepoData(fetchedData.data.repoData.data)
      setOwnerData(fetchedData.data.ownerData)
      setCountedLanguages(fetchedData.data.repoData.countedLanguages)
      setCountedTopics(fetchedData.data.repoData.countedTopics)
      setLoadingData(true)
    }
    getData()
  }, [username])

  let getRepoElements = repoData => {
    let allReposWithStarInName = repoData
      ? repoData.filter((repo, key) => {
          return repo.name[0] === '-'
          //return key < 5;
        })
      : null

    const allReposWithoutStarInName = repoData
      ? repoData.filter((repo, key) => {
          return repo.name[0] !== '-'
          //return key < 5;
        })
      : null

    const portfolioPreviewData = repoData
      ? [...allReposWithStarInName, ...allReposWithoutStarInName]
      : null

    // //take only 5 repo Elements fpr Preview
    // const portfolioPreviewData = repoData?repoData.filter ((repo, key) => {
    //   return true
    //   //return key < 5;
    // }):null;

    console.log('repoData =>', repoData)
    // create the Portfolio Element with all the cards
    let repoElements = portfolioPreviewData
      ? portfolioPreviewData.map((repo, key) => {
          return (
            <div key={key}>
              <CaseStudy
                languages_topics={repo.topics}
                demolink={repo.homepage ? repo.homepage : repo.deploymentlink}
                visible={true}
                mainimage={repo.mainimage}
                title={repo.name}
                description={repo.description}
                languages_progress={repo.languages}
                colorShema={colorShema}
                repoUrl={repo.repo_url}
              />
            </div>
          )
        })
      : null

    return repoElements
  }

  let languagesFilterElement = countedLanguages => {
    if (!countedLanguages) return null
    let array = []
    console.log('countedLanguages=>', countedLanguages)
    for (const [key, value] of Object.entries(countedLanguages)) {
      array.push(
        <BatchLanguageFilter
          style={{ backgroundColor: `${colorShema[key.toLowerCase()]}` }}
        >
          <StyleLanguageText>{key}</StyleLanguageText>
          <StyleCounterNumber>{value}</StyleCounterNumber>
        </BatchLanguageFilter>
      )
    }
    return array
  }

  let topicsFilterElement = countedTopics => {
    if (!countedTopics) return null
    let array = []

    for (const [key, value] of Object.entries(countedTopics)) {
      if (value > 1) {
        array.push(
          <Batch>
            <StyleTopicsText>{key}</StyleTopicsText>
            <StyleCounterNumberFilled>{` ${value}`}</StyleCounterNumberFilled>
          </Batch>
        )
      } else {
        array.push(
          <Transparent>
            <Batch>
              <StyleTopicsText>{key}</StyleTopicsText>
              <StyleCounterNumberFilled></StyleCounterNumberFilled>
            </Batch>
          </Transparent>
        )
      }
    }
    return array
  }

  const spinner = (
    <div className='spinner-container'>
      <div className='spinner'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
      <span>Loading Repositories from GitHub...</span>
    </div>
  )

  return (
    <div className='App'>
      <OwnerInfos ownerData={ownerData} />
      <BatchContainerFilter>
        {languagesFilterElement(countedLanguages)}
      </BatchContainerFilter>
      <BatchContainer>{topicsFilterElement(countedTopics)}</BatchContainer>

      {loadingData === false ? spinner : getRepoElements(repoData)}
    </div>
  )
}

//import image1 from "../caseStudies/ikea/ikea.png"

const ContainerImage = styled.div`
  width: 100%;
  min-height: 100%;

    

  /* border-top-left-radius: 30px;
  border-bottom-left-radius: 30px; */
  transform: translateY(0px);

  /* overflow: hidden; */

  @media (max-width: 768px) {
    width: 100%;
    background-position: 0% 0%;
    background-size: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 30px;
  }

  .image {
    width: 100%;
   height:100%;
  min-height: 300px;
    display:block;
    border-style:none;
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-position-x: 0;
  }
`

const Details = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
 height: 100%;
 min-height: 300px;
 
  color: white;
  width: 100%;
  background-color: #ffffff;

  padding: 30px 50px 30px 30px;


  

  @media (max-width: 768px) {
    /* flex-grow:1; */
    width: 100%;
  }
`

const Actions = styled.div`
/* position:absolute; */
height:100px;
width:100%;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  position:absolute;


background-color:#000000;
color:#ffffff;
bottom:-100px;
  
  transition: all 500ms ease-in-out;

  @media (max-width: 768px) {
    /* flex-grow:1; */
    width: 100%;
  }
`


const WhiteButton = styled.div`
  background-color: #000000;
  color: #ffffff;
  min-width: 50px;
  padding: 9px 12px;
  margin-right: 5px;
  margin-bottom: 5px;

  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 32px;
  font-size: 0.8rem;
  /* font-weight:700; */
  text-transform: lowercase;
  border: 3px solid #ffffff;

  border-radius: 100px;
  cursor: pointer;

  font-weight: bold;
  font-size: 1rem;

  margin-right: 10px;
  /* box-shadow:#00000011 3px 3px 5px; */
`


const CardContent = styled.div`
  display:flex;
  flex-direction: row;

  min-height: 100%;

  width:100%;
 
  transition: all 500ms ease-in-out;

@media (max-width: 768px) {
   flex-direction: column;
  }
`


const Container = styled.div`
display:flex;
  width: 100%;


  min-height: 100%;
  transition: all 500ms ease-in-out;

  /* position:absolute; */
  
 
  



  

  @media (max-width: 768px) {
    height: calc(50vw);
    flex-direction: column;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    /* overflow: hidden; */
    box-shadow: #00000028 0px 10px 10px -4px;
    /* flex-shrink:1; */
  }
`

const BatchContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const BatchContainerSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: flex-start;
  text-align: center;
  color: white;
  height: 100%;
  position: absolute;
  top: 20px;
  right: -40px;
  z-index: 100000000;

  @media (max-width: 768px) {
    right: -30px;
    z-index: 100000000;
  }
`

const BatchCaseStudy = styled.div`
  background-color: #000000;
  color: #ffffff;
  min-width: 50px;
  padding: 9px 12px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 32px;
  font-size: 0.8rem;
  /* font-weight:700; */
  text-transform: lowercase;
  /* border: 1px solid #00000078; */

  border-radius: 100px;
  cursor: initial;

  font-weight: bold;
  font-size: 1rem;

  margin-right: 10px;
  /* box-shadow:#00000011 3px 3px 5px; */
`

const Batch = styled.div`
  background-color: #ffffff;
  color: #000000;
  min-width: 50px;
  padding: 5px 12px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 32px;
  font-size: 0.8rem;
  /* font-weight:700; */
  text-transform: lowercase;
  /* border: 1px solid #00000078; */
  border-radius: 100px;
  cursor: initial;
  /* box-shadow:#00000011 3px 3px 5px; */
`

const Transparent = styled.div`
  opacity: 50%;
`

const BatchLanguage = styled.div`
  background-color: #afafaf;
  color: #000000;
  min-width: 80px;
  padding: 3px 9px;
  margin: 2.5px 2.5px 2.5px 0px;
  display: inline;

  font-size: 0.7rem;
  text-transform: lowercase;
  text-align: center;
  border: 0px solid #f1f2f8;
  border-radius: 5px;
  cursor: initial;

  /* box-shadow:#00000011 3px 3px 5px; */
`

const BatchDemo = styled.div`
  background-color: #a8a8a8;
  color: #000;
  width: 100px;
  height: 30px;
  margin: 5px 0px;
  border-radius: 32px;
  font-size: inherit;
  border: 2px solid #a8a8a8;
  border-radius: 100px;
  cursor: initial;
  box-shadow: #00000011 3px 3px 5px;
  &:hover {
    transition: all 500ms ease-in-out;
    box-shadow: #f1f2f8 0px 0px 4px 4px;
    cursor: unset;
  }
`

const Card = styled.div`
  width: 100%;
  margin: 50px 0px;
  min-height: 300px;
  overflow: hidden;
  position:relative;
  
  display:flex;
  flex-direction:column;

  border-radius: 30px;
  /* background: #000000; */
  /* overflow: hidden; */
  box-shadow: 17px 17px 34px #dfdfdf, -17px -17px 34px #ffffff;
  /* box-shadow:  16px 16px 18px #cfcfcf,
             -16px -16px 18px #ffffff;  */

             &:hover {
    font-size: 1rem;
    

 
    ${Container} {
      transform: translateY(-100px);
      transition: all 500ms ease-in-out;
    }
     ${Actions} {
      /* transform: translateY(0px); */
      transition: all 500ms ease-in-out;
      bottom:0px;
     
    }
  }


  @media (max-width: 768px) {
    height: 100%;
  }
`



const CardLink = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 100000000;
  position: absolute;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.07) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

const SmallInfo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: black;
`

const CardContainer = styled.div`
  position:relative;
  transition: all 500ms ease-in-out;
`

function CaseStudy ({
  languages_topics,
  demolink,
  visible,
  mainimage,
  title,
  repoUrl,
  description,
  languages_progress,
  colorShema
}) {
  return (
    <>
      
      <CardContainer>
        <Card
          style={visible === false ? { opacity: '30%' } : { opacity: '100%' }}
        >
          {/* <CardLink /> */}
         
           
    

          <Container>
           
              {mainimage ? (
                <ContainerImage>
                  <div className="image"
                    style={{
                      backgroundImage: `url( ` + `"${mainimage}` + `" )`
                    }}
                   
                  />
                </ContainerImage>
              ) : (
                <img
                  className='portfolio-image'
                  src={'/images/no-image.jpg'}
                  alt=''
                />
              )}
            

            <Details>
              <div>
                <h3 className='portfolio-h3'>
                  {title[0] === '-' ? title.substr(1, title.length) : title}
                </h3>
                <Description>{description}</Description>
              </div>
              <div>
                <SmallInfo>
                  <BatchContainer>
                    {languages_topics
                      ? languages_topics.map((topics, key) => {
                          return (
                            <BatchCaseStudy key={key}>{topics} </BatchCaseStudy>
                          )
                        })
                      : null}
                  </BatchContainer>
                </SmallInfo>
              </div>
            </Details>
       
            
         
           
            </Container>

            <Actions>

            {repoUrl && <a target='_blank' href={repoUrl} rel='noreferrer'>
           <WhiteButton>Github Code</WhiteButton> </a> }
           
           {demolink && <a target='_blank' href={demolink} rel='noreferrer'>
           <WhiteButton>Live Demo</WhiteButton> </a> }
           
           </Actions> 
         
        </Card>
         <BatchContainerSide>
              {languages_progress
                ? Object.keys(languages_progress)
                    .sort()
                    .map((language, key) => {
                      return (
                        <BatchLanguage
                          style={{
                            backgroundColor: `${
                              colorShema[language.toLowerCase()]
                            }`
                          }}
                          key={key}
                        >
                          {language}
                        </BatchLanguage>
                      )
                    })
                : null}
            </BatchContainerSide>
            </CardContainer>
    
    </>
  )
}

export default ShowPortfolio
