import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";



const ProductItem = () => {
    return (
        <div className='productItem shadow-lg !rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
            <div className='group imgWrapper w-[100%] !h-[250px] overflow-hidden !rounded-md relative'>
                <Link to="/">
                <div className='img h-[220px] overflow-hidden'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUcZiINJvRLiRs7F_MmrrFvm7MWOwmm1qOA&s"
                        className='w-full' 
                    />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvlFnnAmjnchGBKMnc0Ub0Uv5exWSDsiHtw&s" 
                    className='w-full absolute transition-all duration-700 top-0 left-0 opacity-0 group-hover:opacity-100'
                    />

                </div>
                    
                </Link>

                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50
                        !bg-[#0d74d9] text-white rounded-lg !p-0.5 text-[13px] font-[500]'>10%</span>


                <div className='actions absolute top-[250px] right-[15px] z-50 flex items-center gap-2
                    flex-col w-[50px] transition-all duration-300 group-hover:!top-[15px] opacity-0 group-hover:opacity-100'>

                    <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white
                        text-black hover:!bg-[#14eb1f] hover:text-white group'>
                        <MdOutlineZoomOutMap className='text-[18px] !text-black group-hover:text-white' />
                    </Button>

                    <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white
                        text-black hover:!bg-[#14eb1f] hover:text-white group'>
                        <IoGitCompareSharp className='text-[18px] !text-black group-hover:text-white' />
                    </Button>

                    <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white
                        text-black hover:!bg-[#14eb1f] hover:text-white group'>
                        <FaRegHeart className='text-[18px] !text-black group-hover:text-white' />
                    </Button>
                </div>
            </div>



            <div className='info !p-3 !py-4 '>
                <h6 className='text-[13px]'>
                    <Link to="/" className='link transition-all'>Name </Link>
                </h6>
                <h3 className='text-[13px] title mt-1 font-[500] mb-1 text-[#000]'>
                    <Link to="/" className='link transition-all'> Little detail  </Link>
                </h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <div className='flex items-center gap-4'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>price</span>
                    <span className='oldPrice text-#ff5252 font-bold'>price</span>
                </div>
            </div>
        </div>
    );
};


export default ProductItem;

