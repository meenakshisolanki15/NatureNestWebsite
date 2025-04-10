import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';


export const ProductDetails = () => {
  return (
    <>
        <section className='!py-5 '>
            <div className='container'>
                <Breadcrumbs aria-label="breadcrumb ">
                    <Link underline="hover" color="inherit" href="/" className='link transition !text-[14px]'>
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className='link transition !text-[14px]'
                    >
                        Spices
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        className='link transition !text-[14px]'
                    >
                        Pure Barnyard Millet Available
                    </Link>

                </Breadcrumbs>

            </div>
            <section className='bg-white !py-5'>
            <div className='container flex gap-8'>
                <div className='productZoomContainer w-[40%] '>
                    <ProductZoom/>
                </div>

                <div className='productContent w-[60%]'>
                    <h1 className='text-[22px] font-[600] !mb-2'>Barnyard Millet</h1>
                    <div className='flex items-center gap-3'>
                        <span className='text-gray-400 text-[13px]'>
                             Brands: <span className='font-[500] text-black opacity-75'>Organic Uttarakhand </span>
                        </span>

                             <Rating name="size-small" defaultValue={4} size="small" readOnly />
                             <span className='text-[13px] cursor-pointer '>Review (5)</span>

                    </div>

                    <div className='flex items-center gap-4 mt-4'>
                    <span className='oldPrice line-through text-gray-500 text-[18px] font-[500]'>price</span>
                    <span className='oldPrice text-#ff5252 font-[18px]'>price</span>
                </div>
                <br/>
                <p>
                    sfjtrtrytytuytuytuydsjfdsfjdskfjdslfjdlkfjosdfjdsoifjdofjdifj djifjdjfi fjij fdij if ijijiji 
                </p>


                </div>
            </div>
            </section>
            
    </section>
    </>
  );
};
