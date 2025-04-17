import React, {  useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";



const ForgotPassword = () => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isPasswordShow2, setIsPasswordShow2] = useState(false);
    

    return (
        <section className='section !py-10'>
            <div className='container'>
                <div className='card shadow-md w-[500px] !m-auto rounded-md bg-white !p-4 !px-10'>
                    <h3 className='text-center text-[18px] !text-black'> Forgot Password </h3>
                    <form className='w-full !mt-5'>
                        <div className='form-group w-full !mb-5 relative'>
                            <TextField
                                type={isPasswordShow===false? 'password' : 'text'}
                                id="password"
                                label="New Password"
                                variant="outlined"
                                className='w-full'
                                name='name'
                            />
                            <Button  type='submit' className='!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px]
                                !min-w-[35px] !rounded-full !text-black'
                                 onClick={()=>
                                 setIsPasswordShow(!isPasswordShow)} >

                                    {isPasswordShow===false ? (
                                        <IoEye className='text-[20px] opacity-75' />
                                    ) :(
                                    <IoEyeOff className='text-[20px] opacity-75' />
                                    )}
                                
                            </Button>
                        </div>
                        <div className='form-group w-full !mb-5 relative'>
                            <TextField
                                type={isPasswordShow2===false ? 'password' : 'text'}
                                id="confirm_password"
                                label="Confirm Password "
                                variant="outlined"
                                className='w-full'
                                name='password'
                            />
                            <Button  type='submit' className='!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px]
                                !min-w-[35px] !rounded-full !text-black'
                                 onClick={()=>
                                 setIsPasswordShow2(!isPasswordShow2)} >

                                    {isPasswordShow2===false ? (
                                        <IoEye className='text-[20px] opacity-75' />
                                    ) :(
                                    <IoEyeOff className='text-[20px] opacity-75' />
                                    )}
                                
                            </Button>
                        </div>


                        

                        <div className='flex items-center w-full !mt-3 !mb-3'>
                            <Button className='btn-org btn-lg w-full'>Change Password </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
