import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from "react-icons/bs";
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';



const Checkout = () => {

    const context = useContext(MyContext);
    const history = useNavigate();

    const checkOut = () => {
        context?.openAlertBox("success", "Checkout Successfully!");
        setTimeout(() => {
          history('/');
        }, 1000);
      };
      
    return (

        <section className='!py-10 w-[50%]'>



            <div className='container  w-full'>
                <div className='card shadow-md bg-white rouned-md !p-5'>
                    <h2 className='!mb-4'> Your Order </h2>

                    <div className='flex items-center justify-between !py-3
                    border-t border-b border-[rgba(0,0,0,0.1)]'>
                        <span className='text-[14px] font-[600] '> Product </span>
                        <span className='text-[14px] font-[600] '> Subtotal </span>
                    </div>


                    <div className='!mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2'>

                        {
                            context?.cartData?.length !== 0 && context?.cartData?.map((item, index) => {
                                return (
                                    <div className='flex items-center justify-between !py-2' key={index}>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden 
                                                    rounded-md group cursor-pointer'>
                                                <img src={item?.image}
                                                    className='w-full transition-all group-hover:scale-105 ' />
                                            </div>

                                            <div className='info'>
                                                <h4 className='text-[14px]'> {item?.productTitle?.substr(0, 30) + '...'}</h4>
                                                <span className='text-[13px]'>{item?.quantity}</span>
                                            </div>
                                        </div>


                                        <span className='text-[14px] font-[500]'> {
                                            (item?.quantity * item?.price)?.toLocaleString('en-US', { style: 'currency', currency: 'INR' })
                                        }</span>
                                    </div>

                                )
                            })
                        }


                    </div>


                    <Button className='btn-org btn-lg w-full flex items-center gap-2' onClick={checkOut}>
                        <BsFillBagCheckFill className='text-[18px] '/>Checkout</Button>
                </div>
            </div>

        </section>
    )
}


export default Checkout