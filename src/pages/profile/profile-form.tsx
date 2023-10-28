import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useRef } from "react";
import { profileInputFields as fields } from "../../modules/client/constants/profile-input";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import DreamJob from "../../modules/components/fillers/dream-job";

const Categories: string[] = [ "Gujurat" , "Maharashtra" , "Tamil Nadu" , "UT"];
const Genders: string[] = ["Male" , "Female"]


const ProfileForm = ():JSX.Element => {
    const { user } = useUserAuth();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const[ profilePhoto , setProfilePhoto ] = useState();
    const[ formData , setFormData ]         = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: 0,
        bio: "",
        jobProfile: "",
        gender: [],
        dob: "",
        add1: "",
        add2: "",
        city: "",
        state: [],
        zip:"",
        userUID: user.uid,
        userEmail: user.email,
    })

    const handleProfilePhoto = () => {
        inputRef.current?.click();
    };

    // Handle Cover Photo , BuG: OnClicking coverphoto , profile photos is getting changed
    const handleCoverPhoto = () => {
        inputRef.current?.click();
    }

    const handleChange = (event : any) => {
        const image = event.target.files[0];
        // console.log(image);
        setProfilePhoto(image);
     }

     const handleFormSubmit = async (e : any) => {
        e.preventDefault();
    //    navigate("/jobs")
     }

     const onInputChange = (e : any ) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }


    return(
        <>
            <div id="profilePhoto" className="relative flex w-[100%] h-[300px] flex-col">
                <Image className="bg-gray-200 w-[100%] h-[80%]"/>
                <div className="">
                    {profilePhoto ? <Image src={URL.createObjectURL(profilePhoto)} className="absolute w-[300px] h-[300px] rounded-[50%] right-[70%] top-1/4   bg-gray-200"/> : 
                    <Image className="absolute w-[300px] h-[300px] rounded-[50%] right-[70%] top-1/4   bg-gray-200"/> }
                </div>
                <div className=" absolute left-1/3 top-[85%] flex flex-row gap-5 text-white text-base">
                    <div onClick={handleCoverPhoto} className="bg-gray-700 rounded-sm p-2 cursor-pointer hover:bg-gray-600">Upload Cover Photo</div>
                    <div onClick={handleProfilePhoto} className="bg-gray-700 rounded-sm p-2 cursor-pointer hover:bg-gray-600">Upload Profile Photo</div>
                    <input type="file" ref={inputRef} onChange={handleChange} style={{display: 'none'}} />
                </div>
            </div>
            <div className=" flex flex-row mt-[7%] justify-start">
                <div className=" ml-[2%] mr-[1%] rounded-md bg-white w-[80%] h-max p-4 shadow-md">
                <div className="flex justify-center">
                    <p className="text-[#356D65] font-semibold text-xl">Enter the Details</p>
                </div>
                <div>

                {/* FORM PROFILE */}
                <form className="row g-3 flex justify-center" onSubmit={handleFormSubmit}>

                    {/* USER DETAILS */}
                    <div className="bg-gray-300 w-[95%] h-[1px] mt-10 flex items-center "><span className="bg-white p-1 ml-14 text-sm text-gray-400">User Details</span> </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.firstName.label}</label>
                        <input className="form-control"
                            type="name" 
                            id={fields.firstName.id} 
                            placeholder={fields.firstName.placeholder} 
                            onChange={onInputChange} 
                            value={formData.firstName} 
                            name="firstName"
                            required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.lastName.label}</label>
                        <input className="form-control"
                            type="name"  
                            name="lastName"
                            id={fields.lastName.id} 
                            placeholder={fields.lastName.placeholder} 
                            value={formData.lastName} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">{fields.email.label}</label>
                        <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        id={fields.email.id} 
                        placeholder={fields.email.placeholder}
                        value={formData.userEmail} 
                        onChange={onInputChange}/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">{fields.phone.label}</label>
                        <input
                            type="phone" 
                            name="phone"
                            className="form-control" 
                            id={fields.phone.id}
                            placeholder={fields.phone.placeholder} 
                            maxLength={10}
                            value={formData.phone} 
                            onChange={onInputChange}/>
                    </div>


                    {/* BIO */}
                    <div className="bg-gray-300 w-[95%] h-[1px] mt-10 flex items-center "><span className="bg-white p-1 ml-14 text-sm text-gray-400">Bio</span> </div>
                    <div className="row mb-3 mt-3">
                        <label  className="col-sm-2 col-form-label">{fields.bio.label}</label>
                        <div className="col-sm-10">
                        <input 
                            type="textbox" 
                            name="bio"
                            className="form-control" 
                            id={fields.bio.id} 
                            placeholder={fields.bio.placeholder}
                            value={formData.bio} 
                            onChange={onInputChange}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.jobProfile.label}</label>
                        <input 
                            type="text" 
                            name="jobProfile"
                            className="form-control" 
                            id={fields.jobProfile.id} 
                            placeholder={fields.jobProfile.placeholder}
                            value={formData.jobProfile} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="col-md-3">
                            <label  className="form-label">{fields.gender.label}</label>
                            <select name="gender" id={fields.gender.id} className="form-select" value={formData.gender} onChange={onInputChange}>
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
                    
                    <div className="col-md-3">
                            <label  className="form-label">{fields.dob.label}</label>
                            <input 
                                type="date" 
                                name="dob"
                                className="form-control" 
                                id={fields.dob.id}
                                value={formData.dob} 
                                onChange={onInputChange}
                                ></input>
                        </div>
                    

                    {/* ADDRESS */}
                   <div className="bg-gray-300 w-[95%] h-[1px] mt-10 flex items-center "><span className="bg-white p-1 ml-14 text-sm text-gray-400">Addess</span> </div>

                    <div className="col-12">
                        <label  className="form-label">{fields.addressLine1.label}</label>
                        <input 
                            type="text" 
                            name="add1"
                            className="form-control" 
                            id={fields.addressLine1.id} 
                            placeholder={fields.addressLine1.placeholder}
                            value={formData.add1} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="col-12">
                        <label  className="form-label">{fields.addressLine2.label}</label>
                        <input 
                            type="text" 
                            name="add2"
                            className="form-control" 
                            id={fields.addressLine2.id} 
                            placeholder={fields.addressLine2.placeholder}
                            value={formData.add2} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">{fields.city.label}</label>
                        <input 
                            type="text" 
                            name="city"
                            className="form-control" 
                            id={fields.city.id} 
                            placeholder={fields.city.placeholder}
                            value={formData.city} 
                            onChange={onInputChange}/>
                    </div>
                    <div className="col-md-4">
                        <label  className="form-label">{fields.state.label}</label>
                        <select name="state" id={fields.state.id} className="form-select" value={formData.state} onChange={onInputChange}>
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
                    <div className="col-md-2">
                        <label  className="form-label">{fields.zip.label}</label>
                        <input 
                            type="text" 
                            name="zip"
                            className="form-control" 
                            id={fields.zip.id}
                            placeholder={fields.zip.placeholder} 
                            maxLength={6}
                            value={formData.zip} 
                            onChange={onInputChange}/>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" >
                            Check me out
                        </label>
                        </div>
                    </div> */}
                    <div className="col-12 flex justify-center">
                        <button type="submit" className="btn bg-[#356D65] text-white hover:bg-[#378a5e] hover:text-[#d6d6d6] mt-4 "><a href="/jobs">Submit</a></button>
                    </div>
                </form>
                </div>
                </div>

                <div className="bg-white w-[30%] h-max mr-[1%] p-3 flex flex-col gap-3 shadow-lg mb-3">
                    <DreamJob/>
                    <div className="bg-[#C4EFEA] p-2 rounded-md flex  flex-col">
                        <span className="text-[#215a5e] font-semibold text-lg flex justify-center">FIND UR DREAM JOB</span>
                        <p className="text-[#4a898f] text-justify px-4 py-2 leading-tight">
                            Every task becomes a joyful endeavor, and challenges are viewed as opportunities 
                            for growth rather than obstacles.It provides a platform for creativity to flourish and talents to be recognized, 
                            fostering a deep sense of satisfaction and accomplishment. work is no longer mundane; it is a fulfilling, 
                             exciting adventure that fuels one's ambitions and brings a sense of contentment, making each day a 
                             step toward personal and professional fulfillment.</p>
                    </div>  
                    <div className="bg-[#F5D3FF] p-2 rounded-md flex  flex-col">
                        <span className="text-[#b84ca9] font-semibold text-lg flex justify-center">FIND UR DREAM JOB</span>
                        <p className="text-[#cc6cb7] text-justify px-4 py-2 leading-tight">
                            Every task becomes a joyful endeavor</p>
                    </div>  
                </div>
                
            </div>
            
        </>
    )
}

export default ProfileForm;