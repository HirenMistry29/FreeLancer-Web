import React from "react";
import { Image }        from "react-bootstrap";
import HomeImg          from "../../img/home-image.jpg"
import Navbar           from "../components/navbar/index"
import HomeImgPhn       from "../../img/home-image-phn.jpg"
import Features         from "./features";

const home = ():JSX.Element => {
    return(
        <>
        <Navbar/>
        <div >
            {window.innerWidth < 560 ? <Image src={HomeImgPhn}/> : <Image className="" src={HomeImg}/>}
        </div>
        {/* <div style={{width:'550px', height:'200px', backgroundColor:'black', opacity:'0.0'}} className="tw-absolute tw-top-56 tw-start-56 "/> */}
        {/* <div className="tw-absolute tw-top-56 tw-start-56 tw-justify-content-center tw-text-8xl tw-font-semibold tw-text-white">
            <div>Find Your</div>
            <div>Dream Job</div>
        </div> */}
        {/* <Features/> */}
        </>
    )
}
export default home;