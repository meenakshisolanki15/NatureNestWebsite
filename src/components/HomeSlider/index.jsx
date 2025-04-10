import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay} from 'swiper/modules';


const HomeSlider =()=> {
  return (
    <div className='homeSlider py-5'>
        <div className='container'>
        <Swiper 
        loop={true}
        spaceBetween={20}
        navigation={true} 
        modules={[Navigation, Autoplay]} 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="sliderHome">
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src="/one.png" 
            alt="Banner slide" className="w-full h-[300px]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src="https://indocert.org/wp-content/uploads/2024/10/2.png" 
            alt="Banner slide" className="w-full h-[300px]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src="https://ukdigital.in/wp-content/uploads/wpforo/default_attachments/1652250313-pahadi-dal-banner-1024x368.png" 
            alt="Banner slide" className="w-full h-[300px]"/>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src="https://www.naario.com/cdn/shop/articles/Resized_Perspective_Millets-in-I.jpg?v=1711951876" 
            alt="Banner slide" className="w-full h-[300px]"/>
            </div>
        </SwiperSlide>
        
        
        
      </Swiper>
        </div>
    </div>
  )
}
export default HomeSlider;
