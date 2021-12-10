import React from 'react'
import styled from 'styled-components'
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const Container = styled.div`
height: 700px;
width: 100vw;
display: flex;
flex-direction: column;
`

const Top = styled.div`
height: 20%;
background-color: pink;
`

const TitleContainer = styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: flex-end; 
`

const Title = styled.h2`
letter-spacing: 1px;
`

const Bottom = styled.div`
height: 80%;
background-color: lightblue;
display: flex;
justify-content: space-around;
align-items: center;
`

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const CardIcon = styled.div``

const iconStyle = {
    fontSize: "100px",
}

const CardTitle = styled.div``

const Desc = styled.div``

const Button = styled.div``

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
                    <CardIcon>
                        <WbIncandescentOutlinedIcon style={iconStyle}/>
                    </CardIcon>
                    <CardTitle>Build</CardTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis suscipit dolor fuga ut inventore minus modi error ab neque reiciendis!
                    </Desc>
                    <Button>Show me the money!</Button>
                </Card>
                <Card>
                    <CardIcon>
                        <EventOutlinedIcon style={iconStyle}/>
                    </CardIcon>
                    <CardTitle>Launch</CardTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis suscipit dolor fuga ut inventore minus modi error ab neque reiciendis!
                    </Desc>
                    <Button>Show me the money!</Button>
                </Card>
                <Card>
                    <CardIcon>
                        <ThumbUpAltOutlinedIcon style={iconStyle}/>
                    </CardIcon>
                    <CardTitle>Grow</CardTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis suscipit dolor fuga ut inventore minus modi error ab neque reiciendis!
                    </Desc>
                    <Button>Show me the money!</Button>
                </Card>
            </Bottom>
        </Container>
    )
}

export default Process
