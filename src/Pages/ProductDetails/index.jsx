import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ProductZoom } from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetails';


export const ProductDetails = () => {
    
    const [activeTab, setActiveTab] = useState(null);
    return (
        <>
            <div className='!py-5 '>
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
            </div>
            <section className='bg-white !py-5'>
                <div className='container flex gap-8 items-center'>
                    <div className='productZoomContainer w-[40%] '>
                        <ProductZoom />
                    </div>

                    <div className='productContent w-[60%] !pr-10 !pl-10'>
                        <ProductDetailsComponent/>
                    </div>
                </div>

                <div className='container !pt-8'>
                    <div className='flex items-center gap-8 !mb-5'>
                        <span
                            className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 &&
                                'text-[#ff5252]'}`}
                            onClick={() => setActiveTab(0)}
                        >

                            Description
                        </span>
                        <span
                            className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 &&
                                'text-[#ff5252]'}`}
                            onClick={() => setActiveTab(1)}
                        >

                            Product Details
                        </span>
                        <span
                            className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 &&
                                'text-[#ff5252]'}`}
                            onClick={() => setActiveTab(2)}
                        >

                            Reviews (5)
                        </span>

                    </div>

                    {activeTab === 0 && (
                        <div className='shadow-md w-full !py-5 !px-8 rounded-md'>
                            <p>
                                ultricies nec, pellentesque eu, pretium
                                quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo.
                            </p>
                            <h4> About 1</h4>
                            <p>  ultricies nec, pellentesque eu, pretium
                                quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo.</p>

                            <h4> About 2</h4>
                            <p>  ultricies nec, pellentesque eu, pretium
                                quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo.</p>

                            <h4> About 3</h4>
                            <p>  ultricies nec, pellentesque eu, pretium
                                quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo.</p>

                            <h4> About 4</h4>
                            <p>  ultricies nec, pellentesque eu, pretium
                                quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    )}


                    {
                        activeTab === 1 && (

                            <div className='shadow-md w-full !py-5 !px-8 rounded-md'>
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="!px-6 !py-3">
                                                    Product name
                                                </th>
                                                <th scope="col" class="!px-6 !py-3">
                                                    Color
                                                </th>
                                                <th scope="col" class="!px-6 !py-3">
                                                    Category
                                                </th>
                                                <th scope="col" class="!px-6 !py-3">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                <th scope="row" class="!px-6 !py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Barnyard Millet"
                                                </th>
                                                <td class="!px-6 !py-4">
                                                    Silver
                                                </td>
                                                <td class="!px-6 !py-4">
                                                    Laptop
                                                </td>
                                                <td class="!px-6 !py-4">
                                                    $2999
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                <th scope="row" class="!px-6 !py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Microsoft Surface Pro
                                                </th>
                                                <td class="!px-6 !py-4">
                                                    White
                                                </td>
                                                <td class="!px-6 !py-4">
                                                    Laptop PC
                                                </td>
                                                <td class="!px-6 !py-4">
                                                    $1999
                                                </td>
                                            </tr>
                                            <tr class="bg-white dark:bg-gray-800">
                                                <th scope="row" class="!px-6 !py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Magic Mouse 2
                                                </th>
                                                <td class="!px-6 !py-4">
                                                    Black
                                                </td>
                                                <td class="!px-6 !py-4">
                                                    Accessories
                                                </td>
                                                <td class="!px-6 !py-4">
                                                    $99
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        )}


                    {activeTab === 2 && (
                        <div className='shadow-md w-[80%] !py-5 !px-8 rounded-md'>
                            <div className='w-full productReviewContainer'>
                                <h2 className='text-[18px]'>Customer questions & answers</h2>

                                <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll
                                    overflow-x-hidden !mt-5 !pr-5'>
                                    <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full 
                                    flex items-center justify-between'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EOZON9cVNhSy8T9V65ZqLvY8TOHB23IG4Q&s' className='w-full' />
                                            </div>

                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'> Meenakshi </h4>
                                                <h5 className='text-[13px] !mb-0'>Apr 3, 2025</h5>
                                                <p className='!mt-0 !mb-0'> Nice Product Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                                </p>
                                            </div>
                                        </div>

                                        <Rating name='size-small'
                                            defaultValue={4}
                                            readOnly
                                        />
                                    </div>
                                    <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full 
                                    flex items-center justify-between'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EOZON9cVNhSy8T9V65ZqLvY8TOHB23IG4Q&s' className='w-full' />
                                            </div>

                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'> Meenakshi </h4>
                                                <h5 className='text-[13px] !mb-0'>Apr 3, 2025</h5>
                                                <p className='!mt-0 !mb-0'> Nice Product Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                                </p>
                                            </div>
                                        </div>

                                        <Rating name='size-small'
                                            defaultValue={4}
                                            readOnly
                                        />
                                    </div>
                                    <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full 
                                    flex items-center justify-between'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EOZON9cVNhSy8T9V65ZqLvY8TOHB23IG4Q&s' className='w-full' />
                                            </div>

                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'> Meenakshi </h4>
                                                <h5 className='text-[13px] !mb-0'>Apr 3, 2025</h5>
                                                <p className='!mt-0 !mb-0'> Nice Product Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                                </p>
                                            </div>
                                        </div>

                                        <Rating name='size-small'
                                            defaultValue={4}
                                            readOnly
                                        />
                                    </div>
                                    <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] w-full 
                                    flex items-center justify-between'>
                                        <div className='info w-[60%] flex items-center gap-3'>
                                            <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EOZON9cVNhSy8T9V65ZqLvY8TOHB23IG4Q&s' className='w-full' />
                                            </div>

                                            <div className='w-[80%]'>
                                                <h4 className='text-[16px]'> Meenakshi </h4>
                                                <h5 className='text-[13px] !mb-0'>Apr 3, 2025</h5>
                                                <p className='!mt-0 !mb-0'> Nice Product Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                                                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                                </p>
                                            </div>
                                        </div>

                                        <Rating name='size-small'
                                            defaultValue={4}
                                            readOnly
                                        />
                                    </div>
                                </div>



                                <br />

                                <div className='reviewForm bg-[#f1f1f1] !p-4 rounded-md'>
                                    <h2 className='text-[18px]'>Add a review</h2>
                                    <form className='w-full !mt-5'>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Write a review..."
                                            className='w-full'
                                            multiline
                                            rows={5}
                                        />

                                        <br/><br/>
                                        <Rating name="size-small" defaultValue={4}/>

                                        <div className='flex items-center !mt-5'>
                                            <Button className='btn-org'>
                                                Submit Review
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    )}
                </div>


                <div className='container !pt-8'>
                <h2 className='text-[20px] font-[600] !pb-0'>Related Products</h2>
                <ProductSlider items={6} />
                </div>
            </section>






        </>
    );
};
