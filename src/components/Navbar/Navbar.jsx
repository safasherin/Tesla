import React, { useState } from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    }
    const NavbarContainer = styled.nav`
        z-index:1 ;
        min-height:10vh;
        font-family: "Gotham-Font";
        color:#171A20;
        display:flex ;
        justify-content:space-between;
        align-items:center;
        position:fixed ;
        top:0;
        left:0;
        right:0;
        padding: 0 3rem;
        img{
            width:7rem;
            height:1rem ;
        }
        @media screen and (max-width:600px){
            padding-left: 1rem;
    }
    `

    const NavbarListLeft = styled.div`
        display:flex;
        a{
            padding: 0.5rem 1rem;
            color:#171A20;
            font-size:14px;
            &:hover{
            color:#3f3f40;
            background-color:#b6b7dd;
            border-radius: 10rem ;
            transition: background-color 0.3s linear ;
        }
        }
        @media screen and (max-width:1200px){
        display:none;
    }
    `
    const NavbarListRight = styled.div`
    display:flex ;
    
    a{
            padding: 0.5rem 1rem;
            color:#3f3f40;
            font-size:14px;
            &:hover{
            color:#3f3f40;
            background-color:#b6b7dd;
            border-radius: 10rem ;
            transition: background-color 0.3s linear ;
            }
    }
    @media screen and (max-width:1200px){
        display:none;
    }  
    `

    const MenuItems = styled.div`
     list-style-type:none ;
     position: fixed;
     top:0;
     bottom:0 ;
     right:0 ;
     background-color:white ;
     width: 18rem;
     transition: all 1s ease-out;
     z-index:16;
     overflow-y:scroll ;
     a{
        color:#85858a;
         
     };
     li{
        padding:0.5rem ;
        margin: 0.5rem 0rem;
      font-size: 14px;
      &:hover{
            color:#3f3f40;
            background-color:#0000000d;
            border-radius: 10rem ;
            transition: background-color 0.3s linear ;
            }
     }
 `

    const ListWrapper = styled.div`
       padding:1rem 2rem ;
      
       @media screen and (min-width:1200px){
        .models{
           display:none;
        }
  
       }
     
    `
    const CustomClose = styled(CloseIcon)`
   cursor: pointer;
    color:#85858a;
     
    `
    const IconWrapper = styled.div`
     padding: 25px 25px 10px;
    display: flex;
     justify-content:flex-end ;
    `

    const SmallNavbarListRight = styled.div`
        display:none;
        @media screen and (max-width:1200px){
     display:inline ;
     /* margin-right:2rem; */
     }
    `
    const Button = styled.button`
    border: none;
    padding:0.5rem 1.5rem;
    border-radius: 1rem;
    background-color:#0000000d ;
    `

    return (
        <NavbarContainer
            style={{ filter: open ? "blur(3px)" : "none" }}
        >
            <a href="www.google.com">
                <img className='brandClass' src="/images/teslaLogoSmall.svg" alt="img" />
            </a>
            <NavbarListLeft>
                <a href="www.google.com"> Model S</a>
                <a href="www.google.com"> Model 3</a>
                <a href="www.google.com"> Model X</a>
                <a href="www.google.com"> Model Y</a>
                <a href="www.google.com"> Solar Roof</a>
                <a href="www.google.com"> Solar Panels</a>
            </NavbarListLeft>
            <NavbarListRight>
                <a href="www.google.com"> Shop</a>
                <a href="www.google.com"> Account</a>
                <a href="www.google.com" onClick={toggleDrawer}> Menu</a>
            </NavbarListRight>
            <SmallNavbarListRight>
                <Button onClick={toggleDrawer}> Menu
                </Button>
                <Drawer
                    anchor="right"
                    open={open}
                >
                    <MenuItems >
                        <IconWrapper>
                            <CustomClose onClick={toggleDrawer} />
                        </IconWrapper>
                        <ListWrapper>
                            <li className='models' ><a href="www.google.com">Model S</a></li>
                            <li className='models' ><a href="www.google.com">Model 3</a></li>
                            <li className='models' ><a href="www.google.com">Model X</a></li>
                            <li className='models' ><a href="www.google.com">Model Y</a></li>
                            <li className='models' ><a href="www.google.com"> Solar Roof </a></li>
                            <li className='models' ><a href="www.google.com">Solar Panels</a></li>
                            <li><a href="www.google.com">Existing Inventory</a></li>
                            <li><a href="www.google.com">Used Inventory</a></li>
                            <li><a href="www.google.com">Trade In</a></li>
                            <li><a href="www.google.com">Test Drive</a></li>
                            <li><a href="www.google.com">Insurance</a></li>
                            <li><a href="www.google.com">Cybertruck</a></li>
                            <li><a href="www.google.com">Roadster</a></li>
                            <li><a href="www.google.com">Semi</a></li>
                            <li><a href="www.google.com">Charging</a></li>
                            <li><a href="www.google.com">Powerwall</a></li>
                            <li><a href="www.google.com">Commercial Energy</a></li>
                            <li><a href="www.google.com">Find us</a></li>
                            <li><a href="www.google.com">Utilities</a></li>
                            <li><a href="www.google.com">Support</a></li>
                            <li><a href="www.google.com">Investor Relations</a></li>
                        </ListWrapper>
                    </MenuItems>
                </Drawer>
            </SmallNavbarListRight>
        </NavbarContainer>
    )
}
