import { Link } from "react-router-dom";
import React, { useState } from "react";
import LoginCard from '../../../pages/auth/login'

const Dashboard = () => {
const [loginCard , setLoginCard] = useState(false); 

    return(
        <div className="fixed top-0 left-0 right-0 bg-black/70 p-4 px-6 flex justify-between items-center" >
            <h3 className="text-white">JobDekho</h3>
            <span className="flex justify-center items-center gap-3 text-gray-300 text-base">
                <span className="hover:text-white cursor-pointer">companies</span>
                <span className="hover:text-white cursor-pointer">features</span>
                <span className="hover:text-white cursor-pointer">resume</span>
                <span className="hover:text-white cursor-pointer">about us</span>
            </span>
            <span className="flex text-sm justify-end items-center gap-5">
                <span className="item-center flex" onClick={()=>{setLoginCard(false)}}><Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="text-white font-medium " to="/"> <i className="material-icons mr-1 ">home</i>Home</Link></span>
                {/* <span className="item-center flex"><Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="text-white font-medium" to="/login"><i className="material-icons mr-1 ">login</i>login</Link></span> */}
                <span className="item-center flex text-white font-medium cursor-pointer" onClick={()=>{setLoginCard(true)}}><i className="material-icons mr-1 ">login</i>login</span>
                {loginCard && <LoginCard/>}
                <span className="item-center flex"><Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="text-white font-medium" to="/register"><i className="material-icons mr-1 ">how_to_reg</i>SignUp</Link></span>
            </span>
        </div>
    )
}

export default Dashboard;