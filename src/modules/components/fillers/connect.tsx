import React, { useEffect, useState } from "react";
import { fireStoreDB } from "../../../firebase/fb-config";
import { collection , getDocs } from "firebase/firestore";
// import { query, where } from "firebase/firestore";

interface Users{
    id: string;
    name:string;
    firstName: string;
    lastName : string;
    jobProfile : string;
}

const Connect = () => {
    const[users ,setUsers] = useState<Users[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const userRef = collection(fireStoreDB,"Users-Employees")

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const dbData = await getDocs(userRef);
                setUsers(dbData.docs.map(doc=>({...doc.data(),id:doc.id})) as Users[])
            } catch (error) {
              console.error("Error fetching users: ", error);
            }
          };
          fetchUsers();

          console.log(users);
          
    },[])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return(
        <div className="bg-[#deedff] px-2 py-1 rounded-md  h-[50%] flex flex-col">
            <span className="text-[#537bd1] font-semibold text-md flex justify-center">Connect with people</span>
                <div className="flex flex-col justify-center">
                    <div className="flex ">
                        <div className="">
                            {/*Write a code for to display users , and search for users , the users are retreived from firebase firestore collection "users-employees"  */}
                            <input
                                type="text"
                                placeholder="Search users..."
                                // className="rounded-lg border border-gray-300 p-2"
                                className="bg-[#537bd1] rounded-3xl w-[118%] h-8 mt-2 text-white px-3 "
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                />
                        </div>
                    </div>
                    <div >
                        {filteredUsers.reverse().map((user,id)=>(
                            <>
                            <div className="flex flex-row mt-2 px-2 cursor-pointer">
                                <div id="profile-image" className="bg-gray-300 w-[40px] h-[40px] rounded-[50%] items-center">

                                </div>
                                <div className="flex flex-col ml-[5%] w-full">
                                    <div className="font-semibold hover:font-bold">{user.firstName} {user.lastName}</div>
                                    <span className="text-xs ml-[4%] leading-tight">{user.jobProfile}</span>
                                    {/* <div>{user?.id}</div> */}
                                </div>
                            </div>
                            
                            </>
                        ))}
                    </div>
                </div>
                <div id="pending requests" className="mt-auto">
                    <div className="flex justify-center h-1">
                        <div className="bg-gray-300 w-[90%] h-[30%]"/>
                    </div>
                    <span className="font-semibold text-lg px-2 cursor-pointer ">Pending Requests</span> 
                </div>
        </div>
                    
    )
}

export default Connect;