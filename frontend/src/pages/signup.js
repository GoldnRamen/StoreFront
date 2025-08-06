import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

export default function Signup(){
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        gender: "",
        age: "",
        avatar: "",
        password: ""
    })
    const [errorMsg, setErrorMsg] = useState({})

    const handleChange = (e) =>{
        const{value, name} = e.target
        setInputValues((prevState) => ({
            ...prevState, [name]: value
        }))
    }
    const handleCreate = async(e)=>{
        e.preventDefault()
        const newErrors = {}
        if (!inputValues.firstName || inputValues.firstName.trim().length < 2) {
            newErrors.firstName = "First name must be at least 2 characters long";
        }
        if (!inputValues.lastName || inputValues.lastName.trim().length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters long";
        }
        if (!inputValues.city || inputValues.city.trim().length < 2) {
            newErrors.city = "Address must be at least 2 characters long";
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(inputValues.email)){
            newErrors.email = "Email format is incorrect"
        }
        const phonePattern = /^\d{8,15}$/;
        if (!phonePattern.test(inputValues.phone)){
            newErrors.phone = "Phone number is invalid"
        }
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,15}$/
        if (!passwordPattern.test(inputValues.password)){
            newErrors.password = "Must have upper and lower case letters, numbers and must be 6-15 characters"
        }
        if (Object.keys(newErrors).length > 0){
            setErrorMsg(newErrors)
            return
        }
        try {
            const resp = await axios.post("http://localhost:5000/api/users/register", inputValues)
            if(resp.data.success){
                console.log(resp.data)
                alert("reg successful")
                setInputValues({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    city: "",
                    gender: "",
                    age: "",
                    avatar: "",
                    password: ""
                })
            }
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status);
                if (error.response.status === 403) {
                    alert("You do not have permission to access this resource.");
                }
                if (error.response.status === 500) {
                    alert("Reg failed");
                }
            }
            console.error("Error:", error.message)
        }
    }
    return(
        <>
        <div className="relative w-full h-[100vh] flex flex-col">
            <Navbar />
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/haIL6hEpTPyI3dK5eoD-2A" className="absolute w-full object-cover h-full object-center opacity-20"></img>
            <div className="z-60 mx-auto flex flex-col rounded-lg shadow-lg shadow-black mt-32 bg-amber-500 lg:w-[40%] w-[80%] h-[70%] items-center relative">
                <div className="w-[95%] bg-yellow-100 h-[95%] mx-auto my-auto shadow-gray-950 shadow-lg">
                    <p className="text-center lg:text-3xl text-xl text-yellow-500 font-extrabold my-5 underline">Signup</p>
                    <div className="h-[75%] overflow-y-scroll">
                        <form 
                        onSubmit={handleCreate}
                        className="text-black p-3 mt-[10vh] space-y-5 w-[80%] mx-auto">
                            <div>
                                {errorMsg.firstName ? <p className="text-xs text-red-700">{errorMsg.firstName}</p> : null
                                }
                                <input placeholder="First Name"
                                onChange={handleChange}
                                name="firstName" className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                                value={inputValues.firstName}/>
                            </div>
                            <div>
                                {errorMsg.lastName ? <p className="text-xs text-red-700">{errorMsg.lastName}</p> : null
                                }
                                <input placeholder="Last Name" 
                                onChange={handleChange}
                                name={"lastName"}
                                className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                                value={inputValues.lastName}/>
                            </div>
                            <div>
                                {errorMsg.email ? <p className="text-xs text-red-700">{errorMsg.email}</p> : null
                                }
                                <input placeholder="Email" 
                                onChange={handleChange}
                                name={"email"}
                                className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                                value={inputValues.email}/>
                            </div>
                            <div>
                                {errorMsg.phone ? <p className="text-xs text-red-700">{errorMsg.phone}</p> : null }
                                <input placeholder="Phone (e.g 08012345678)" 
                                onChange={handleChange}
                                name={"phone"}
                                className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                                value={inputValues.phone}/>
                            </div>
                            <div>
                                {errorMsg.city ? <p className="text-xs text-red-700">{errorMsg.city}</p> : null }
                                <input placeholder="Address" 
                                onChange={handleChange}
                                name={"city"}
                                className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                                value={inputValues.city}/>
                            </div>
                            <div className="px-2 py-1 flex lg:flex-row flex-col justify-between gap-2 items-end bg-yellow-200 border-yellow-700 border-b-2 rounded">
                                <label className="text-md lg:block hidden">Avatar
                                </label>
                                <label className="text-sm text-left text-yellow-950 lg:hidden">Avatar</label>
                                <input type={"file"}
                                onChange={handleChange}
                                name={"avatar"}
                                className="px-2 py-1 border-yellow-700 bg-yellow-500 border rounded flex w-full"
                                value={inputValues.avatar}/>
                            </div>
                            <select 
                            onChange={handleChange}
                            name={"gender"}
                            className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                            value={inputValues.gender}>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <div className="px-2 py-1 flex lg:flex-row flex-col justify-between gap-2 items-end bg-yellow-200 border-yellow-700 border-b-2 rounded">
                                <label className="text-sm lg:block hidden">Date of Birth</label>
                                <label className="text-sm text-left text-yellow-950 lg:hidden">D.O.B</label>
                                <input type={"date"}
                                onChange={handleChange}
                                name={"age"}
                                placeholder="DOB" className="bg-yellow-200 flex w-fit"
                                value={inputValues.age}/>
                            </div>
                            <div className="flex gap-1 items-center">
                               <div>
                                    {errorMsg.password ? <p className="text-xs text-red-700">{errorMsg.password}</p> : null }
                                    <input placeholder="Password" 
                                    onChange={handleChange}
                                    name={"password"}
                                    className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full"
                                    value={inputValues.password}/>
                               </div>
                                <button className="lg:p-2 p-1 bg-amber-950 text-white hover:shadow-lg hover:shadow-black rounded-lg sm:text-sm"><FiLogIn /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}