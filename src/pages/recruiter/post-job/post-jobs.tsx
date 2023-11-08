import React from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { addDoc, collection } from "firebase/firestore";
import { fireStoreDB } from "../../../firebase/fb-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postJobInputFields as fields } from "../../../modules/client/constants/post-job-input";

const Categories: string[] = [ "Remote" , "Hybrid" , "Offline"];
const Genders: string[] = ["Male" , "Female"];


const PostJob = () => {
    const { user } = useUserAuth();
    const value = collection(fireStoreDB,"Users-Recruiter");
    const navigate = useNavigate();
    const[ projectPhoto , setProjectPhoto ] = useState();
    const[ formData , setFormData ]         = useState({
        projectName: "",
        projectTitle: "",
        projectDescription: "",
        salary: 0,
        projectDeadline : "",
        projectDomain : "",
        searchingFor : "",
        jobType:[],
        employeeGender : [],
        userUID: user.uid,
        userEmail: user.email,
    })

    const onInputChange = (e : any ) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleFormSubmit = async (e : any) => {
        e.preventDefault();
    //    navigate("/your-jobs");
       console.log(formData);
       

    // const { projectName, projectTitle , projectDescription , projectDeadline ,
    //     projectDomain , searchingFor , salary , jobType , employeeGender, userUID , userEmail } = formData;

    //         await addDoc(value,{Project_Name : projectName , Project_Title : projectTitle , Project_description : projectDescription ,
    //                             Salary : salary, Deadline : projectDeadline , Project_Domain : projectDomain , 
    //                             Searching_For : searchingFor , Employee_Gender : employeeGender , Job_Type : jobType ,
    //                             userUID : userUID , userEmail : userEmail });

     }



    

    return(
        <>
            <div className="">
                <div className="text-2xl font-semibold text-black p-4">
                    Find Employees For Your Job!!
                </div>
                <div id="form" className="w-[60%] h-max">
                <form className="row g-3 flex" onSubmit={handleFormSubmit}>
                <div className="col-md-6">
                        <label className="form-label">{fields.projectName.label}</label>
                        <input className="form-control"
                            type="name" 
                            id={fields.projectName.id} 
                            placeholder={fields.projectName.placeholder} 
                            onChange={onInputChange} 
                            value={formData.projectName} 
                            name="projectName"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.projectTitle.label}</label>
                        <input className="form-control"
                            type="name" 
                            id={fields.projectTitle.id} 
                            placeholder={fields.projectTitle.placeholder} 
                            onChange={onInputChange} 
                            value={formData.projectTitle} 
                            name="projectTitle"
                            required/>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">{fields.projectDescription.label}</label>
                        <input className="form-control"
                            type="textbox" 
                            id={fields.projectDescription.id} 
                            placeholder={fields.projectDescription.placeholder} 
                            onChange={onInputChange} 
                            value={formData.projectDescription} 
                            name="projectDescription"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.projectDomain.label}</label>
                        <input className="form-control"
                            type="text" 
                            id={fields.projectDomain.id} 
                            placeholder={fields.projectDomain.placeholder} 
                            onChange={onInputChange} 
                            value={formData.projectDomain} 
                            name="projectDomain"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.searchingFor.label}</label>
                        <input className="form-control"
                            type="textbox" 
                            id={fields.searchingFor.id} 
                            placeholder={fields.searchingFor.placeholder} 
                            onChange={onInputChange} 
                            value={formData.searchingFor} 
                            name="searchingFor"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.salary.label}</label>
                        <input className="form-control"
                            type="number" 
                            id={fields.salary.id} 
                            placeholder={fields.salary.placeholder} 
                            onChange={onInputChange} 
                            value={formData.salary} 
                            name="salary"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.projectDeadline.label}</label>
                        <input className="form-control"
                            type="date" 
                            id={fields.projectDeadline.id} 
                            placeholder={fields.projectDeadline.placeholder} 
                            onChange={onInputChange} 
                            value={formData.projectDeadline} 
                            name="projectDeadline"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">{fields.employeeGender.label}</label>
                        <select name="state" id={fields.employeeGender.id} className="form-select" value={formData.employeeGender} onChange={onInputChange}>
                        <option selected>Choose...</option>
                        {Genders.map(category => (
                                            <option 
                                                key={category} 
                                                value={category}>
                                                {category}
                                            </option>
                                        ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">{fields.jobType.label}</label>
                        <select name="state" id={fields.jobType.id} className="form-select" value={formData.jobType} onChange={onInputChange}>
                        <option selected>Choose...</option>
                        {Categories.map(category => (
                                            <option 
                                                key={category} 
                                                value={category}>
                                                {category}
                                            </option>
                                        ))}
                        </select>
                    </div>
                    <div className="col-12 flex justify-center">
                        <button type="submit" className="btn bg-[#356D65] text-white hover:bg-[#378a5e] hover:text-[#d6d6d6] mt-4 ">Submit</button>
                    </div>
                </form>
                </div>
                
                </div>
                
        </>
    )
}

export default PostJob;