import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }
    return (
        <>
            <nav className="bg-white">
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[30%]">
                        <Button className="!text-black gap-4 w-full" 
                        onClick={openCategoryPanel}>
                            <RiMenu2Line className="text-[18px]" />
                            Shop By Categories
                            <FaAngleDown className="text-[13px] ml-auto font-bold " />
                        </Button>
                    </div>
                    <div className="col_2  w-full">
                        <ul className="flex items-center gap-4 nav">
                            <li className="list-none w-[100%] ">
                                <Link to="/" className="link transition !text-[15px] font-[500] rounded-20">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                                    hover:!text-[green] !py-4 ">
                                        Home
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none w-[100%] relative ">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                                    hover:!text-[#ff5252]">
                                        Rajma
                                    </Button>
                                </Link>
                                
        
                            </li>
                            <li className="list-none w-[100%] ">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] 
                                    hover:!text-[#ff5252] !py-4">
                                        Rajma
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-none w-[100%]">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] 
                                    hover:!text-[#ff5252] !py-4">
                                        Rajma
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-none w-[100%]">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] 
                                    hover:!text-[#ff5252] !py-4">
                                        Rajma
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-none w-[100%]">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] 
                                    hover:!text-[#ff5252] !py-4">
                                        Rajma
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col_3 w-[18%]">
                        <p className="text-[14px] font-[500] flex items-center gap-2 mb-0 mt-0">
                            <IoIosRocket className="text-[18px]" />
                            Free International Delivery</p>
                    </div>

                </div>
            </nav>

            {/* category panel component ********** */}
            <CategoryPanel isOpenCatPanel={isOpenCatPanel}
                setIsOpenCatPanel={setIsOpenCatPanel} />
        </>

    );
};
export default Navigation;