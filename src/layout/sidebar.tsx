import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const nav = useNavigate();
    return(
        <>
        <div id="sidebar">
            <div className="bg-[#356D65] w-[20%] h-screen fixed left-0 p-4">
                <div className="text-white font-semibold text-xl flex flex-col gap-3 mt-[20%] ml-[20%]">
                    <span onClick={()=>nav("./post-jobs")} className="cursor-pointer hover:text-[21px] hover:text-gray-100">Post Jobs</span>
                    <span onClick={()=>nav("./your-jobs")} className="cursor-pointer hover:text-[21px] hover:text-gray-100">Your Jobs</span>
                    <span onClick={()=>nav("./jobs/:jobId")} className="cursor-pointer hover:text-[21px] hover:text-gray-100 ">Browse Jobs</span>
                    <span className="cursor-pointer hover:text-[21px] hover:text-gray-100 "><a href="/jobs">Get A Job</a></span>
                </div>

            </div>
        </div>
        </>
    )
}

export default Sidebar;