import React from 'react'
import styled from 'styled-components'
import { secondaryColor } from '../globalStyle'

const Container = styled.div`
width: 100vw;
height: 600px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const HeroImg = styled.img`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
position: relative;
filter: brightness(50%);

/* dont think this work */
/* &::before {
position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), #020230);
  top: 0;
  left: 0;
} */
` 


const TextContainer = styled.div`
position: absolute;
width: 35%;
height: 45%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 3;
`

const H2 = styled.h2`
color: white;
text-align: center;
line-height: 50px;
font-weight:600;
letter-spacing: 1px;
`

const Button = styled.div`
font-weight:600;
margin-top: 10px;
background-color: ${secondaryColor};
padding: 15px;
color: white;
border:none;
`

const Hero = () => {
    return (
        <Container>
        <HeroImg src="https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="hero image"/> 
            <TextContainer>
                <H2>
                    Want to turn your passion project into a
                    profitable, creative business?
                </H2>
                <Button>Contact us for more information</Button>
            </TextContainer>
        </Container>
    )
}

export default Hero
