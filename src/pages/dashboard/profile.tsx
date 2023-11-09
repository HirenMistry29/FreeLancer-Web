import React from "react";

const Profile = () => {
    return(
        <>
            <div>
                <div className="flex flex-col">
                    <div id="profileImg">
                        <div className="h-[200px] w-full bg-gray-300 relative"/>
                        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 w-[200px] h-[200px] rounded-[50%] bg-gray-500"/>
                        <div className="absolute left-1/3 bottom-2/4 -translate-y-1/3  translate-x-1/2 text-2xl font-sans font-semibold">Hiren Mistry</div>
                    </div>
                    <div id="profileDetails" className="mt-[20%]">
                        <div className="w-full h-[1px] bg-gray-600 items-center flex"><span className="ml-[15%] bg-white p-2 font-semibold">Profile</span></div>
                        <div>
                            
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;