import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { HostContext } from "@/context/HostContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FiLogIn } from "react-icons/fi";

export default function Login(){
    const routing = useRouter()
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})
    const [invalid, setInvalid] = useState("")
    const [loggedCustomer, setLoggedCustomer] = useState({})
    const [inputValues, setInputValues] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (e)=>{
        setInputValues({
            ...inputValues,
            [e.target.name] : e.target.value
        })
        setErrors({})
        setInvalid("")
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/  

        const formValidate =()=>{
            const newErrors = {}
            if(!validateEmail.test(inputValues.email)){
                newErrors.email = "Email format not recognized"
            }
            if(!validatePassword.test(inputValues.password)){
                newErrors.password = "Password must have 6-15 characters, must contain a number and one uppercase character"
            }
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return false;
            }
            return true
        }

        if(!formValidate()){
            return 
        }

        try {
            const resp = await axios.post("http://localhost:5000/api/users/login", inputValues)
            setSubmitted(true)
            if (resp.status === 200){
                alert("Login Successful")
                routing.push("/")
                console.log("Login Successful", resp.data)
                setInputValues({
                    ...inputValues,
                    password: ""
                })
               localStorage.setItem("loggedCustomer", JSON.stringify(resp.data))
               setLoggedCustomer(loggedCustomer)
               console.log(loggedCustomer)
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    // alert("Invalid Email or Password")
                    setInvalid("Invalid Email or Password")
                    console.log("Invalid Email");
                }
                if (error.response.status === 401) {
                    // alert("Invalid Email or Password")
                    setInvalid("Invalid Email or Password")
                    console.log("Invalid Password");
                }
                console.error("Error: ", error.response.data);
            } else {
                console.error("Error: ", error.message);
            }
        }
    }
    
    return(
        <>
        <div className="relative w-full h-[100vh] flex flex-col">
            <Navbar />
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/haIL6hEpTPyI3dK5eoD-2A" className="absolute w-full object-cover h-[100vh] object-center opacity-40"></img>
            <div className="z-10 mx-auto flex flex-col rounded-lg shadow-lg shadow-black mt-32 bg-amber-500 lg:w-[30%] w-[80%] lg:h-[70%] h-[60%] items-center lg:text-lg">
                <div className="w-[95%] bg-yellow-100 h-[95%] mx-auto my-auto shadow-gray-950 shadow-lg p-2">
                    <p className="text-center lg:text-3xl text-xl text-yellow-500 font-extrabold mt-5 underline">Login</p>
                    <div>
                        <form onSubmit={handleSubmit} className="text-black p-3 lg:mt-[15vh] mt-[5vh] space-y-5 w-[80%] mx-auto">
                           <div>
                                {errors.email ? <p className="text-xs text-red-700">{errors.email}</p> : null}
                                {invalid ? <p className="text-xs text-red-700">Invalid Email or Password</p> : null}
                                <input placeholder="Email"
                                onChange={handleChange} name="email" value={inputValues.email} className="px-2 py-1 first-letter:capitalize border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full sm:text-sm"/>
                           </div>
                            <div>
                                { errors.password ? <p className="text-xs text-red-700">{errors.password}</p> : null }
                                <div className="flex gap-1 items-center">
                                    <input placeholder="Password" type="password"
                                    onChange={handleChange} name="password" value={inputValues.password} className="px-2 py-1 border-yellow-700 bg-yellow-200 border-b-2 rounded flex w-full sm:text-sm"/>
                                    <button type="submit" className="lg:p-2 p-1 bg-amber-950 text-white hover:shadow-lg hover:shadow-black rounded-lg sm:text-sm items-center gap-1 flex">Submit<FiLogIn /></button>    
                                </div>   
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}