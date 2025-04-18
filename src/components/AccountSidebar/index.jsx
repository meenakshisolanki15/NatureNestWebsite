import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from '@mui/material';
import { MdCloudUpload } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const AccountSidebar = () => {
    return (

        <div className='card bg-white shadow-md rounded-md sticky top-[10px]'>
            <div className='w-full !p-3 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden  !mb-4 relative group'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jrh4Wq-zyx8I4FmPQ0-8aHcNDf_EhntMsnGQY30TJQfzQ9r8RteCGBm8cJYrhPRmjyo&usqp=CAU'
                        className='w-full h-full object-cover ' />

                    <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 
                                bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0
                                transition-all group-hover:opacity-100'>
                        <MdCloudUpload className='text-[#fff] text-[25px]' />
                        <input
                            type='file'
                            className='absolute top-0 left-0 w-full h-full 
                                    opacity-0'/>


                    </div>
                </div>


                <h3>Riya Sharma </h3>
                <h6 className='text-[13px] font-[500]'>riyas@gmail.com</h6>
            </div>

            <ul className='list-none !pb-5 bg-[#f1f1f1] myAccountTabs'>
                <li className='w-full'>
                    <NavLink to='/my-account'
                        exact="true"
                        activeclassname='isActive'

                    >
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none 
                                        flex items-center gap-2'>
                            <FaRegUserCircle className='text-[17px]' />My Profile
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full'>
                    <NavLink to='/my-list'
                        exact="true"
                        activeclassname='isActive'

                    >
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none 
                                        flex items-center gap-2'>
                            <FaHeart className='text-[17px]' />My List
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full'>
                    <NavLink to='/my-orders'
                        exact="true"
                        activeclassname='isActive'

                    >
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none 
                                        flex items-center gap-2'>
                            <FaShoppingBag className='text-[17px]' />My Orders
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full'>

                    <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.7)] !rounded-none 
                                        flex items-center gap-2'>
                        <IoIosLogOut className='text-[17px]' />Logout
                    </Button>

                </li>

            </ul>
        </div>


    );
};

export default AccountSidebar;
