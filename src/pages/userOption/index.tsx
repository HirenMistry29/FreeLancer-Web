import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
// import CircleSvg from '../../style/circle.svg'

const UserOption = () => {
    const { user } = useUserAuth();
    console.log(user);
    
    return(
        <>
        <div>
            <div className="tw-w-[100%] tw-py-[100px] tw-bg-[#356d65]">
                {/* <div className="tw-bg-red-200 tw-p-3 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 ">Hiren</div> */}
                <div className=" tw-absolute tw-top-1/2 tw-right-1/2 -tw-translate-x-1/4 -tw-translate-y-1/2">
                    <div className="tw-relative shadow-[-7px_12px_10px_0px_rgba(0,_0,_0,_0.13)] tw-bg-white tw-flex tw-flex-col tw-gap-10 tw-items-center tw-pt-8 tw-pb-[420px] tw-px-[120%] tw-rounded-lg tw-shadow-2xl">
                        <div className="tw-text-center tw-text-4xl tw-font-['Poppins] tw-text-[#356d65] tw-font-medium tw-w-max">
                            Select The User
                        </div>
                        <div className=" tw-absolute tw-justify-center tw-mt-[15%]  tw-flex tw-flex-row tw-gap-10 " id="NewRootRoot">
                            <div id="PostJob" className="tw-border-solid tw-border-[#f1cbb5] tw-bg-white tw-relative tw-flex tw-flex-col tw-items-center tw-m-0 tw-pt-[20%] tw-py-[40%] tw-px-[120px] tw-border tw-rounded-lg">
                                <div className=" tw-absolute tw-bg-[#356d65] tw-w-[100%] tw-h-[75%] tw-m-0  tw-rounded-b-lg tw-flex tw-flex-col  tw-items-center tw-justify-start "  >
                                    <div className="-tw-translate-y-1/4  tw-mb-[80px]" >
                                    <div className="tw-ml-[12%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="75" fill="white"/>
                                    </svg>
                                    </div>
                                    <div className="tw-text-center tw-text-xl tw-font-['Poppins'] tw-font-medium tw-text-white tw-self-start tw-mt-[5%] tw-mb-[5%]" >
                                        Post A Job
                                    </div>
                                    <p style={{width: '200px' , height :'100px'}} className=" tw-text-white tw-text-sm tw-font-regular tw-text-justify tw-leading-4">
                                    Ready to take your project to the next level? Hire top talent for your project! Post a job today on our freelancer website and connect with skilled professionals worldwide.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div id="PostJob" className="tw-border-solid tw-border-[#f1cbb5] tw-bg-white tw-relative tw-flex tw-flex-col tw-items-center tw-m-0 tw-pt-[20%] tw-py-[40%] tw-px-[120px] tw-border tw-rounded-lg">
                                <div className=" tw-absolute tw-bg-[#356d65] tw-w-[100%] tw-h-[75%] tw-m-0  tw-rounded-b-lg tw-flex tw-flex-col  tw-items-center tw-justify-start "  >
                                    <div className="-tw-translate-y-1/4  tw-mb-[80px]" >
                                    <div className="tw-ml-[12%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                        <circle cx="75" cy="75" r="75" fill="white"/>
                                    </svg>
                                    </div>
                                    <div className="tw-text-center tw-text-xl tw-font-['Poppins'] tw-font-medium tw-text-white tw-self-start tw-mt-[5%] tw-mb-[5%]" >
                                        Get A Job
                                    </div>
                                    <p style={{width: '200px' , height :'100px'}} className=" tw-text-white tw-text-sm tw-font-regular tw-text-justify tw-leading-4">
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