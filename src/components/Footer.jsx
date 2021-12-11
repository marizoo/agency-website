import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { centerAll, columnThis, mainColor } from '../globalStyle'

const Container = styled.div`
height: 450px;
width: 100vw;
background-color: ${mainColor};
${centerAll};
`

const Wrapper = styled.div`
width: 60%;
height: 70%;
color: white;
${columnThis};
align-items: center;
`

const Title = styled.h2`
font-family: 'Satisfy', cursive;
font-size: 40px;
margin-bottom: 40px;
`

const Links = styled.div`
font-weight: 300;
width: 60%;
text-align: center;
letter-spacing: 5px;
cursor: pointer;
`

const IconContainer = styled.div`
margin: 30px 0;
`

const iconStyle = {
    marginLeft: "15px"
}

const CopyrightText = styled.span`
margin-bottom: 20px;
font-weight: 300;
`

const CopyrightSpan = styled.span`
cursor:pointer;
text-decoration: underline;
letter-spacing: 2px;
`

const LocationText = styled.span`
letter-spacing: 2px;
font-weight: 300;

`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Flourish Collective</Title>
                <Links>SEARCH | CONTACT | PURCHASE | SERVICE</Links>
                <IconContainer>
                    <Instagram style={iconStyle}/>
                    <Facebook style={iconStyle}/>
                    <Pinterest style={iconStyle}/>
                    <Twitter style={iconStyle}/>
                </IconContainer>
                <CopyrightText>All rights reserved &copy; Flourish collections 2022. <CopyrightSpan>Contact Us</CopyrightSpan></CopyrightText>
                <LocationText>179 Dixie Chicks Land, Missouri. USA. </LocationText>
            </Wrapper>
        </Container>
    )
}

export default Footer
