import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from '@mui/material';

const CartPanel = () => {
    return (
        <>
            <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !py-3 !px-4'>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
                       <Link to="/product/4554" className='block group'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sH_CqD3JmtmxaSQwcA-hVY0tB7c59p0N8g&s"
                            className='w-full group-hover:scale-105' />
                       </Link>
                    </div> 

                    <div className='info w-[75%] !pr-5 relative'>

                        <h4 className='text-[14px] font-[500]'>
                           <Link to="/product/4433" className='link transition-all'>
                            Organic red chilli Powder
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty : <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price : Rs 200</span>
                        </p>
                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] 
            cursor-pointer text-[20px] link transition-all'/>
                    </div>



                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
                       <Link to="/product/4554" className='block group'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sH_CqD3JmtmxaSQwcA-hVY0tB7c59p0N8g&s"
                            className='w-full group-hover:scale-105' />
                       </Link>
                    </div> 

                    <div className='info w-[75%] !pr-5 relative'>

                        <h4 className='text-[14px] font-[500]'>
                           <Link to="/product/4433" className='link transition-all'>
                            Organic red chilli Powder
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty : <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price : Rs 200</span>
                        </p>
                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] 
            cursor-pointer text-[20px] link transition-all'/>
                    </div>



                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
                       <Link to="/product/4554" className='block group'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sH_CqD3JmtmxaSQwcA-hVY0tB7c59p0N8g&s"
                            className='w-full group-hover:scale-105' />
                       </Link>
                    </div> 

                    <div className='info w-[75%] !pr-5 relative'>

                        <h4 className='text-[14px] font-[500]'>
                           <Link to="/product/4433" className='link transition-all'>
                            Organic red chilli Powder
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty : <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price : Rs 200</span>
                        </p>
                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] 
            cursor-pointer text-[20px] link transition-all'/>
                    </div>



                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
                       <Link to="/product/4554" className='block group'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sH_CqD3JmtmxaSQwcA-hVY0tB7c59p0N8g&s"
                            className='w-full group-hover:scale-105' />
                       </Link>
                    </div> 

                    <div className='info w-[75%] !pr-5 relative'>

                        <h4 className='text-[14px] font-[500]'>
                           <Link to="/product/4433" className='link transition-all'>
                            Organic red chilli Powder
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty : <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price : Rs 200</span>
                        </p>
                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] 
            cursor-pointer text-[20px] link transition-all'/>
                    </div>



                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
                       <Link to="/product/4554" className='block group'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sH_CqD3JmtmxaSQwcA-hVY0tB7c59p0N8g&s"
                            className='w-full group-hover:scale-105' />
                       </Link>
                    </div> 

                    <div className='info w-[75%] !pr-5 relative'>

                        <h4 className='text-[14px] font-[500]'>
                           <Link to="/product/4433" className='link transition-all'>
                            Organic red chilli Powder
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty : <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price : Rs 200</span>
                        </p>
                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] 
            cursor-pointer text-[20px] link transition-all'/>
                    </div>



                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='img w-[25%] overflow-hidden h-[90px] rounded-md'>
                       <Link to="/product/4554" className='block group'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sH_CqD3JmtmxaSQwcA-hVY0tB7c59p0N8g&s"
                            className='w-full group-hover:scale-105' />
                       </Link>
                    </div> 

                    <div className='info w-[75%] !pr-5 relative'>

                        <h4 className='text-[14px] font-[500]'>
                           <Link to="/product/4433" className='link transition-all'>
                            Organic red chilli Powder
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 !mt-2 !mb-2'>
                            <span>Qty : <span>2</span></span>
                            <span className='text-[#ff5252] font-bold'>Price : Rs 200</span>
                        </p>
                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] 
                            cursor-pointer text-[20px] link transition-all'/>
                    </div>



                </div>
            </div>


            <div className='bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden !pr-5'>
                <div className='bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex
            items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'> 1 item </span>
                        <span className='text-[#ff5252] font-bold'> Rs 200 </span>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <span> Shipping  </span>
                        <span className='text-[#ff5252] font-bold'> Rs 50 </span>
                    </div>
                </div>


                <div className='bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex
            items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'> Total (tax excl.) </span>
                        <span className='text-[#ff5252] font-bold'> Rs 250 </span>
                    </div>

                    <br />
                    <div className='flex items-center justify-between w-full gap-5'>
                        <Link to="/cart" className='w-[50%] d-block'><Button className='btn-org btn-lg 
                        w-full '> View Cart</Button></Link>
                        <Link to="/checkout" className='w-[50%] d-block'><Button className='btn-org btn-border btn-lg
                          w-full '> Checkout</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel
