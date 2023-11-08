
import { doc , getDoc} from "firebase/firestore";
import React from "react";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

import { fireStoreDB } from "../../firebase/fb-config";

// interface JobDetailsProps{
//     // Project_Name:string;
//     // id:string
//     Deadline:string;
// }


const JobDetails:React.FC = () => {
    const { jobId } = useParams<{ jobId: string }>();
    console.log(jobId);
    const [deadline , setDeadline] = useState();
    const [ projectName , setProjectName ] = useState();
    const [ projectDomain , setProjectDomain ] = useState();
    const [ projectTitle , setProjectTitle ] = useState();
    const [ projectDescription , setProjecDescription ] = useState();
    const [ salary , setSalary ] = useState();
    const [ searchingFor , setSearchingFor ] = useState();
    const [ date , setDate ] = useState();
    const [ time , setTime ] = useState();
    const [ uid , setUID ] = useState();
    const [ userEmail , setUserEmail ] = useState();


    useEffect(() => {
        setTimeout(() => {
            if (jobId) {
                const fetchJobDetails = async () => {
                    try {
                        const jobRef = doc(fireStoreDB, "NewJobs", jobId);
                        const docSnap = await getDoc(jobRef);
                        
                        if (docSnap.exists()) {
                            const jobData = docSnap.data() ; // Assuming job data is an object of JobDetailsProps type
                            console.log(jobData.Deadline);
                            console.log(jobData);
                            setDeadline(jobData.Deadline);
                            setProjectName(jobData.Project_Name);
                            setProjectTitle(jobData.Project_Title);
                            setProjectDomain(jobData.Project_Domain);
                            setProjecDescription(jobData.Project_description);
                            setSalary(jobData.Salary);
                            setDate(jobData.date);
                            setTime(jobData.time);
                            setUserEmail(jobData.userEmail);
                            setUID(jobData.userUID);
                            setSearchingFor(jobData.Searching_For);


                            // setJob(docSnap.data() as JobDetailsProps[]);
                        } else {
                            // Handle job not found
                        }
                    } catch (error) {
                        // Handle error fetching job details
                        console.error("Error fetching job details: ", error);
                    }
                };
        
                fetchJobDetails();
            }
        }, 1000);
        
    }, [jobId]);
    
    
    
    
    return(
        <>
            <div className="p-4 mr-[4%] w-full" id="container">
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col w-[75%]">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold font-sans text-[#32292F]">{projectTitle}</div>
                            <div className="text-3xl font-bold font-sans text-[#32292F] mr-[10%]">{salary}</div>
                        </div>
                        <div className="font-sans text-md mt-[4%]">{projectDescription}</div>
                        <div className="text-2xl font-sans font-semibold mt-[10%]">About the project</div>
                        <div className="flex flex-row justify-between mt-[3%] px-[2%]">
                            <span >Project Domain : <span className="font-semibold text-lg">{projectDomain}</span> </span>
                            <span>Searching For : <span className="font-semibold text-lg">{searchingFor} </span></span>
                        </div>
                        <div className="flex flex-row justify-between mt-[2%] px-[2%]">
                            <span >Deadline :<span className="font-semibold text-lg">{deadline}</span> </span>
                            <span>Job Type : <span className="font-semibold text-lg">Remote </span></span>
                            <span>Salary : <span className="font-semibold text-lg">{salary}</span></span>
                        </div>
                        <div className="flex flex-row justify-between mt-[2%] px-[2%]">
                            <span >Active Resumes : <span className="font-semibold text-lg">12</span> </span>
                            <span>People Visited : <span className="font-semibold text-lg">28 </span></span>
                            <span>Expire : <span className="font-semibold text-lg">{deadline}</span></span>
                        </div>
                        
                    </div>
                    <div className="bg-[#ebc99c] rounded-md p-[2%] w-[35%] mr-[2%] h-max">
                    <div className="flex flex-col gap-2 text-[#32292F]">
                        <div className=" flex justify-center">Resumes   
                        </div>
                        
                        
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default JobDetails;