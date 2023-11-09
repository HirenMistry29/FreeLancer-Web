import { collection , query , where , getDocs } from "firebase/firestore";
import React , {useState  , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { fireStoreDB } from "../firebase/fb-config";
import { constants } from "buffer";
import { useUserAuth } from "../context/UserAuthContext";

const Sidebar = () => {
    const nav = useNavigate();
    const value = collection(fireStoreDB,"Users");
    const { user } = useUserAuth();
    const[userUID,setUserUID] = useState<string>();
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        if (user) {
            setUserUID(user.uid);
          }
    },[user])

    if (userUID) {
        const getData = async () => {
            try {
                const q = query(collection(fireStoreDB, "Users"), where("userUID", "==", userUID));
                const querySnapshot = await getDocs(q);
                const newData: any = [];
                querySnapshot.forEach((doc) => {
                    newData.push({ id: doc.id, ...doc.data() } );
                });
                // console.log(newData);
                
                setData(newData);

            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }
    // console.log(data);
    useEffect(()=>{
        if(data && data.length===0){
            console.log(data.length);
            
            console.log("no users");

        }else{
            if (data && data.length>0) {
                console.log(data.length);
                
                console.log("User is logged in");
            }else{
                console.log("no users");
            }
        }
    },[2000])

    return(
        <>
        <div id="sidebar">
            <div className="bg-[#356D65] w-[20%] h-screen fixed left-0 p-4">
                <div className="text-white font-semibold text-xl flex flex-col gap-3 mt-[20%] ml-[20%]">
                    <span onClick={()=>nav("./post-jobs")} className="cursor-pointer hover:text-[21px] hover:text-gray-100">Post Jobs</span>
                    <span onClick={()=>nav("./your-jobs")} className="cursor-pointer hover:text-[21px] hover:text-gray-100">Your Jobs</span>
                    <span onClick={()=>nav("./jobs/:jobId")} className="cursor-pointer hover:text-[21px] hover:text-gray-100 ">Browse Jobs</span>
                    <span className="cursor-pointer hover:text-[21px] hover:text-gray-100 ">{data.length>0 && <a href="/jobs">Get A Job</a>}</span>
                </div>

            </div>
        </div>
        </>
    )
}

export default Sidebar;