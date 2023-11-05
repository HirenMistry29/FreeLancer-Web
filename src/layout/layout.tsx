import React from "react";
import Header from "../modules/components/header/header";
import { Link } from "react-router-dom";
import JobDekhoNews from "../modules/components/fillers/jobdekho-news";
import Connect from "../modules/components/fillers/connect";

interface LayoutProps {
    children:any ;
}

const Layout:React.FC<LayoutProps> = ({children }) => {
    // const css=`flex mt-1 flex-row gap-2 px-1 hidden`
    const currentPath = window.location.pathname;
    

    return(
        <>
            <div className={`${currentPath==="/jobs" || currentPath==="/posts" || currentPath==="/profile" || currentPath==="/resume-builder" ? " " : " hidden"}`}>
                <Header/>
                <div>
                <div className="justify-between flex flex-row h-full gap-2 mt- ">
                    <div id="connect" className="bg-white w-[22%] mt-16 shadow-md rounded-sm fixed h-full left-1.5 px-3 py-1" >
                        <Connect/>
                    </div>
                    <div id="Posts" className="bg-white w-[54%] shadow-md mt-16 h-screen fixed rounded-sm overflow-auto ml-[23%] ">
                        <div className="fixed bg-white w-[51%] left-1/2 -translate-x-1/2">
                            <div className="flex justify-center flex-row gap-4 mt-3 font-semibold">
                                <span className="cursor-pointer"><Link to="./jobs">Jobs</Link></span>
                                <span className="cursor-pointer" ><Link to="./posts">Posts</Link></span>
                                <span className="cursor-pointer" ><Link to="./profile">Profile</Link></span>
                            </div>
                            <div className="flex justify-center"><div className="bg-gray-300 w-[90%] h-[1px] mt-1 mb-2"/></div>
                        </div>
                        <div className="p-4 mt-10">{children}</div>
                    </div>
                    <div id="skills" className="bg-white w-[22%] mt-16 fixed right-1.5 h-full shadow-md rounded-sm  px-3 pt-1">
                        <div className="flex flex-col gap-2">
                            <JobDekhoNews/>
                            <JobDekhoNews/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {currentPath==="/" && <div>{children}</div>}
            {currentPath==="/selectuser" && <div>{children}</div>}
            {currentPath==="/profile" && <div>{children}</div>}
            {currentPath==="/resume-builder" && <div>{children}</div>}




        </>
    )
}

export default Layout;