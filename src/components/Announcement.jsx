import React from 'react'
import styled from 'styled-components'
import { mainColor, mobile } from '../globalStyle'

const Container = styled.div`
height: 40px;
width: 100vw;
background-color: ${mainColor};
display: flex;
justify-content: space-between;
align-items: center;
`

const TextContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.p`
color: white;
font-weight: 300;
letter-spacing: 1px;
`

const Close = styled.div`
justify-self: end;
height: 100%;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: #4e4e4e;
color: white;
padding-right: 8px;
cursor: pointer;
font-weight: 200;
`

const Announcement = () => {
    return (
    
        <Container>
            <TextContainer>
                <Text>Lorem ipsum dolor. Enim in fugiat praesentium quasi accusantium at!z</Text>
            </TextContainer>
            <Close>x</Close>
        </Container>
    
    )
}

export default Announcement
