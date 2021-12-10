import React from 'react'
import styled from 'styled-components'
import { mainColor, mobile } from '../globalStyle'

const Container = styled.div`
height: 30px;
width: 100vw;
background-color: ${mainColor};
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.div`
color: white;
`

const Announcement = () => {
    return (
        <Container>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim in fugiat praesentium quasi accusantium at!z</Text>
        </Container>
    )
}

export default Announcement
