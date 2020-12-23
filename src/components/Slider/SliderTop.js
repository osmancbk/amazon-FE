import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import p1 from '../../assets/1.jpg'
import p2 from '../../assets/2.jpg'
import p3 from '../../assets/3.jpg'
import p5 from '../../assets/5.jpg'
import p6 from '../../assets/6.jpg'
import p7 from '../../assets/7.jpg'



const Wrapper = styled.div`
width: 100%;
/* z-index: -1; */
position: absolute;
  top: 59px;

`;

const Page = styled.div`
 width: 100%;
  margin-bottom: -90px;
  mask-image: linear-gradient(to top, transparent 20%, black 55%);
 
`;


export default function SliderTop() {

    return (

        <Wrapper>
            <Slider
                infinite={false}
                // lazyLoad= {false}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
            // dots={true}
            // accessibility = {true}
            // arrows = {true}
            >
                <Page><img src={p1} alt="Logo" /></Page>
                <Page><img src={p2} alt="Logo" /></Page>
                <Page><img src={p3} alt="Logo" /></Page>
                <Page><img src={p5} alt="Logo" /></Page>
                <Page><img src={p6} alt="Logo" /></Page>
                <Page><img src={p7} alt="Logo" /></Page>
               
            </Slider>
        </Wrapper>
  
    )


}
