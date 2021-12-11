import React from 'react'
import styled from 'styled-components'
import {mainColor, secondaryColor} from '../globalStyle'
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { pink } from '@material-ui/core/colors';

const Container = styled.div`
height: 700px;
width: 100vw;
display: flex;
flex-direction: column;
`

const Top = styled.div`
height: 20%;
display: flex;
flex-direction: center;
align-items: center;
`

const TitleContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end; 

`

const Title = styled.h2`
letter-spacing: 1px;
max-width: 40%;
text-align:center;
`

const Bottom = styled.div`
height: 80%;
display: flex;
justify-content: center;
align-items: center;
`

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 0 15px;
width: 20%;
height: 90%;
padding: 20px;
`

const CardIcon = styled.div`
transform: ${props => (props.isTurn ? "rotate(180deg)" : "")};

`

const iconStyle = {
    fontSize: "100px",
    color: "#8a7500",
    fontWeight: "200"
   
}

const CardTitle = styled.h2`
font-size: 40px;
font-family: 'Satisfy', cursive;

`

const Desc = styled.p`
text-align: center;
font-size: 18px;
`

const Button = styled.div`
background-color: ${mainColor};
padding: 10px;
color: white;
font-weight: 500;
`

const Process = () => {
    return (
        <Container>
            <Top>
                <TitleContainer>
                    <Title>
                        We help makers build + launch businesses that
                        they love (and make them money tool)
                    </Title>
                </TitleContainer>
                
            </Top>
            <Bottom>
                <Card>
                    <CardIcon isTurn={true}>
                        <WbIncandescentOutlinedIcon style={iconStyle}/>
                    </CardIcon>
                    <CardTitle>Build</CardTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.consectetur adipisicing elit. Quis suscipit dolor fuga ut inventore minus modi error ab neque reiciendis!
                    </Desc>
                    <Button>Show me the money!</Button>
                </Card>
                <Card>
                    <CardIcon>
                        <EventOutlinedIcon style={iconStyle}/>
                    </CardIcon>
                    <CardTitle>Launch</CardTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis suscipit dolor fuga ut inventore minus modi error ab neque reiciendis! Lorem, ipsum dolor.
                    </Desc>
                    <Button>Show me the money!</Button>
                </Card>
                <Card>
                    <CardIcon>
                        <ThumbUpAltOutlinedIcon style={iconStyle}/>
                    </CardIcon>
                    <CardTitle>Grow</CardTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.Quis suscipit dolor fuga ut inventore minus modi error ab neque reiciendis!
                    </Desc>
                    <Button>Show me the money!</Button>
                </Card>
            </Bottom>
        </Container>
    )
}

export default Process
