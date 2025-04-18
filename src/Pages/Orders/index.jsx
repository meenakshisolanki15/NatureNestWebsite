import React, { useState } from 'react'
import AccountSidebar from '../../components/AccountSidebar';
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../components/Badge';
import { FaAngleUp } from "react-icons/fa6";


const Orders = () => {
    const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

    const isShowOrderedProduct = (index) => {
        if (isOpenOrderedProduct === index) {
            setIsOpenOrderedProduct(null);
        }
        else {
            setIsOpenOrderedProduct(index);
        }
    };
    return (
        <section className='!py-10 w-full'>
            <div className='container flex gap-5'>
                <div className='col1 w-[20%]'>
                    <AccountSidebar />
                </div>

                <div className='col2 w-[80%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='!py-2 !px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2> My Orders </h2>
                            <p className='!mt-0'> There are <span className='font-bold text-[#ff5252]'> 2 </span>
                                orders

                            </p>


                            <div className="relative overflow-x-auto !mt-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="!px-6 !py-3">

                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Order Id
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Payment Id
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Name
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Address
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap ">
                                                Pincode
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Email
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                User Id
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Order Status
                                            </th>
                                            <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-700">
                                            <td className="!px-6 !py-4 font-[500]">
                                                <Button className='!w-[40px] !h-[40px] !min-w-[40px]
                                                    !rounded-full !bg-[#f1f1f1] '
                                                    onClick={() => isShowOrderedProduct(0)}
                                                >
                                                    {isOpenOrderedProduct === 0 ? 
                                                     <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                                                    :  <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />}
                                                   </Button>
                                            </td>
                                            <td className="!px-6 !py-4 font-[500]">
                                                <span className='text-[#ff5252]'>88489248320948329</span>
                                            </td>
                                            <td className="!px-6 !py-4 font-[500]">
                                                <span className='text-[#ff5252]'>94849f24933993uu</span>
                                            </td>
                                            <td className="!px-6 !py-4 font-[500] whitespace-nowrap">Manohar Singh</td>
                                            <td className="!px-6 !py-4 font-[500]">8766777766</td>
                                            <td className="!px-6 !py-4 font-[500]">
                                                <span className='block w-[200px]'>H No. 33 street No 8 Village Siriyon,
                                                    Thano Dehradun Uttarakhand ph. +1008434332
                                                </span>
                                            </td>
                                            <td className="!px-6 !py-4 font-[500]">248143</td>
                                            <td className="!px-6 !py-4 font-[500]">2300</td>
                                            <td className="!px-6 !py-4 font-[500]">manohar22@gmail.com</td>
                                            <td className="!px-6 !py-4 font-[500]">
                                                <span className='text-[#ff5252]'>7d6fsdf655sdfddd333</span>
                                            </td>
                                            <td className="!px-6 !py-4 font-[500]"><Badge status='delivered' /></td>
                                            <td className="!px-6 !py-4 font-[500] whitespace nowrap">Apr 18,2025</td>

                                        </tr>

                                        {
                                            isOpenOrderedProduct === 0 && (



                                                <tr>
                                                    <td className=' !pl-20' colSpan='6'>
                                                        <div className="relative overflow-x-auto">
                                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                                    <tr>

                                                                        <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                                            Product Id
                                                                        </th>
                                                                        <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                                            Product Title
                                                                        </th>
                                                                        <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                                            Image
                                                                        </th>
                                                                        <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                                            Quantity
                                                                        </th>
                                                                        <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                                                                            Price
                                                                        </th>
                                                                        <th scope="col" className="!px-6 !py-3 whitespace-nowrap ">
                                                                            Sub Total
                                                                        </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-700">

                                                                        <td className="!px-6 !py-4 font-[500]">
                                                                            <span className='text-[#ff5252]'>88489248320948329</span>
                                                                        </td>
                                                                        <td className="!px-6 !py-4 font-[500]">
                                                                            Organic Millets
                                                                        </td>
                                                                        <td className="!px-6 !py-4 font-[500] whitespace-nowrap">
                                                                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/LN/IH/PQ/88294987/millets3-jpg-500x500.jpg"
                                                                                className='w-[80px] h-[80px] rounded-md object-cover' />
                                                                        </td>
                                                                        <td className="!px-6 !py-4 font-[500]">2</td>
                                                                        <td className="!px-6 !py-4 font-[500]">
                                                                            1300
                                                                        </td>
                                                                        <td className="!px-6 !py-4 font-[500]">1300</td>


                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders
