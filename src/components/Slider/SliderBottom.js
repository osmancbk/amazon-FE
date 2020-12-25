import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Wrapper, StyledImage, Page } from './SliderBottom.style';
import './SliderBottom.css';

import p1 from '../../assets/a.jpg'
import p2 from '../../assets/b.jpg'
import p3 from '../../assets/c.jpg'
import p5 from '../../assets/d.jpg'
import p6 from '../../assets/e.jpg'
import p7 from '../../assets/f.jpg'
import p8 from '../../assets/g.jpg'
import p9 from '../../assets/h.jpg'



export default function SliderTop() {
  
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
  };



    return (

        <Wrapper>
            <Slider {...settings}
           // infinite = {true}
            // slidesToShow = {5}
            // speed={900}
             // slidesToScroll={3}
            // arrows = {true}

            //   dots = {true}
            //   speed = {300}
            //   centerMode = {true}
            // infinite={false}
            // lazyLoad= {true}
            // slidesToShow={3}
            // dots={true}
            // accessibility = {true}
   
            >

                <Page><StyledImage src={p1} alt="Logo" /></Page>
                <Page><StyledImage src={p2} alt="Logo" /></Page>
                <Page><StyledImage src={p3} alt="Logo" /></Page>
                <Page><StyledImage src={p5} alt="Logo" /></Page>
                <Page><StyledImage src={p6} alt="Logo" /></Page>
                <Page><StyledImage src={p7} alt="Logo" /></Page>
                <Page><StyledImage src={p8} alt="Logo" /></Page>
                <Page><StyledImage src={p9} alt="Logo" /></Page>


               
            </Slider>
        </Wrapper>
  
    )


}
