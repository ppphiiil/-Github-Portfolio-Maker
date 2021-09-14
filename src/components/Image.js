import React from 'react'
import styled from "styled-components"

export default function Image( props ) {
    const Container = styled.div`
    
    width:100%;
    height:100%;
    display:flex;
    justify-Content:center;
    align-items:center;
    border-Radius: 32px;
    background-position: center;
    `
    return (
        <Container style={ props.visible === false ? { opacity: "30%" } : { opacity: "100%" } }>
            <Container style={ {
                backgroundImage: `url(` + `"${props.data.image}` + `")`,

            } }>
            </Container>
        </Container>
    )
}
