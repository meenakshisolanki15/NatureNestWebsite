import React, { useRef } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export const ProductZoom = (props) => {
    const zoomSliderBig = useRef();

    return (
        <>
            <div className="zoomContainer w-full max-w-[500px] h-[500px] mx-auto flex items-center justify-center overflow-hidden">
                <Swiper
                    ref={zoomSliderBig}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    className="w-full h-full"
                >
                    {props?.images?.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center">
                                <InnerImageZoom
                                    zoomType="hover"
                                    zoomScale={1}
                                    src={item}
                                    className="max-h-[100%] max-w-[100%] object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
};
