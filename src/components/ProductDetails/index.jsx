import React from 'react';
import { Button } from '@mui/material';
import { QtyBox } from '../../components/QtyBox';
import { MdOutlineZoomOutMap } from "react-icons/md";
// import { IoGitCompareSharp } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';



export const ProductDetailsComponent = (props) => {

    console.log("Product item:", props?.data);

    //const [productActionIndex, setProductActionsIndex] = useState(null);
    return (
        <>

            <div className="p-6 md:p-10 bg-white  rounded-xl shadow-md">
                <h1 className='text-[24px] font-[800] !mb-2 !mt-8 !px-5'>
                    {props?.data?.name}</h1>


                <div className='flex items-center gap-6 !mt-4 !px-5'>
                    <span className='oldPprice line-through text-gray-500 text-[20px] font-[500]'>Old Price: &#x20b9; {props?.data?.oldPrice}</span>
                    <span className='price text-#ff5252 font-[20px]'>Price: &#x20b9; {props?.data?.price}</span>
                </div>
                <div className='flex items-center !mt-4 !px-5'>
                    <span>Available In Stock: <span className='text-green-600
                    text-[14px] font-bold'>
                        147 Items</span> </span>
                </div>

                <div className='flex items-center gap-3 !mt-4 !px-5'>

                    <Rating name="size-small" defaultValue={props?.data?.rating} size="small" readOnly />
                    <span className='text-[13px] cursor-pointer '>Review (5)</span>

                </div>
                <br />
                <p className='mt-3 !pr-10 !mb-5 !px-5'>
                    {props?.data?.description}
                </p>

                <p className='text-[14px] !mt-4 !mb-2  text-[#000] !px-5'> Free Shipping (Est. Delivery Time 2-3 Days)7</p>
                <div className='flex items-center !mt-4 gap-4 !px-5'>
                    <div className='qtyBoxWrapper w-[75px] !mb-8'>
                        <QtyBox />

                    </div>
                    <Button className='btn-org flex gap-2 !mb-8'>
                        <MdOutlineZoomOutMap className='text-[22px]' />Add to Cart

                    </Button>
                </div>
            </div>
        </>
    )
}
