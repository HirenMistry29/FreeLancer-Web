import React from "react";
import { Link } from "react-router-dom";

const Header = ():JSX.Element => {
    return(
        <>
        <div>
            <div className="flex bg-[#356D65] w-[100%] py-2 px-8">
                <Link to="/">
                <div id="Logo" className="cursor-pointer font-['Poppins']  text-2xl font-semibold ">
                    <span className="text-[#F1CBB5] ">Job
                        <span className="text-white  ">Dekho</span>    
                    </span>
                </div>
                </Link>
                
            </div>
        </div>
        </>
    )
}

export default Header;