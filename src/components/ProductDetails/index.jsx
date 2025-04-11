import React, { useState } from 'react';
import { Button } from '@mui/material';
import { QtyBox } from '../../components/QtyBox';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';



export const ProductDetailsComponent = () => {

    const [productActionIndex, setProductActionsIndex] = useState(null);
    return (
        <>

            <h1 className='text-[24px] font-[600] !mb-2'>Barnyard Millet</h1>
            <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-[13px]'>
                    Brands: {" "} <span className='font-[500] text-black opacity-75'>Organic Uttarakhand </span>
                </span>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className='text-[13px] cursor-pointer '>Review (5)</span>

            </div>

            <div className='flex items-center gap-4 mt-4'>
                <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>price</span>
                <span className='oldPrice text-#ff5252 font-[20px]'>price</span>

                <span>Available In Stock: <span className='text-green-600
                    text-[14px] font-bold'>
                    147 Items</span> </span>
            </div>
            <br />
            <p className='mt-3 !pr-10 !mb-5'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                porttitor eu, consequat vitae, eleifend ac, enim.
            </p>


            <div className='flex items-center gap-3'>
                <span className='text-[14px]'>Weight:</span>
                <div className='flex items-center gap-1 actions'>
                    <Button className={`${productActionIndex === 0 ? '!bg-[#ff5252] !text-white' : ''}`}
                        onClick={() => setProductActionsIndex(0)}>250 gm</Button>
                    <Button className={`${productActionIndex === 1 ? '!bg-[#ff5252] !text-white' : ''}`}
                        onClick={() => setProductActionsIndex(1)}>500 gm </Button>
                    <Button className={`${productActionIndex === 2 ? '!bg-[#ff5252] !text-white' : ''}`}
                        onClick={() => setProductActionsIndex(2)}> 1 Kg</Button>
                </div>
            </div>

            <p className='text-[14px] !mt-4 !mb-2  text-[#000]'> Free Shipping (Est. Delivery Time 2-3 Days)7</p>
            <div className='flex items-center !mt-4 gap-4'>
                <div className='qtyBoxWrapper w-[75px]'>
                    <QtyBox />

                </div>
                <Button className='btn-org flex gap-2'>
                    <MdOutlineZoomOutMap className='text-[22px]' />Add to Cart

                </Button>
            </div>



            <div className='flex items-center gap-4 !mt-6'>
                <span className='flex items-center gap-2 text[15px] link cursor-pointer
                            font-[500]'><FaRegHeart className='text-[18px]' /> Add to Wishlist</span>
                <span className='flex items-center gap-2 text[15px] link cursor-pointer
                            font-[500]'><IoGitCompareSharp className='text-[18px]' /> Add to Compare</span>
            </div>
            
            </>
    )
}
