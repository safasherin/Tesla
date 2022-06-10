import React from 'react'
import styled from 'styled-components'
export default function Footer() {
    const FooterContainer = styled.div`
    display:flex;
    flex-wrap:wrap ;
    justify-content: center;
    align-items:center ;
    `
    const List = styled.div`
    margin:1rem;
    font-size:12px;
    color: #5C5E62;
    `
    return (
        <FooterContainer>
            <List>Tesla  &copy;2022</List>
            <List> Privacy & Legal</List>
            <List>Vehicle Recalls</List>
            <List>Contact</List>
            <List>Careers</List>
            <List>News</List>
            <List>Engage</List>
            <List>Location</List>
        </FooterContainer>
    )
}
