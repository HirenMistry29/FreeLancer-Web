import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ():JSX.Element => {
    const cuurentPath = window.location.pathname;
    console.log(cuurentPath);
    const navigate = useNavigate();
    
    return(
        <>
        <div>
            <div className={`flex justify-between fixed bg-[#356D65] w-[100%] py-2 px-8 ${cuurentPath==="/" && "hidden" }`}>
                <a href="/">
                <div id="Logo" className="cursor-pointer font-['Poppins']  text-2xl font-semibold ">
                    <span className="text-[#F1CBB5] ">Job
                        <span className="text-white  ">Dekho</span>    
                    </span>
                </div>
                </a>
                <div className="flex flex-row gap-3 text-white">
                <span className="cursor-pointer hover:text-gray-200 focus:text-gray-600"><a href="./jobs">Jobs</a></span>
                    <span className="cursor-pointer hover:text-gray-200 focus:text-gray-600"><a href="./resume-builder">Builder</a></span>
                    <span className="cursor-pointer hover:text-gray-200 focus:text-gray-600"><a href="./post-jobs">Post Job</a></span>
                    <span className="cursor-pointer hover:text-gray-200 focus:text-gray-600">Profile</span>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Header;