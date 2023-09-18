import React from "react";
import { Image }        from "react-bootstrap";
import HomeImg          from "../../img/home-image.jpg"
import Navbar           from "../components/navbar/index"
import HomeImgPhn       from "../../img/home-image-phn.jpg"
// import Features         from "./features";

const home = ():JSX.Element => {
    return(
        <>
        <Navbar/>
        <div >
            {window.innerWidth < 560 ? <Image src={HomeImgPhn}/> : <Image className="" src={HomeImg}/>}
        </div>
        </>
    )
}
export default home;