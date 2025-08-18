import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

export default function Login(){
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    const [inputValues, setInputValues] = useState({
        email: "",
        password: ""
    })

    const validateEmail = ()=>{
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValues.email)
    }
    const validatePassword = ()=>{
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/.test(inputValues.password)
    }
    
    const formValidate =()=>{
        const newErrors = {}
        if(!validateEmail){
            newErrors.email = "Email address not recognized"
        }
        if(!validatePassword){
            newErrors.password = "Password must have 6-15 characters, must contain a number and one uppercase character"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e)=>{
        setInputValues({
            ...inputValues,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(formValidate){
            try {
                const resp = await axios.post("http://localhost:5000/api/users/login", inputValues)
                setSubmitted(true)
                if (resp.status === 200){
                    alert("Login Successful")
                    console.log("Login Successful", resp.data)
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log("Invalid Email");
                    }
                    if (error.response.status === 401) {
                        console.log("Invalid Password");
                    }
                    console.error("Error: ", error.response.data);
                } else {
                    console.error("Error: ", error.message);
                }
            }
        }
    }
    
    return(
        <>
        <div className="relative w-full h-[100vh] flex flex-col">
            <Navbar />
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/haIL6hEpTPyI3dK5eoD-2A" className="absolute w-full object-cover h-[100vh] object-center opacity-20"></img>
            <div className="z-10 mx-auto flex flex-col rounded-lg shadow-lg shadow-black mt-32 bg-amber-500 lg:w-[30%] w-[80%] lg:h-[70%] h-[60%] items-center lg:text-lg">
                <div className="w-[95%] bg-yellow-100 h-[95%] mx-auto my-auto shadow-gray-950 shadow-lg p-2">
                    <p className="text-center lg:text-3xl text-xl text-yellow-500 font-extrabold mt-5 underline">Login</p>
                    <div>
                        <form onSubmit={handleSubmit} className="text-black p-3 lg:mt-[15vh] mt-[5vh] space-y-5 w-[80%] mx-auto">
                            <input placeholder="Email"
                            onChange={handleChange} name="email" value={inputValues.email} className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full sm:text-sm"/>
                            <div className="flex gap-1 items-center">
                                <input placeholder="Password"
                                onChange={handleChange} name="password" value={inputValues.password} className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full sm:text-sm"/>
                                <button type="submit" className="lg:p-2 p-1 bg-amber-950 text-white hover:shadow-lg hover:shadow-black rounded-lg sm:text-sm items-center gap-1 flex">Submit<FiLogIn /></button>    
                            </div>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}