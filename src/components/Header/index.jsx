import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartSharp } from "react-icons/io5";
import { IoGitCompare } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';
import { FaCircleUser } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    const context = useContext(MyContext)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <div className='top-strip !py-2 border-t-2px] border-gray-200 border-b-[2px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
                        </div>

                        <div className='flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link
                                        to='help-center' className='text-[13px] link font-[500] 
                                transition'>Help Center
                                    </Link>
                                </li>
                                <li className='list-none'>
                                    <Link
                                        to='help-center' className='text-[13px] link font-[500] 
                                transition'>Order Tracking
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header !py-2 border-t-2px] border-gray-200 border-b-[2px]'>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[25%] '>
                        <Link to={'/'}>
                            <img src='logo.jpg' />
                        </Link>
                    </div>
                    <div className='col2 w-[40%]' >
                        <Search />
                    </div>
                    <div className='col3 w-[35%] flex items-center pl-7'>

                        <ul className='flex items-center justify-end gap-3 w-full'>


                            {
                                context.isLogin === false ?
                                    (<li className='list-none'>
                                        <Link to='/login' className='link transition text-[15px] font-[500]'>
                                            Login</Link> | &nbsp;
                                        <Link to='/register' className='link transition text-[15px] font-[500]'>
                                            Register
                                        </Link>
                                    </li>
                                    )

                                    :
                                    (
                                        <>
                                            <Button className='myAccountWrap flex items-center gap-3 cursor-pointer ' onClick={handleClick}>
                                                <Button className='w-[14px] h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]
                                                    '><FaCircleUser className='!text-[40px] !text-[rgba(0,0,0,0.7)]' />
                                                </Button>

                                                <div className='info flex flex-col'>
                                                    <h4 className=' leading-3 text-[14px]  text-[rgba(0,0,0,0.6)] font-[500] !mb-0 capitalize text-[left] 
                                                        justify-start'> Manohar Solanki</h4>
                                                    <span className='text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left
                                                        justify-start'>manohar23@gmail.com</span>
                                                </div>
                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to='/my-account' className='w-full block'>
                                                <MenuItem
                                                 onClick={handleClose} 
                                                 className='flex gap-2 !py-3'
                                                 >
                                                    <FaCircleUser className='text-[18px]' />{" "}
                                                    <span className='text-[14px]' >My Account</span>
                                                </MenuItem>
                                                </Link>

                                                <Link to='/my-orders' className='w-full block'>
                                                <MenuItem onClick={handleClose} className='flex gap-2 !py-3'>
                                                    <FaShoppingBag /> <span className='text-[14px]' >Orders</span>
                                                </MenuItem>
                                                </Link>

                                                <Link to='/my-list' className='w-full block'>
                                                <MenuItem onClick={handleClose} className='flex gap-2 !py-3'>
                                                    <FaHeart /><span className='text-[14px]' >My List</span> 
                                                </MenuItem>
                                                </Link>

                                                
                                                <MenuItem onClick={handleClose} className='flex gap-2 !py-3'>
                                                    <IoIosLogOut /> <span className='text-[14px]' >Logout</span>
                                                </MenuItem>
                                                

                                            </Menu>

                                        </>
                                    )}

                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="cart">
                                    <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoCartSharp />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <Navigation />
        </header>



    );
};
export default Header;