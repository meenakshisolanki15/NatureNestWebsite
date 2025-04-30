import React, { useContext, useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from '@mui/material';
import { MdCloudUpload } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { editData } from '../../../../admin/src/utils/api';

const AccountSidebar = () => {
    const [previews, setPreviews] = useState([]);
    const [uploading, setUploading] = useState(false);
    const context = useContext(MyContext);

    const formdata = new FormData();

    useEffect(()=>{
        const userAvatar = [];
        userAvatar.push(context?.userData?.avatar);
        setPreviews(userAvatar)
    },[context?.userData])


    let img_arr = [];
    let uniqueArray = [];
    let selectedImages = [];

    const onChangeFile = async (e, apiEndPoint) => {
        try {
            setPreviews([]);
            const files = e.target.files;
            setUploading(true);
            

            for (var i = 0; i < files.length; i++) {
                if (files[i] && (files[i].type === 'image/jpeg' ||
                    files[i].type === 'image/jpg' ||
                    files[i].type === 'image/png' ||
                    files[i].type === 'image/webp')
                ) {
                    const file = files[i];
                    selectedImages.push(file);
                    formdata.append('avatar', file);



                } else {
                    context.openAlertBox("error", "Please select a valid JPG, PNG or webp image file.");
                    setUploading(false);

                    return false;
                }
            }

            editData("/api/user/user-avatar", formdata).then((res) => {
                setUploading(false);
                let avatar = [];
                console.log(res?.data?.avatar);
                avatar.push(res?.data?.avatar);
                setPreviews(avatar);
                

            })

        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div className='card bg-white shadow-md rounded-md sticky top-[10px]'>
            <div className='w-full !p-3 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden  !mb-4 relative group
                flex items-center justify-center bg-gray-200'>

                    {
                        uploading === true ? <CircularProgress color='inherit' /> :
                            <>
                                {
                                    previews?.length !== 0 ? previews?.map((img, index) => {
                                        return (
                                            <img src={img}
                                                key={index}
                                                className='w-full h-full object-cover '
                                            />

                                        )
                                    }) : 
                                    <img 
                                    src={"/user.webp"}
                                    className='w-full h-full object-cover'
                                    />
                                

                                }

                            </>

                    }



                    <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 
                                bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0
                                transition-all group-hover:opacity-100'>
                        <MdCloudUpload className='text-[#fff] text-[25px]' />
                        <input
                            type='file'
                            className='absolute top-0 left-0 w-full h-full 
                                    opacity-0'
                            accept='image/*'
                            onChange={(e) =>
                                onChangeFile(e, "/api/user/user-avatar")

                            }
                            name="avatar"

                        />




                    </div>
                </div>


                <h3>{context?.userData?.name}</h3>
                <h6 className='text-[13px] font-[500]'>{context?.userData?.email}</h6>
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
