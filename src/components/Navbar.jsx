
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 120px;
width: 100vw;
background-color: #e4e1e1;
display: flex;
justify-content: center;
align-items: center;
`

const MenuContainer = styled.div`
width: 85%;
display: flex;
justify-content: center;
align-items: center;
`

const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
margin-left: 200px;
`

const Li = styled.li`
margin-right: 25px;
cursor: pointer;
`

const Logo = styled.span`
font-family: 'Satisfy', cursive;
font-size: 50px;
color: #aa6b77;
`
const CartContainer = styled.div`
width: 15%;
display: flex;
justify-content: center;
align-items: center;
`

const IconContainer = styled.div`
position: relative;
height: 40px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
`

const cartIcon = {
    fontSize: "30px"
}


const Badge = styled.div`
position: absolute;
top: -5px;
right: -5px;
width: 18px;
height: 18px;
border-radius: 50%;
background-color: #383838;
display: flex;
justify-content: center;
align-items: center;
color: white;
`

const Navbar = () => {
    return (
        <Container>
            <MenuContainer>
                <Ul>
                    <Li>About</Li>
                    <Li>Projects</Li>
                    <Li>Blog</Li>
                    <Li><Logo>Flourish Collective</Logo></Li>
                    <Li>Photos</Li>
                    <Li>Design</Li>
                    <Li>Services</Li>
                </Ul>
            </MenuContainer>
            <CartContainer>
                <IconContainer>
                    <ShoppingCartOutlinedIcon style={cartIcon}/>
                    <Badge>3</Badge>
                </IconContainer>
            </CartContainer>
        </Container>
    )
}

export default Navbar
