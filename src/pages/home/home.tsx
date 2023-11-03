import React from "react";
import { Image }        from "react-bootstrap";
import HomeImg          from "../../img/home-image.jpg"
import Navbar           from "../../modules/components/navbar/index"
import HomeImgPhn       from "../../img/home-image-phn.jpg"
import { Steps } from "./Steps";
import { AutoTypingResume } from "./AutoTypingResume";
// import Features         from "./features";

const home = ():JSX.Element => {
    return(
        <>
        <Navbar/>
        <div className="">
           
            {window.innerWidth < 560 ? <Image src={HomeImgPhn}/> : <Image className="" src={HomeImg}/>}
        </div>
        <div className="flex justify-center  bg-white">
                <AutoTypingResume/>
            </div>
            
        <Steps/>
        </>
    )
}
export default home;