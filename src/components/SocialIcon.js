import React from 'react'
import styled from 'styled-components'

export default function SocialIcon (props) {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
  `
  return (
    <a target='_blank' href={props.data.link}>
      <Container
        style={
          props.visible === false ? { opacity: '30%' } : { opacity: '100%' }
        }
      >
        <Container style={{ backgroundColor: `${props.data.color}` }}>
          <img src={props.data.icon} alt='github' />
        </Container>
      </Container>
    </a>
  )
}
