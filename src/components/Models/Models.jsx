import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/Footer';

export default function Models({ title, desc, leftBtnText, rightBtnText, backgroundImg, backgroundImgMobile, dropDownExist, footerSection }) {
    // console.log(backgroundImg)
    const Wrap = styled.section`
        background-image: ${props =>
            `url(/images/${props.bgImg})`
        };  
        background-position:center;
        background-size:cover ;    
        background-repeat:no-repeat ;
        min-height:100vh ;
        font-family: "Gotham-Font";
        display:flex ;
        flex-direction:column ;
        justify-content: space-between;
        align-items:center ;
     scroll-snap-align:start;
     @media screen and (max-width:568px){
        background-image: ${props =>
            `url(/images/${props.bgImgMobile})`
        };
     }      
    `

    const TextItem = styled.div`
        padding-top:15vh ;
        text-align:center ;
        h1{
            font-size:2.5rem ;
            font-weight:500 ;
            margin:0 ;
        }
        p{
            margin:0 ;
            /* font-weight:300 ; */
            padding: 1rem ;
            color:#3f3f40;
            font-size:14px ;
        }
      
    `

    const ButtonGroup = styled.div`
       text-transform:uppercase;
        margin-bottom:1rem;
        display:flex;  
        justify-content:space-between ;
        @media screen and (max-width:745px){
            flex-direction:column ;  
            overflow:hidden ;
        }
    `

    const LeftButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17rem;
        height:2.5rem ;
        color:white;
        background-color:#171a20cc ;
        border-radius:5rem ;
        font-size: 12px;
        margin-right:1.5rem;
        margin-top: 26rem;
    @media screen and (max-width:745px){
           flex-direction:column ;
           margin: 0;
     }   
    `
    const RightButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17rem;
        height:2.5rem ;
        color:#171a20cc;
        background-color: white;
        border-radius:5rem ;
        font-size: 12px;
        margin-top: 26rem;
    @media screen and (max-width:745px){
        font-size: 12px;
        margin:1rem 0;
    } 
    `

    const DownArrow = styled.img`
   width:2vw;
   height:2vh ;
   cursor: pointer;
   animation:animateDown 1.5s  infinite;
   @media screen and (max-width:745px){ 
     margin:2rem 0;
     }
    `

    const Buttons = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom:5rem ;
    @media screen and (max-width:745px){
        margin-bottom: 0;
    }
    `

    return (
        <Wrap
            bgImg={backgroundImg}
            bgImgMobile={backgroundImgMobile}
        >

            <TextItem>
                <Fade bottom >
                    <h1>
                        {title}
                    </h1>
                </Fade>

                {
                    desc &&
                    <Fade bottom delay={800}>
                        <p>
                            {desc}
                        </p>
                    </Fade>
                }

            </TextItem>
            <Buttons>
                <ButtonGroup>
                    <Fade left delay={800} >
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    </Fade>

                    {rightBtnText &&
                        <Fade right delay={800}>
                            <RightButton >
                                {rightBtnText}
                            </RightButton>
                        </Fade>
                    }
                </ButtonGroup>
                {
                    dropDownExist &&
                    <DownArrow src="/images/down-arrow.svg">
                    </DownArrow>
                }
            </Buttons>
            {
                footerSection &&
                <Footer />
            }
        </Wrap >
    )
}
