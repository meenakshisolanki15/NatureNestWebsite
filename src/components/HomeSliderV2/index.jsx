import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const HomeSliderV2 = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='item w-full !rounded-md !overflow-hidden'>
                        <img src="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden'>
                        <img src="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden'>
                        <img src="/one.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden'>
                        <img src="https://ukdigital.in/wp-content/uploads/wpforo/default_attachments/1652250313-pahadi-dal-banner-1024x368.png" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>



    );
};


export default HomeSliderV2