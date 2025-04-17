import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';




const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
         <HomeSlider/>
            
            <HomeCatSlider />

            <section className='bg-white !py-8'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='leftSec'>
                            <h3 className='text-[20px] font-[600]'>Pupular Products</h3>
                            <p className='text-[14px] font-[400]'> Do not miss the current offer until the end of March.</p>
                        </div>

                        <div className='rightSec w-[60%]'>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                                <Tab label="Item Four" />
                                <Tab label="Item Five" />
                                <Tab label="Item Six" />
                                <Tab label="Item Seven" />
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                                <Tab label="Item Four" />
                                <Tab label="Item Five" />
                                <Tab label="Item Six" />
                                <Tab label="Item Seven" />
                            </Tabs>
                        </div>
                    </div>


                    <ProductsSlider items={6} />

                </div>
            </section>

            <section className='!py-3 !pt-2 bg-white'>
                <div className='container'>
                    <div className='freeShipping w-[90%] !m-auto !py-4 p-4 border-2 border-[#ff5252] flex items-center 
                justify-between rounded-md'>
                        <div className='col1 flex items-center gap-4'>
                            <TbTruckDelivery className='text-[50px]' />
                            <span className='text-[20px] font-[600] uppercase'>Free Shipping </span>
                        </div>
                        <div className='col2'>
                            <p className='mb-0 font-[500] '>Free Delivery Now On Your First Order </p>

                        </div>
                        <p className='font-bold text-[25px]'> Only Rs 1000</p>

                    </div>


                    <AdsBannerSlider items={4} />


                </div>
            </section>



            <section className='!py-5 pt-0 bg-white'>
                <div className='container'>
                    <h2 className='text-[20px] font-[600]'>Latest Products</h2>
                    <ProductsSlider items={6} />

                    <AdsBannerSlider items={4} />

                </div>
            </section>


            <section className='!py-5 pt-0 bg-white'>
                <div className='container'>
                    <h2 className='text-[20px] font-[600]'>Featured Products</h2>
                    <ProductsSlider items={6} />

                    <AdsBannerSlider items={3} />

                </div>
            </section>


            <section className='!py-5 pb-2 pt-0 bg-white blogSection'>
                <div className='container'>
                <h3 className='text-[20px] font-[600] mb-4'>From The Blog</h3>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={15}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogSlider"
                    >
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>



            
            

        </>
    )
}
export default Home;