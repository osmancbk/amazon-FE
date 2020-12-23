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
margin-top: 20;
width: 50;
max-height: 50;
/* z-index: -1; */
/* position: absolute; */
  /* top: 59px; */

`;

const StyledImage = styled.img`
width: auto;
height: 76%;
object-fit: contain;
/* border-radius: 50%; */
position: relative;
`;

const Page = styled.div`
 width: 50;
 height: 50;

  /* margin-bottom: -90px; */
  /* mask-image: linear-gradient(to top, transparent 20%, black 55%); */
 
`;



export default function SliderTop() {

    return (

        <Wrapper>
            <Slider
            //   dots = {true}
              infinite = {true}
            //   speed = {300}
              slidesToShow = {5}
            //   centerMode = {true}
                // infinite={false}
                // lazyLoad= {true}
                // speed={500}
                // slidesToShow={3}
                slidesToScroll={3}
            // dots={true}
            // accessibility = {true}
            arrows = {true}
            >

                <Page><StyledImage src={p1} alt="Logo" /></Page>
                <Page><StyledImage src={p2} alt="Logo" /></Page>
                <Page><StyledImage src={p3} alt="Logo" /></Page>
                <Page><StyledImage src={p5} alt="Logo" /></Page>
                <Page><StyledImage src={p6} alt="Logo" /></Page>
                <Page><StyledImage src={p7} alt="Logo" /></Page>
               
            </Slider>
        </Wrapper>
  
    )


}
