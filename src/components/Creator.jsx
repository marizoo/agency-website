import React from 'react'
import styled from 'styled-components'
import { centerAll, columnThis, secondaryColor } from '../globalStyle'

const Container = styled.div`
width: 100vw;
height: 800px;
${centerAll};
`

const ImageContainer = styled.div`
flex: 1;
height: 100%;
background: linear-gradient(rebeccapurple, black);
`
const Image= styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const TextContainer = styled.div`
flex: 1;
height: 100%;
background: #dddddd;
${centerAll}
`
const TextWrapper = styled.div`
width: 70%;
height: 70%;
${columnThis};
justify-content: space-between;
`
const Title = styled.h2`
font-family: 'Satisfy', cursive;
font-size: 40px;
`

const Greetings = styled.h2`
font-weight: 500;
font-size: 30px;

`

const Desc = styled.p`
font-size: 18px;
`

const Button = styled.div`
background-color: ${secondaryColor};
padding: 10px;
color: white;
font-weight: 500;
width: 45%;
${centerAll};
`

const Creator = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="https://images.pexels.com/photos/6612272/pexels-photo-6612272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="hannah on laptop"/>
            </ImageContainer>
            <TextContainer>
                <TextWrapper>
                    <Title>The Creator</Title>
                    <Greetings>Hi there, We are Alex & Carmen</Greetings>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis vel esse sequi, id eos aperiam libero amet fugit iusto!
                    </Desc>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia, repellat sunt porro laudantium, laborum soluta commodi sint illum, ex voluptatibus ratione voluptatem autem assumenda!
                    </Desc>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis assumenda odio eum.
                    </Desc>
                    <Button>You had me at hello</Button>
                </TextWrapper>
            </TextContainer>
        </Container>
    )
}

export default Creator
