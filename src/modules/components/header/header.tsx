import React from "react";

const Header = ():JSX.Element => {
    const cuurentPath = window.location.pathname;
    console.log(cuurentPath);
    
    return(
        <>
        <div>
            <div className={`fixed bg-[#356D65] w-[100%] py-2 px-8 ${cuurentPath==="/" && "hidden" }`}>
                <a href="/">
                <div id="Logo" className="cursor-pointer font-['Poppins']  text-2xl font-semibold ">
                    <span className="text-[#F1CBB5] ">Job
                        <span className="text-white  ">Dekho</span>    
                    </span>
                </div>
                </a>
                
            </div>
        </div>
        </>
    )
}

export default Header;