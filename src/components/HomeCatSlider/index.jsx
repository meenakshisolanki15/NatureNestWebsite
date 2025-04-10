import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider !py-5'>
      <div className='container'>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true} 
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item !py-8 !px-3 bg-white rounded-sm text-center flex items-center 
          justify-center flex-col'>
                <img src='https://img.freepik.com/premium-photo/finely-dry-turmeric-powder-wooden-bowl-with-rhizome-sliced-green-leaves-isolated-white-background_252965-33.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[16px] font-[500] mt-3'>Turmeric Powder</h3>
              </div>
            </Link>
          </SwiperSlide>

          



        </Swiper>
      </div>
    </div>
  );
}
export default HomeCatSlider;