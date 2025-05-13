import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';

const CartItems = (props) => {

    return (
        <div className='cartItem w-full !p-3 flex items-center gap-4 !pb-5 border-b
    border-[rgba(0,0,0,0.1)]'>
            <div className='img w-[15%] rounded-md overflow-hidden'>
                <Link to="/product/5433">
                    <img src={props?.item?.image}
                        className='w-full group-hover:scale-105 transition-all' />
                </Link>
            </div>

            <div className='info w-[85%] relative'>
                <IoMdClose className='cursor-pointer absolute top-[10px] right-[10px] text-[22px]
            link transiton-all '/>
                
                <h3 className='text-[13px] '> <Link className='link'>{props?.item?.productTitle}
                </Link></h3>

                <Rating name="size-small" defaultValue={props?.item?.rating} size="small" readOnly />
                

                <div className='flex items-center gap-4 !mt-2'>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>&#x20b9; {props?.item.price}</span>
                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>&#x20b9; {props?.item.oldPrice}</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>{props?.item?.discount}</span>
                </div>
            </div>
        </div>

    );
};


export default CartItems;