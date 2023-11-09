import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useRef } from "react";
import { companyInputFields as fields } from "../../modules/client/constants/company-input";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom"; 
import DreamJob from "../../modules/components/fillers/dream-job";
import { fireStoreDB } from "../../firebase/fb-config";
import { addDoc, collection } from "firebase/firestore";


const Categories: string[] = [ "Gujurat" , "Maharashtra" , "Tamil Nadu" , "UT"];
// const Genders: string[] = ["Male" , "Female"]


const CompanyForm = ():JSX.Element => {
    const { user } = useUserAuth();
    const value = collection(fireStoreDB,"Users");
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const[ profilePhoto , setProfilePhoto ] = useState();
    const[ formData , setFormData ]         = useState({
        companyName: "",
        companyEmail: "",
        phone: 0,
        companyDescription: "",
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
       navigate("/post-jobs");
       console.log(formData);
       

    const { companyName , companyEmail , phone , 
            companyDescription , 
            add1 , add2 , city , state , zip , userUID , userEmail } = formData;

            await addDoc(value,{companyName: companyName , email: companyEmail , phone_no : phone ,
                                companyDescription: companyDescription , 
                                address_1 : add1 , address_2 : add2 , city: city , state: state , zip:zip ,
                                userUID : userUID , userEmail : userEmail });

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
                    <div className="bg-gray-300 w-[95%] h-[1px] mt-10 flex items-center "><span className="bg-white p-1 ml-14 text-sm text-gray-400">Company Details</span> </div>
                    <div className="col-md-6">
                        <label className="form-label">{fields.companyName.label}</label>
                        <input className="form-control"
                            type="name" 
                            id={fields.companyName.id} 
                            placeholder={fields.companyName.placeholder} 
                            onChange={onInputChange} 
                            value={formData.companyName} 
                            name="companyName"
                            required/>
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">{fields.companyEmail.label}</label>
                        <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        id={fields.companyEmail.id} 
                        placeholder={fields.companyEmail.placeholder}
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
                    <div className="bg-gray-300 w-[95%] h-[1px] mt-10 flex items-center "><span className="bg-white p-1 ml-14 text-sm text-gray-400">Desciption</span> </div>
                    <div className="row mb-3 mt-3">
                        <label  className="col-sm-2 col-form-label">{fields.companyDescription.label}</label>
                        <div className="col-sm-10">
                        <input 
                            type="textbox" 
                            name="companyDescription"
                            className="form-control" 
                            id={fields.companyDescription.id} 
                            placeholder={fields.companyDescription.placeholder}
                            value={formData.companyDescription} 
                            onChange={onInputChange}/>
                        </div>
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
                        <button type="submit" className="btn bg-[#356D65] text-white hover:bg-[#378a5e] hover:text-[#d6d6d6] mt-4 ">Submit</button>
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

export default CompanyForm;