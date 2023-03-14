import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trustendimg from '../assets/svgs/trustend-1.svg'
import { Autoplay } from 'swiper';
export default function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000,
      pauseOnHover:true
    };
    return (
      
     <div className="trustend">
         <Slider {...settings}>
        <div>
          <img src={trustendimg} alt="" />
        </div>
        <div>
        <img src={trustendimg} alt="" />
        </div>
        <div>
        <img src={trustendimg} alt="" />
        </div>
        <div>
        <img src={trustendimg} alt="" />
        </div>
        <div>
        <img src={trustendimg} alt="" />
        </div>
        <div>
        <img src={trustendimg} alt="" />
        </div>
      </Slider>
     </div>
    );
  }