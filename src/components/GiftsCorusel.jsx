import React from 'react'
import giftimg1 from '../assets/svgs/gift-1.svg'
import giftimg2 from '../assets/svgs/gift-2.svg'
import giftimg3 from '../assets/svgs/gift-3.svg'

  import giftimg4 from '../assets/images/g-4.jpg'
 import giftimg5 from '../assets/images/g-2.jpg'
 import giftimg6 from '../assets/images/g-3.jpg'
 import giftimg7 from '../assets/images/g-6.jpg'
import{Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from 'swiper';

const GiftsCorusel = () => {
    
  return (
    <>
    <div className='gift-carusel' >

        <h3>Useful articles</h3>
       <h2>Top Tips for Choosing Expensive Gifts</h2>  
<Swiper className='carusel' 
effect={'coverflow'}
grabCursor={true}
centereSlides={true}
slidesPerView={'auto'}
coverflowEffect={{
     rotate:50,
     stretch:0,
    depth:100,
     modifier:1,
     slideShadows:false
    
}}
breakpoints={{
    420:{
        slidesPerView:1,
    },
    500:{
        slidesPerView:1,
    },
    640:{
        slidesPerView:2,
        spaceBetween:20,
    },
    768:{
        slidesPerView:4,
        spaceBetween:40,
    },
    1024:{
        slidesPerView:5,
        spaceBetween:50,
    },
    1400:{
        slidesPerView:4,
        spaceBetween:40,  
    },
}}
pagination={true}
modules={[EffectCoverflow,Pagination]}

         >
                                        
    <SwiperSlide >
        <img src={giftimg1} alt="" className='swiper-img' />
    </SwiperSlide>
    <SwiperSlide  >
    <img src={giftimg2} alt="" className='swiper-img'/>
    </SwiperSlide>
    <SwiperSlide >
    <img src={giftimg3} alt=""className='swiper-img' />
    </SwiperSlide>
    <SwiperSlide >
    <img src={giftimg4} alt="" className='swiper-img' />
    </SwiperSlide>
   
    <SwiperSlide >
    <img src={giftimg5} alt="" className='swiper-img' />
    </SwiperSlide>
   
   
     <SwiperSlide >
    <img src={giftimg6} alt=""  className='swiper-img'/>
    </SwiperSlide>
    <SwiperSlide >
        <img src={giftimg7} alt="" className='swiper-img' />
    </SwiperSlide>
    <SwiperSlide >
    <img src={giftimg2} alt="" className='swiper-img' />
    </SwiperSlide>
    <SwiperSlide >
    <img src={giftimg3} alt=""className='swiper-img'  />
    </SwiperSlide>
    <SwiperSlide >
    <img src={giftimg1} alt="" className='swiper-img' />
    </SwiperSlide>
   
    <SwiperSlide >
    <img src={giftimg2} alt="" className='swiper-img'  />
    </SwiperSlide>
   
   
    <SwiperSlide  >
    <img src={giftimg3} alt="" className='swiper-img'  />
    </SwiperSlide>
   
     
    
    </Swiper>
    
    </div>
    
    </>
  )
}

export default GiftsCorusel