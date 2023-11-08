import React, { useState, useEffect } from "react";
import { collection, getDocs , query , where } from "firebase/firestore";
import { fireStoreDB } from "../../../firebase/fb-config";
// import Job from "../../dashboard/job";
import {ReactComponent as Spinner} from "../../../img/fade-stagger-circles.svg"
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";


interface YourData {
  id: string;
  Project_Title: string;
  Deadline: string;
  Project_description: string;
  Project_Domain: string; // Assuming projectDomain is a string in Firestore
  Salary: number; // Assuming salary is a number in Firestore
  time:string;
  date:string;
  userUID:string
  // Define other properties of your data here
}

const YourJobs = () => {
  const [data, setData] = useState<YourData[]>([]);
  const [loading, setLoading] = useState(true);
  const[userUID,setUserUID] = useState<string>();
  const { user }= useUserAuth();
  const nav = useNavigate();

    // const userUID = user.uid;
    useEffect(()=>{
        if (user) {
            setUserUID(user.uid);
          }
    },[user])

    // console.log(userUID);
    
    if (userUID) {
        const getData = async () => {
            try {
                const q = query(collection(fireStoreDB, "NewJobs"), where("userUID", "==", userUID));
                const querySnapshot = await getDocs(q);
                const newData: YourData[] = [];
                querySnapshot.forEach((doc) => {
                    newData.push({ id: doc.id, ...doc.data() } as YourData);
                });
                setData(newData);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }


  

  return (
    <div className="p-4">
      {loading ? <div className="flex justify-center"><Spinner className="w-10 h-max "/></div> :  data.map((job) => (
        <div key={job.id} className="mb-4">
            <div onClick={()=>nav(`/jobs/${job.id}`)} className="bg-red-100 p-4 rounded-md flex flex-col cursor-pointer">
                <div className="flex justify-between w-full">
                    <div className="text-xl font-semibold text-[#32292F]">{job.Project_Title}</div>
                    <div className="text-sm text-gray-500">Date:{job?.date} Time:{job?.time}</div>
                </div>
                <div>{job.Project_description}</div>
                <div className="mt-[5%] flex flex-row justify-between text-md font-semibold font-sans">
                    <div>Project Domain : {job.Project_Domain}</div>
                    <div>Project Deadline : {job.Deadline}</div>
                    <div>Salary : {job.Salary}</div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default YourJobs;
