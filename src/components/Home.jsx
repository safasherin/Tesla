import React from 'react';
import styled from 'styled-components';
import Models from './Models/Models.jsx';

export default function Home() {

    const Home = styled.div`
    height:100vh ;
       scroll-snap-type:y mandatory ;
       overflow-y:scroll ;
      
       `
    return (
        <Home>
            <Models
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
                backgroundImg="M3.jpg"
                backgroundImgMobile="M3Mobile.jpg"
                dropDownExist
            />
            <Models
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
                backgroundImg="MY.jpg"
                backgroundImgMobile="MYMobile.jpg"
            />
            <Models
                title="Model S"
                desc="Order Online for Touchless Delivery"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
                backgroundImg="MS.jpg"
                backgroundImgMobile="MSMobile.jpg"
            />
            <Models
                title="Model X"
                desc="Order Online for Touchless Delivery"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
                backgroundImg="MX.jpg"
                backgroundImgMobile="MXMobile.jpg"
            />
            <Models
                title="Solar Panel"
                desc="Lower Cost Solar Panels in America"
                leftBtnText="order now"
                rightBtnText="learn more"
                backgroundImg="SP.jpg"
                backgroundImgMobile="SPMobile.jpg"
            />
            <Models
                title="Solar Roof"
                desc="Produce Clean energy from your roof"
                leftBtnText="order now"
                rightBtnText="learn more"
                backgroundImg="SR.jpg"
                backgroundImgMobile="SRMobile.jpg"
            />
            <Models
                title="Accessories"
                leftBtnText="shop now"
                backgroundImg="Accessories.jpg"
                backgroundImgMobile="AccessoriesMobile.jpg"
                footerSection
            />
        </Home>
    )
}
