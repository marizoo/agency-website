import React from 'react'
import styled from 'styled-components'
import { centerAll, columnThis, mainColor, secondaryColor } from '../globalStyle'

const Container = styled.div`
width: 100vw;
height: 800px;
${centerAll}
`

const Wrapper = styled.div`
width: 850%;
height: 80%;
${columnThis};
align-items: center;
justify-content: space-between;
`

const Title = styled.h2`
font-family: 'Satisfy', cursive;
font-size: 40px;
`

const CardContainer = styled.div`
width: 100%;
height: 100%;
${centerAll};
`

const Card = styled.div`
width: 18%;
height: 90%;
${columnThis}
justify-content: center;
align-items: center;
margin-right: 25px;
background-color: ${props => props.color}
`

const TitleLink = styled.div`
flex: 2;
width: 100%;
display:flex;
justify-content: center;
align-items: flex-end;
font-size: 18px;
text-decoration: underline;
color: gray;
`

const Desc = styled.div`
flex: 5;
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: 21px;
`

const ImageContainer = styled.div`
flex: 5;
width: 100%;
background-color: lightblue;
position: relative;
`

const Image = styled.img`
height: 85%;
width: 100%;
object-fit: cover;

`

const ImageDesc = styled.p`
height: 15%;
width: 100%;
background-color: ${props => props.bg};
color: white;
${centerAll};
position: absolute;
bottom: 0;
`

const Button = styled.button`
margin-top: 50px;
background-color: ${mainColor};
padding: 12px;
color: white;
font-weight: 500;
${centerAll};
font-size: 14px;
`

const Popular = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Popular Posts</Title>
                <CardContainer>
                    <Card color="#ddd">
                        <TitleLink>call us</TitleLink>
                        <Desc>
                            Lorem ipsum dolor sit amet constur adipis elit. Officia.
                        </Desc>
                        <ImageContainer >
                            <Image src="" alt="image of the card" />
                            <ImageDesc bg="#7d7d7d">love lollipops</ImageDesc>
                        </ImageContainer>
                    </Card>
                    <Card color="#a38b04">
                        <TitleLink>call us</TitleLink>
                        <Desc>
                            Lorem ipsum  sit amet consectetur adipisicing elit. Officia.
                        </Desc>
                        <ImageContainer>
                            <Image src="" alt="image of the card" />
                            <ImageDesc bg="black">love lollipops</ImageDesc>
                        </ImageContainer>
                    </Card>
                    <Card color="#ddd">
                        <TitleLink>call us</TitleLink>
                        <Desc>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </Desc>
                        <ImageContainer>
                            <Image src="" alt="image of the card" />
                            <ImageDesc bg="#7d7d7d">love lollipops</ImageDesc>
                        </ImageContainer>
                    </Card>
                    <Card color="#7d7d7d">
                        <TitleLink>call us</TitleLink>
                        <Desc>
                            Lorem dolor sit amet consectetur adipisicing elit. Officia.
                        </Desc>
                        <ImageContainer>
                            <Image src="" alt="image of the card" />
                            <ImageDesc bg="#a38b04">love lollipops</ImageDesc>
                        </ImageContainer>
                    </Card>
                </CardContainer>
                <Button>Contact us now</Button>
            </Wrapper>
        </Container>
    )
}

export default Popular
