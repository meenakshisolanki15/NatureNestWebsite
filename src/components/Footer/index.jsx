import React, { useContext } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaSquareFacebook } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { IoLogoPinterest } from "react-icons/io5";
import CartPanel from '../CartPanel'
import Drawer from '@mui/material/Drawer';
import { MyContext } from '../../App';
import { IoClose } from "react-icons/io5";




const Footer = () => {

    const context = useContext(MyContext);


    return (
        <>
            <footer className='!py-6 bg-[#fafafa]'>
                <div className='container'>
                    <div className='flex items-center justify-center gap-2 !py-8 !pb-8'>
                        <div className='col flex items-center justify-center flex-col group w-[20%]'>
                            <LiaShippingFastSolid className='text-[50px] transition-all duration-300
                        group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600]'> Free Shipping</h3>
                            <p className='text-[12px] font-[500]'>For all Orders Over Rs 5000</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[20%]'>
                            <TbTruckReturn className='text-[50px] transition-all duration-300
                        group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600]'> 30 Days Returns</h3>
                            <p className='text-[12px] font-[500]'>For an Exchange Product</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[20%]'>
                            <IoWalletOutline className='text-[50px] transition-all duration-300
                        group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600]'> Secured Payment</h3>
                            <p className='text-[12px] font-[500]'>Payment Cards Accepted</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[20%]'>
                            <IoGiftSharp className='text-[50px] transition-all duration-300
                        group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600]'> Special Gifts</h3>
                            <p className='text-[12px] font-[500]'>Our First Product Order</p>
                        </div>
                        <div className='col flex items-center justify-center flex-col group w-[20%]'>
                            <BiSupport className='text-[50px] transition-all duration-300
                        group-hover:text-[#ff5252] group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600]'> Support 24/7</h3>
                            <p className='text-[12px] font-[500]'>Contact us Anytime</p>
                        </div>
                    </div>

                    <br />

                    <hr />


                    <div className='footer flex !py-12'>
                        <div className='part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]'>
                            <h2 className='text-[18px] font-[600] !mb-4'> Contact Us </h2>
                            <p className='text-[13px] font-[400] !pb-4'>
                                Classyshop - Mega Super Store <br />
                                507-Union Trade Centre France
                            </p>

                            <Link className='link text-[13px]' to='mailto:someone@example.com'>
                                sales@yourcompany.com
                            </Link>
                            <span className='text-[22px] font-[600] block w-full !mt-3 !mb-5 text-[#ff5252]'>
                                (+91) 9876-543-210
                            </span>

                            <div className='flex items-center gap-2'>
                                <BsChatLeftDots className='text-[40px] text-[#ff5252]' />
                                <span className='text-[16px] font-[600]'>Online Chat <br />
                                    Get Expert Help</span>
                            </div>


                        </div>

                        <div className='part2 w-[40%] flex !pl-8'>
                            <div className='part2_col1 w-[50%]'>
                                <h2 className='text-[18px] font-[600] !mb-4'> Products </h2>

                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Prices drop</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>New Products</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Best Sales</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Contact Us</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Stores</Link></li>
                                </ul>
                            </div>

                            <div className='part2_col2 w-[50%]'>
                                <h2 className='text-[18px] font-[600] !mb-4'> Our Company </h2>

                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Delivery </Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Legal Notice</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Terms and Conditions of use</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>About Us</Link></li>
                                    <li className='list-none text-[14px] w-full !mb-2'><Link to='/'
                                        className='link'>Secure payment</Link></li>
                                </ul>
                            </div>
                        </div>


                        <div className='part2 w-[35%] flex !pl-8 flex-col !pr-8'>
                            <h2 className='text-[18px] font-[600] !mb-4'> Subscribe to newsletter </h2>
                            <p className='text-[13px]'> Subscribe to our latest newsletter to get news about special discounts.</p>

                            <form className='!mt-5'>
                                <input type='text' className='w-full h-[45px] border outline-none !pl-4 !pr-4 
                    rounded-sm !mb-4 focus:border-[rgba(0,0,0,0.3)]' placeholder='Your Email Address' />

                                <Button className='btn-org'>SUBSCRIBE</Button>

                                <FormControlLabel control={<Checkbox />} label="I agree to 
                    the terms and conditions and the privacy policy" />


                            </form>


                        </div>


                    </div>


                </div>
            </footer>


            <div className='bottomStrip border-t border-[rgba(0,0,0,0.2)] !py-3'>
                <div className='container flex items-center justify-between'>
                    <ul className='flex items-center gap-2'>
                        <li className='list-none'> 
                            <Link to='/' 
                                target='_blank' 
                                className='w-[40px] h-[40px] rounded-full border
                                border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'
                                >
                                <FaSquareFacebook className='text-[15px] group-hover:text-white'/>
                            </Link>
                        </li>
                        <li className='list-none'> 
                            <Link to='/' 
                                target='_blank' 
                                className='w-[40px] h-[40px] rounded-full border
                                border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'
                                >
                                <RiYoutubeLine className='text-[15px] group-hover:text-white'/>
                            </Link>
                        </li>
                        <li className='list-none'> 
                            <Link to='/' 
                                target='_blank' 
                                className='w-[40px] h-[40px] rounded-full border
                                border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'
                                >
                                <BsInstagram className='text-[15px] group-hover:text-white'/>
                            </Link>
                        </li>
                        <li className='list-none'> 
                            <Link to='/' 
                                target='_blank' 
                                className='w-[40px] h-[40px] rounded-full !border
                                !border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'
                                >
                                <IoLogoPinterest className='text-[15px] group-hover:text-white'/>
                            </Link>
                        </li>
                    </ul>

                    <p className='text-[14px] text-center !mb-0'>
                        Copyright 2025 - Ecommerce Template
                    </p>

                    <div className='flex items-center'>
                        <img src="/master.png" alt='image'/>
                        <img src="/visa.png" alt='image'/>
                        <img src="/paypal.png" alt='image'/>
                        <img src="/rupay.png" alt='image'/>
                    </div>
                </div>
            </div>


            <Drawer
                   open={context.openCartPanel} 
                   onClose={context.toggleCartPanel(false)} 
                   anchor={'right'}
                   className='w-[500px] cartPanel'
                   >
                    <div className='flex items-center justify-between !py-3 !px-4 gap-3 
                    border-b border-[rgba(0,0,0,0.1)] overflow-hidden'>
                    <h4> Sopping Cart (1) </h4>
                    <IoClose className='text-[20px] cursor-pointer' onClick={context.toggleCartPanel(false)}/>
                    </div>
            
                    <CartPanel/>
                  </Drawer>
        </>
    );
};

export default Footer;
