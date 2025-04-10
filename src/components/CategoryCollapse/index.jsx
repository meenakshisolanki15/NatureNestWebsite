import React, { useState } from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegSquareMinus } from "react-icons/fa6";



const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
        
        const openSubmenu = (index) => {
            if (submenuIndex === index) {
                setSubmenuIndex(null);
            }
            else {
                setSubmenuIndex(index);
            }
    
        };
        const openInnerSubmenu = (index) => {
            if (innerSubmenuIndex === index) {
                setInnerSubmenuIndex(null);
            }
            else {
                setInnerSubmenuIndex(index);
            }
    
        };


  return (
    <>
        <div className="scroll">
                <ul className="w-full">
                    <li className="list-none flex items-center relative flex-col">
                        <Link to="/" className="w-full">

                            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                Pulses
                            </Button>
                        </Link>

                        {
                            submenuIndex === 0 ? (<FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer"
                                onClick={() => openSubmenu(0)} />) :
                                (<FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer"
                                    onClick={() => openSubmenu(0)} />)
                        }


                        {
                            submenuIndex === 0 && (


                                <ul className="submenu w-full !pl-3">
                                    <li className="list-none relative">
                                        <Link to="/" className="w-full">

                                            <Button className=" w-full !text-left !justify-start !px-3  text-[rgba(0,0,0,0.8)]">
                                                Rajma
                                            </Button>
                                        </Link>

                                        {
                                            innerSubmenuIndex === 0 ? (<FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer"
                                                onClick={() => openInnerSubmenu(0)} />) :
                                                (<FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer"
                                                    onClick={() => openInnerSubmenu(0)} />)
                                        }
                                        {
                                            innerSubmenuIndex === 0 && (


                                                <ul className="submenu  w-full !pl-3">
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Harsil
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Chakrata
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Himalaya
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Harsil
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Harsil
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}


                                    </li>
                                </ul>
                            )}

                    </li>


                    <li className="list-none flex items-center relative flex-col">
                        <Link to="/" className="w-full">

                            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                Spices
                            </Button>
                        </Link>

                        {
                            submenuIndex === 1 ? (<FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer"
                                onClick={() => openSubmenu(1)} />) :
                                (<FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer"
                                    onClick={() => openSubmenu(1)} />)
                        }


                        {
                            submenuIndex === 1 && (


                                <ul className="submenu  w-full !pl-3">
                                    <li className="list-none relative">
                                        <Link to="/" className="w-full">

                                            <Button className=" w-full !text-left !justify-start !px-3  text-[rgba(0,0,0,0.8)]">
                                                Rajma
                                            </Button>
                                        </Link>

                                        {
                                            innerSubmenuIndex === 1 ? (<FaRegSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer"
                                                onClick={() => openInnerSubmenu(1)} />) :
                                                (<FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer"
                                                    onClick={() => openInnerSubmenu(1)} />)
                                        }
                                        {
                                            innerSubmenuIndex === 1 && (


                                                <ul className="submenu  w-full !pl-3">
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Harsil
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Chakrata
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Himalaya
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Harsil
                                                        </Link>
                                                    </li>
                                                    <li className="list-none relative mb-1">
                                                        <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                            Harsil
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}


                                    </li>
                                </ul>
                            )}

                    </li>
                </ul>
            </div>
    </>
  );
};



export default CategoryCollapse