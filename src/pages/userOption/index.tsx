import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate} from "react-router-dom";
// import CircleSvg from '../../style/circle.svg'

const UserOption = () => {
    const navigate = useNavigate();
    const[userType , setUserType] = useState("");
    const { user } = useUserAuth();
    console.log(user);
    
    return(
        <>
        <div>
            <div className="w-[100%] py-[100px] bg-[#356d65]">
                {/* <div className="bg-red-200 p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Hiren</div> */}
                <div className=" absolute top-1/2 right-1/2 -translate-x-1/4 -translate-y-1/2">
                    <div className="relative bg-white flex flex-col gap-10 items-center pt-8 pb-[420px] px-[120%] rounded-lg shadow-2xl">
                        <div className="text-center text-4xl font-['Poppins] text-[#356d65] font-medium w-max">
                            Select The User
                        </div>
                        <div className=" absolute justify-center mt-[15%]  flex flex-row gap-10 " id="NewRootRoot">
                            <div id="PostJob" onClick={()=>{setUserType("recruiter")}} className="cursor-pointer border-solid border-[#f1cbb5] bg-white relative flex flex-col items-center m-0 pt-[20%] py-[40%] px-[120px] border rounded-lg">
                                <div className=" absolute bg-[#356d65] w-[100%] h-[75%] m-0  rounded-b-lg flex flex-col  items-center justify-start "  >
                                    <div className="-translate-y-1/4  mb-[80px]" >
                                    <div className="ml-[12%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="75" fill="white"/>
                                    </svg>
                                    </div>
                                    <div className="text-center text-xl font-['Poppins'] font-medium text-white self-start mt-[5%] mb-[5%]" >
                                        Post A Job
                                    </div>
                                    <p style={{width: '200px' , height :'100px'}} className=" text-white text-sm font-regular text-justify leading-4">
                                    Ready to take your project to the next level? Hire top talent for your project! Post a job today on our freelancer website and connect with skilled professionals worldwide.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div id="GetJob" onClick={()=>{setUserType("employee"); console.log(userType); navigate('/profile')}} className="cursor-pointer border-solid border-[#f1cbb5] bg-white relative flex flex-col items-center m-0 pt-[20%] py-[40%] px-[120px] border rounded-lg">
                                <div className=" absolute bg-[#356d65] w-[100%] h-[75%] m-0  rounded-b-lg flex flex-col  items-center justify-start "  >
                                    <div className="-translate-y-1/4  mb-[80px]" >
                                    <div className="ml-[12%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="75" fill="white"/>
                                    </svg>
                                    </div>
                                    <div className="text-center text-xl font-['Poppins'] font-medium text-white self-start mt-[5%] mb-[5%]" >
                                        Get A Job
                                    </div>
                                    <p style={{width: '200px' , height :'100px'}} className=" text-white text-sm font-regular text-justify leading-4">
                                        Ready to jumpstart your freelance career? Browse and apply for exciting opportunities on our platform to get the job that matches your skills and passion
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default UserOption;