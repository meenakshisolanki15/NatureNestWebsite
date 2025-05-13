import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MyContext } from '../../App';
import { FaCartPlus } from "react-icons/fa";


const ProductItem = (props) => {

    const [quantity, setQuantity] = useState(1);

    const cat = props?.item;
    const context = useContext(MyContext);

    const addToCart=(product, userId, quantity)=>{
        context?.addToCart(product, userId, quantity);
        
    }


    return (
        <div className='productItem shadow-lg !rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>


            <div className='group imgWrapper w-[100%] !h-[250px] overflow-hidden !rounded-md relative'>
                <Link to="/">
                    <div className='img h-[220px] overflow-hidden'>
                        <img src={cat?.images[0]}
                            className='w-full'
                        />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvlFnnAmjnchGBKMnc0Ub0Uv5exWSDsiHtw&s"
                            className='w-full absolute transition-all duration-700 top-0 left-0 opacity-0 group-hover:opacity-100'
                        />

                    </div>

                </Link>

                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50
                        !bg-[#0d74d9] text-white rounded-lg !p-0.5 text-[13px] font-[500]'>{cat?.discount}%</span>


                <div className='actions absolute top-[250px] right-[15px] z-50 flex items-center gap-2
                    flex-col w-[50px] transition-all duration-300 group-hover:!top-[15px] opacity-0 group-hover:opacity-100'>

                    <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white
                        text-black hover:!bg-[#14eb1f] hover:text-white group' 
                        onClick={() => context.handleOpenProductDetailsModel(true, props?.item)}>
                        <MdOutlineZoomOutMap className='text-[18px] !text-black group-hover:text-white' />
                    </Button>


                </div>
            </div>




            <div className='info !p-3 !py-4 '>
                {/* <h6 className='text-[13px] !font-[400]'>
                                    <Link to="/" className='link transition-all'>Name </Link>
                                </h6> */}
                <h3 className='text-[13px] title mt-1 font-[500] mb-1 text-[#000]'>
                    <Link to="/" className='link transition-all'>{cat?.name}  </Link>
                </h3>
                <Rating name="size-small" defaultValue={cat?.rating} size="small" readOnly />

                <div className='flex items-center gap-4'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>&#x20b9; {cat?.price}</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>&#x20b9; {cat?.oldPrice}</span>
                </div>

                <div className='!absolute bottom-[15px] left-0 !pl-3 !pr-3 w-full'>
                    <Button className='btn-org btn-border flex w-full btn-sm gap-2' size='small'
                    onClick={()=>addToCart(props?.item, context?.userData?._id, quantity)}>
                        <FaCartPlus className='text-[18px]'/> Add to Cart
                    </Button>

                    
                </div>
            </div>
        </div>
    );
};


export default ProductItem;



