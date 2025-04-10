import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const BlogItem = () => {
  return (
    <div className='blogItem group'>
        <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
            <img src="https://quasa.io/storage/images/news/iNbJtYPT0Iib2PrO3YVWx8P28MuGIbCTx02Xz10E.jpg" 
            className='w-full transition-all group-hover:scale-105 
            group-hover:rotate-1' alt='blog image'/>
            
            <span className='flex items-center justify-center text-white absolute bottom-[15px]
            right-[15px] z-50 bg-[#ff5252] rounded-md !p-1 text-[11px] font-[500] gap-1'>
            <IoMdTime className='text-[16px]' />5 MARCH, 2025
            </span>
        </div>

        <div className='info py-4'>
            <Link to="/" >
                <h2 className='text-[15px] font-[600] text-black'> name or title of blog </h2>
            </Link>
            <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry....
            </p>
            <Link className='link font-[500] text-[14px] flex items-center gap-1'>Read More <IoIosArrowForward /></Link>
            

        </div>
    </div>
  )
}


export default BlogItem;