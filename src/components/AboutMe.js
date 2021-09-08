import React from 'react';
import styled from 'styled-components';
import portrait from '../aboutme/phil.jpg';
import { mail } from "../testdata"

export default function AboutMe( props ) {

    console.log( props.visible );


    const Container = styled.div`
    
        display:flex;
        flex-direction:column;
        align-items:left;
        justify-content:flex-start;
        background-image:url("images/phil-big.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 40px;
        border-Radius: 32px;
        box-shadow:transparent 10px 10px 0px 2px inset;
        height: 100%;
        position:relative;
        letter-spacing: 0.5px;
        width:100%;  
        
        img{
            display: none;
            width: 150px;
            height:150px; 
            border-radius:100px;
            margin-bottom:20px;
        }
        
        @media screen and (max-width: 767px) {
            background-image:none;
            background-color: #fff;
            div > img{
                    display:block;           
            }
            }

        
        &:hover{
            transition: all 500ms ease-in-out;
            box-shadow:transparent 0px 0px 0px 10px inset;  
        }
      `;

    const Flex = styled.div`
       display:flex;
       justify-content:space-between;

       // all under 481 smartphone
        @media screen and (max-width: 767px) {
            flex-direction:column;
            align-items:flex-start;
            height:100%;

        }
        `;

    const Text = styled.div`
        width:45%;

        // all under 481 smartphone
        @media screen and (max-width: 767px) {
            width:100%;
        }
        `;

    const Button = styled.div`
        background-color:#fff;
      
        height:max-content;
        cursor: pointer;
        font-size:inherit;
        text-align: left;
    
        border: 2px solid #F1F2F8;
        border-radius: 100px;
        padding:5px 30px;
    
    &:hover{
         transition: all 500ms ease-in-out;
         box-shadow:#F1F2F8 0px 0px 4px 4px ;
    
      }
       
         `;

    return (
        <Container style={ props.visible === false ? { opacity: "30%" } : { opacity: "100%" } }>
            <Flex>
                <img src="images/phil.jpg" alt="" />
                <Button>
                    <a href={ `mailto:${mail}` }>Contact me</a>
                </Button>
                <Text><div><h1>{ props.data.title }</h1><p>{ props.data.longDescription }</p></div></Text>
            </Flex>
        </Container>
    );
}
