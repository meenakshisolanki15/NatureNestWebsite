import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';






export const ProductZoom = () => {

    const [ setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto  =(index) =>{
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    return (
        <>
            <div className='flex gap-3'>
                <div className='slider w-[15%]'>
                    <Swiper
                    ref={zoomSliderSml}
                        direction='vertical'
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs h-[450px] !overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group $
                            {slideIndex===4 ? 'opacity-1' :  'opacity-30'}`}
                             onClick={()=>goto(0)}>
                                <img src="https://nuttyyogi.com/cdn/shop/products/Barnyard_Millet_DSC5318.jpg?v=1606373486"
                                    className='w-full h-[70px] transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group $
                            {slideIndex===4 ? 'opacity-1' :  'opacity-30'}`}
                            onClick={()=>goto(1)}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Yg7Mk9H-X_Lo_Xau5EDta3ymXJ_fLzrGLOLzQD3HFKUbVNwMBa1IgFZxr2hMuzRp0E&usqp=CAU"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group $
                            {slideIndex===4 ? 'opacity-1' :  'opacity-30'}`}
                            onClick={()=>goto(2)}>
                                <img src="https://ueirorganic.com/cdn/shop/files/BarnyardMillet_7a1974d7-a544-4e18-b1f4-89b66b2ca2b5.jpg?v=1690279488"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group $
                            {slideIndex===4 ? 'opacity-1' :  'opacity-30'}`}
                            onClick={()=>goto(3)}>
                                <img src="https://m.media-amazon.com/images/I/81aNIG8gXkL._AC_UF350,350_QL80_.jpg"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group $
                            {slideIndex===4 ? 'opacity-1' :  'opacity-30'}`}
                            onClick={()=>goto(4)}>
                                <img src="https://ueirorganic.com/cdn/shop/files/BarnyardMillet_7a1974d7-a544-4e18-b1f4-89b66b2ca2b5.jpg?v=1690279488"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group $
                            {slideIndex===4 ? 'opacity-1' :  'opacity-30'}`}
                            onClick={()=>goto(1)}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Yg7Mk9H-X_Lo_Xau5EDta3ymXJ_fLzrGLOLzQD3HFKUbVNwMBa1IgFZxr2hMuzRp0E&usqp=CAU"
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            
                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className='zoomContainer w-[85%] h-[600px] !overflow-hidden'>
                    <Swiper
                    ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                       
                    >
                        <SwiperSlide>
                        <InnerImageZoom
                            zoomType='hover'
                            zoomScale={1}
                            src="https://farms2home.sg/wp-content/uploads/2021/04/Foxtail-millet_1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <InnerImageZoom
                            zoomType='hover'
                            zoomScale={1}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Yg7Mk9H-X_Lo_Xau5EDta3ymXJ_fLzrGLOLzQD3HFKUbVNwMBa1IgFZxr2hMuzRp0E&usqp=CAU" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <InnerImageZoom
                            zoomType='hover'
                            zoomScale={1}
                            src="https://ueirorganic.com/cdn/shop/files/BarnyardMillet_7a1974d7-a544-4e18-b1f4-89b66b2ca2b5.jpg?v=1690279488" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <InnerImageZoom
                            zoomType='hover'
                            zoomScale={1}
                            src="https://m.media-amazon.com/images/I/81aNIG8gXkL._AC_UF350,350_QL80_.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <InnerImageZoom
                            zoomType='hover'
                            zoomScale={1}
                            src="https://farms2home.sg/wp-content/uploads/2021/04/Foxtail-millet_1.jpg" />
                        </SwiperSlide>

                        
                    </Swiper>

                </div>
            </div>
        </>
    );
};
