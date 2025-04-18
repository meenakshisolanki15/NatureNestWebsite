import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

const MyListItems = () => {

    
    return (
        <div className='cartItem w-full !p-3 flex items-center gap-4 !pb-5 border-b
    border-[rgba(0,0,0,0.1)]'>
            <div className='img w-[15%] rounded-md overflow-hidden'>
                <Link to="/product/5433">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/321680724/QP/IV/PD/9835370/organic-red-rice.png"
                        className='w-full group-hover:scale-105 transition-all' />
                </Link>
            </div>

            <div className='info w-[85%] relative'>
                <IoMdClose className='cursor-pointer absolute top-[10px] right-[10px] text-[22px]
            link transiton-all '/>
                <span className='text-[13px]'> Organic </span>
                <h3 className='text-[13px] '> <Link className='link'>Organic Red Rice
                </Link></h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                

                <div className='flex items-center gap-4 !mt-2'>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>Rs 145/kg</span>
                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>Rs 190/kg</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>50% OFF </span>
                </div>

                <br/>
                <Button className='btn-org btn-sm'>Add to Cart</Button>
            </div>
        </div>

    );
};


export default MyListItems;