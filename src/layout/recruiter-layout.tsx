import React from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
    children:any ;
}

const RecruiterLayout:React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <div className="flex flex-row">
            <div id="sidebar">
                    <Sidebar/>
                </div>
                <div className="ml-[21%] w-full h-max">
                    {children}
                </div>
            </div>
        </>
    )
}

export default RecruiterLayout;