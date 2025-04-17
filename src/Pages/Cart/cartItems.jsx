import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';

const CartItems = (props) => {

    const [sizeanchorEl, setSizeAnchorEl] = useState(null);
    const [selectedSize, setCartItems] = useState(props.size);
    const openSize = Boolean(sizeanchorEl);


    const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };

    const handleCloseSize = (value) => {
        setSizeAnchorEl(null);
        if (value !== null) {
            setCartItems(value)
        }
    };


    return (
        <div className='cartItem w-full !p-3 flex items-center gap-4 !pb-5 border-b
    border-[rgba(0,0,0,0.1)]'>
            <div className='img w-[15%] rounded-md overflow-hidden'>
                <Link to="/product/5433">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/321680724/QP/IV/PD/9835370/organic-red-rice.png"
                        className='w-full group-hover:scale-105 transition-all' />
                </Link>
            </div>

            <div className='info w-[85%] relative'>
                <IoMdClose className='cursor-pointer absolute top-[10px] right-[10px] text-[22px]
            link transiton-all '/>
                <span className='text-[13px]'> Organic </span>
                <h3 className='text-[13px] '> <Link className='link'>Organic Red Rice
                </Link></h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className='flex items-center gap-4 !mt-2'>
                    <div className='relative'>
                        <span className='flex items-center justify-center  bg-[#f1f1f1] 
                text-[12px]  !py-1  !px-2 font-[600] rounded-md cursor-pointer'
                            onClick={handleClickSize}>
                            Weight: {selectedSize} <GoTriangleDown />
                        </span>


                        <Menu
                            id="size-menu"
                            anchorEl={sizeanchorEl}
                            open={openSize}
                            onClose={()=>handleCloseSize(null)}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={()=>handleCloseSize('250 gm')}>250 gm</MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('500 gm')}>500 gm </MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('1 kg')}>1 kg </MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('5 gm')}>5 kg </MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('10 gm')}>10 kg </MenuItem>
                        </Menu>
                    </div>
                </div>

                <div className='flex items-center gap-4 !mt-2'>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>Rs 145/kg</span>
                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>Rs 190/kg</span>
                    <span className='Price text-[#ff5252] text-[14px] font-[600]'>50% OFF </span>
                </div>
            </div>
        </div>

    );
};


export default CartItems;