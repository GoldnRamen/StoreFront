import { createContext, useState } from "react";

export const HostContext = createContext()
export const HostProvider =({children})=>{
    // const [loggedCustomer, setLoggedCustomer] = useState("")
    // const loggedCustomer = JSON.parse(localStorage.getItem("loggedCustomer")).id
return(
    <HostContext.Provider>
        {children}
    </HostContext.Provider>
)
}