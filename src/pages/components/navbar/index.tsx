import { Link } from "react-router-dom";
import React, { useState } from "react";
import LoginCard from '../../auth/login'

const Dashboard = () => {
const [loginCard , setLoginCard] = useState(false); 

    return(
        <div className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bg-black/70 tw-p-4 tw-px-6 tw-flex tw-justify-between tw-items-center" >
            <h3 className="tw-text-white">JobDekho</h3>
            <span className="tw-flex tw-justify-center tw-items-center tw-gap-3 tw-text-gray-300 tw-text-base">
                <span className="hover:tw-text-white tw-cursor-pointer">companies</span>
                <span className="hover:tw-text-white tw-cursor-pointer">features</span>
                <span className="hover:tw-text-white tw-cursor-pointer">resume</span>
                <span className="hover:tw-text-white tw-cursor-pointer">about us</span>
            </span>
            <span className="tw-flex tw-text-sm tw-justify-end tw-items-center tw-gap-5">
                <span className="tw-item-center tw-flex" onClick={()=>{setLoginCard(false)}}><Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="tw-text-white tw-font-medium " to="/"> <i className="material-icons tw-mr-1 ">home</i>Home</Link></span>
                {/* <span className="tw-item-center tw-flex"><Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="tw-text-white tw-font-medium" to="/login"><i className="material-icons tw-mr-1 ">login</i>login</Link></span> */}
                <span className="tw-item-center tw-flex tw-text-white tw-font-medium tw-cursor-pointer" onClick={()=>{setLoginCard(true)}}><i className="material-icons tw-mr-1 ">login</i>login</span>
                {loginCard && <LoginCard/>}
                <span className="tw-item-center tw-flex"><Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="tw-text-white tw-font-medium" to="/register"><i className="material-icons tw-mr-1 ">how_to_reg</i>SignUp</Link></span>
            </span>
        </div>
    )
}

export default Dashboard;