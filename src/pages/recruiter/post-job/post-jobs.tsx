import React from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { addDoc, collection } from "firebase/firestore";
import { fireStoreDB } from "../../../firebase/fb-config";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, DragEvent } from "react";
import { postJobInputFields as fields } from "../../../modules/client/constants/post-job-input";

const Categories: string[] = [ "Remote" , "Hybrid" , "Offline"];
const Genders: string[] = ["Male" , "Female"];


const PostJob = () => {
    const { user } = useUserAuth();
    const value = collection(fireStoreDB,"NewJobs");
    const navigate = useNavigate();
    // const [selectedImage, setSelectedImage] = useState(null);
    const[ projectImage , setProjectImage ] = useState<string | null>(null as string | null);
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
        userUID: user?.uid,
        userEmail: user?.email,
    })

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProjectImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
      };
    
      const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProjectImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };

    const onInputChange = (e : any ) => {
        const { name, value } = e.target;

        const formattedValue = value.replace(/\n/g, String.fromCharCode(13, 10));   
        setFormData(prevData => ({
            ...prevData,
            [name]: formattedValue
        }));
    }

    const handleFormSubmit = async (e : any) => {
        e.preventDefault();
       navigate("/your-jobs");
       console.log(formData);
       

    const { projectName, projectTitle , projectDescription , projectDeadline ,
        projectDomain , searchingFor , salary , jobType , employeeGender, userUID , userEmail } = formData;

            await addDoc(value,{Project_Name : projectName , Project_Title : projectTitle , Project_description : projectDescription ,
                                Salary : salary, Deadline : projectDeadline , Project_Domain : projectDomain , 
                                Searching_For : searchingFor , Employee_Gender : employeeGender , Job_Type : jobType ,
                                userUID : userUID , userEmail : userEmail });

     }



    

    return(
        <>
        <div className="text-2xl font-semibold text-[#32292F] p-4">
                    Find Employees For Your Job!!
                </div>
            <div className="flex flex-row gap-10 mb-[2%]">
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
                        <div className="border-dashed border-2 border-gray-300 p-4 text-center" 
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}>
                             <label htmlFor="fileInput" className="cursor-pointer text-blue-500">
                            Select Image
                        </label>
                        <input type="file" accept="image/*" onChange={handleImageChange} className="text-xl bg-transparent"></input>
                           
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">{fields.projectDescription.label}</label>
                        <textarea className="form-control"
                            // type="textbox" 
                            style={{ whiteSpace: 'pre-line' }}
                            id={fields.projectDescription.id} 
                            // dangerouslySetInnerHTML={{ __html: formData.projectDescription }}
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
                <div className="bg-[#fff9f1] rounded-md p-4 w-[35%] mr-[2%] h-max">
                    <div className="flex flex-col gap-2 text-[#32292F]">
                        <div className=" flex justify-center">
                            <div className=" font-semibold text-xl">{formData.projectTitle}</div>
                        </div>
                        {projectImage && <img src={projectImage} style={{width:"100%"}} className="h-max" alt=""/>}
                        <div className=" w-[100%] text-justify">{formData.projectDescription}</div>
                        
                    </div>
                </div>
                
                </div>
                
        </>
    )
}

export default PostJob;