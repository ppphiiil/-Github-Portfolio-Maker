import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom"
//import image1 from "../caseStudies/ikea/ikea.png"

export default function CaseStudy( props ) {
  console.log( "into casestudy" );
  console.log( 'props.data.batches.languages', props.data.batches.languages );


  const ContainerImage = styled.div`
  width:100%;
  height:100%;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  border-radius: 32px;
  transform: translateY(0px); 
  transition: all 500ms ease-in-out;
  `

  const ContainerDetails = styled.div`
  font-weight: 600;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color:white;
  width:100%;
  height:30px;
  position: absolute;
  top:100%;
  border-bottom-left-radius:32px;
  border-bottom-right-radius:32px;
  transition: all 500ms ease-in-out;
  `



  const Container = styled.div`
 
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius: 32px;
  border:0px solid green;
  width:100% ;
  height: 100%;
  position:relative;
  overflow: hidden;


   &:hover{
      font-size:1rem; 
      overflow: hidden;
  
    ${ContainerDetails} {
      transform: translateY(-30px);
      transition: all 500ms ease-in-out;
  }
    ${ContainerImage}{
      display:block;
      border-bottom-left-radius:0px;
      border-bottom-right-radius:0px;
      transform: translateY(-30px); 
      transition: all 500ms ease-in-out;
    
    }
  }

  `;


  const BatchContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: center;

  color: white;
  height: 100%;

  position: absolute;
  top:0px;
  right: -10px;
 
  `


  const Batch = styled.div`

  background-color:#fff;
  color: black;
  width: 80px;
  height: 30px;
  margin: 5px 0px;

  border-radius: 32px;
  font-size: inherit;


  border: 2px solid #F1F2F8;
  border-radius: 100px;
  cursor: initial;
  box-shadow:#00000011 3px 3px 5px;

  `;



  const BatchDemo = styled.div`
  background-color:#a8a8a8;
  color:#000;
  width: 100px;
  height: 30px;
  margin: 5px 0px;

  border-radius: 32px;
  font-size: inherit;


  border: 2px solid #a8a8a8;
  border-radius: 100px;
  cursor: initial;
  box-shadow:#00000011 3px 3px 5px;
    
     &:hover{
    transition: all 500ms ease -in -out;
    box-shadow:#F1F2F8 0px 0px 4px 4px;
    cursor: unset;
  }
  `;


  return (

    // <NavLink to={ `/ casestudy / ${ props.data.name } ` }>
    <>
      <a target="_blank" href={ props.data.demolink }>
        <Container style={ props.visible === false ? { opacity: "30%" } : { opacity: "100%" } }>
          <ContainerImage style={ { backgroundImage: `url( ` + `"${props.data.mainImage}` + `" )` } } />
          <ContainerDetails>{ props.data.title }</ContainerDetails>
        </Container>
        <BatchContainer
          style={ props.visible === false ? { opacity: "30%" } : { opacity: "100%" } }>
          { props.data.batches.languages.map( ( language ) => {
            return <Batch  >{ language }</Batch>
          } ) }
          {/* <BatchDemo  ><a href={ props.data.demolink }>Live Demo</a></BatchDemo> */ }
        </BatchContainer>
      </a>
    </>
    // </NavLink>
  );
}